# Stripe Integration — Rapid Prospect Branding

## TL;DR

This project uses **Stripe Hosted Checkout** (redirect-based). No Stripe.js or React Stripe Elements on the frontend — just a `fetch` call that gets a Stripe URL back, then redirects the browser to it. All the real Stripe work happens in `server.js`.

---

## Credentials You Need

Create a `.env` file in the project root (copy from `.env.example`):

```env
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
BASE_URL=https://your-deployed-url.com
```

| Variable | Where to get it | Purpose |
|---|---|---|
| `STRIPE_SECRET_KEY` | [Stripe Dashboard → Developers → API keys](https://dashboard.stripe.com/apikeys) | Authenticates all server-side Stripe API calls |
| `STRIPE_WEBHOOK_SECRET` | [Stripe Dashboard → Developers → Webhooks](https://dashboard.stripe.com/webhooks) → your endpoint → Signing secret | Verifies incoming webhook events are actually from Stripe |
| `BASE_URL` | Your deployed app URL | Used to build `success_url` and `cancel_url` for Checkout |

> **For testing:** Use your `sk_test_...` key instead of `sk_live_...`. Test keys are on the same API keys page — toggle "Test mode" in the Dashboard.

**What you do NOT need:**
- A publishable key (`pk_live_...` / `pk_test_...`) — not used because this is Hosted Checkout
- Hardcoded Price IDs or Product IDs — prices are created dynamically via `price_data`
- Any Stripe frontend SDK (`@stripe/stripe-js`, `@stripe/react-stripe-js`)

---

## How the Payment Flow Works

```
User clicks "Get Started"
        ↓
Packages.tsx — POST /api/create-checkout-session
  { packageId: "starter"|"growth"|"empire", billing: "one-time"|"payment-plan" }
        ↓
server.js — calls stripe.checkout.sessions.create(...)
        ↓
Returns { url: "https://checkout.stripe.com/..." }
        ↓
Browser redirects to Stripe-hosted Checkout page
        ↓
User pays on Stripe's page
        ↓
Stripe redirects to BASE_URL/success
        ↓
App.tsx detects /success path → renders SuccessPage.tsx
```

### Step-by-Step Detail

1. **User picks a package** in `Packages.tsx` and selects billing type (one-time or payment plan), then clicks the CTA button.

2. **Frontend fires a POST** to `/api/create-checkout-session` with:
   ```json
   { "packageId": "growth", "billing": "payment-plan" }
   ```
   During local dev, Vite proxies `/api` to `http://localhost:3000` (configured in `vite.config.ts`). In production, the Express server serves the built app from the same origin.

3. **`server.js` builds the Checkout session config:**
   - Looks up the package from the `PACKAGES` map
   - **One-time payment:** `mode: 'payment'`, single line item, no recurring
   - **Payment plan:** `mode: 'subscription'`, monthly recurring, `cancel_at` set to 90 days from now (3 payments total), metadata `{ packageId }` stored on the subscription

4. **Stripe returns a `session.url`** — server sends it back as `{ url }`.

5. **Browser redirects** to `session.url` (Stripe's hosted checkout page).

6. **After payment**, Stripe sends the user back to `BASE_URL/success`. The `SuccessPage` component renders — it's a static thank-you page with no server-side session verification (intentional for simplicity).

---

## Package Pricing

Prices live in `server.js` in the `PACKAGES` object (amounts are in **cents**):

```js
// Current (test mode — $0.50 minimum)
const PACKAGES = {
  starter: { name: 'Starter', price: 50,    pricePlan: 17  },
  growth:  { name: 'Growth',  price: 50,    pricePlan: 17  },
  empire:  { name: 'Empire',  price: 50,    pricePlan: 17  },
};

// Real prices (commented out — uncomment for live)
// starter: { name: 'Starter', price: 99700,  pricePlan: 33300  },  // $997 / $333/mo
// growth:  { name: 'Growth',  price: 249700, pricePlan: 83300  },  // $2497 / $833/mo
// empire:  { name: 'Empire',  price: 499700, pricePlan: 166600 },  // $4997 / $1666/mo
```

> **Before going live:** Swap back to the real prices and use your `sk_live_...` key.

---

## Webhook Setup

### In the Stripe Dashboard

1. Go to **Developers → Webhooks → Add endpoint**
2. Set the endpoint URL to: `https://your-deployed-url.com/api/webhook`
3. Select events to listen for:
   - `checkout.session.completed`
   - `invoice.paid`
4. Copy the **Signing secret** (`whsec_...`) and put it in your `.env` as `STRIPE_WEBHOOK_SECRET`

### How it works in code (`server.js`)

The webhook route is registered **before** `express.json()` middleware — this is critical. Stripe signature verification requires the raw request body, and `express.json()` would parse it first and break verification.

```js
app.post('/api/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  // Verify the event came from Stripe
  event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  
  switch (event.type) {
    case 'checkout.session.completed':
      // Payment done — trigger fulfillment here
      break;
    case 'invoice.paid':
      // Subscription renewal charged
      break;
  }
  res.json({ received: true });
});
```

### Currently handled events

| Event | What it means | Current handling |
|---|---|---|
| `checkout.session.completed` | One-time payment OR first subscription payment completed | Logs `session.id` and `session.customer_email` |
| `invoice.paid` | Recurring subscription charge succeeded (months 2 & 3) | Logs invoice ID |

> **To do more** (send confirmation emails, update a database, etc.): add your logic inside the `case` blocks in `server.js`.

### Testing webhooks locally

Use the [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

This gives you a temporary `whsec_...` to use as `STRIPE_WEBHOOK_SECRET` during local development. It will print all incoming events to your terminal.

---

## Running the Project

```bash
# Install dependencies
npm install

# Development (frontend hot-reload + Vite proxy to server)
npm run dev        # Vite frontend on :5173
node server.js     # Express server on :3000 (in a separate terminal)

# Production
npm run build      # Builds frontend into /build
npm start          # Serves frontend + API from :3000
```

---

## Files Involved

| File | Role |
|---|---|
| `server.js` | All Stripe logic — Checkout session creation + webhook handler |
| `.env` / `.env.example` | Credentials |
| `src/app/components/Packages.tsx` | Triggers checkout — `handleCheckout()` calls `/api/create-checkout-session` |
| `src/app/App.tsx` | Detects `/success` route after Stripe redirect |
| `src/app/components/SuccessPage.tsx` | Thank-you page shown after successful payment |
| `vite.config.ts` | Proxies `/api` to Express during local dev |

---

## Common Gotchas (for your other project)

1. **Webhook raw body** — Register the webhook route before `express.json()`. If `express.json()` runs first, the raw body is consumed and `constructEvent` will always throw.

2. **`BASE_URL` must match your actual domain** — If it's wrong, Stripe redirects the user to a broken URL after payment.

3. **Test vs Live keys** — `sk_test_...` keys only work with test card numbers. `sk_live_...` charge real cards. Never commit either to git.

4. **Webhook secret is per-endpoint** — Each webhook endpoint in the Stripe Dashboard has its own `whsec_...`. The one from the CLI (`stripe listen`) is different from the one in the Dashboard.

5. **Subscription `cancel_at`** — This sets an automatic cancellation date (90 days / 3 months). Without it, the subscription would charge forever.

6. **No publishable key needed for Hosted Checkout** — If you're redirecting to `checkout.stripe.com`, you only need the secret key on the server. You only need the publishable key if you're embedding Stripe Elements directly in your page.
