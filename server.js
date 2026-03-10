import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import Stripe from 'stripe';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const PACKAGES = {
  starter: { name: 'Starter', price: 99700, pricePlan: 33300 },
  growth: { name: 'Growth', price: 249700, pricePlan: 83300 },
  empire: { name: 'Empire', price: 499700, pricePlan: 166600 },
};

// Webhook needs raw body — must be before express.json()
app.post(
  '/api/webhook',
  express.raw({ type: 'application/json' }),
  (req, res) => {
    if (!stripe) {
      console.error('Stripe not configured');
      return res.status(500).json({ error: 'Stripe not configured' });
    }
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET not set');
      return res.status(500).json({ error: 'Webhook secret not configured' });
    }
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log('Payment completed:', session.id, session.customer_email);
        break;
      }
      case 'invoice.paid':
        console.log('Subscription payment received:', event.data.object.id);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    res.json({ received: true });
  }
);

app.use(express.json());

// Create Stripe Checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({
      error: 'Stripe is not configured. Set STRIPE_SECRET_KEY.',
    });
  }
  const { packageId, billing } = req.body;
  const pkg = PACKAGES[packageId];
  if (!pkg) {
    return res.status(400).json({ error: 'Invalid package' });
  }
  const isPlan = billing === 'payment-plan';
  const amount = isPlan ? pkg.pricePlan : pkg.price;
  try {
    const sessionConfig = {
      success_url: `${BASE_URL}/?success=true`,
      cancel_url: `${BASE_URL}/#packages`,
      customer_email: undefined,
      metadata: { packageId },
    };
    if (isPlan) {
      const cancelAt = Math.floor(Date.now() / 1000) + 90 * 24 * 60 * 60;
      sessionConfig.mode = 'subscription';
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${pkg.name} Package (3-Month Plan)`,
              description: `3 monthly payments of $${(amount / 100).toFixed(2)}`,
            },
            unit_amount: amount,
            recurring: { interval: 'month', interval_count: 1 },
          },
          quantity: 1,
        },
      ];
      sessionConfig.subscription_data = {
        metadata: { packageId },
        cancel_at: cancelAt,
      };
    } else {
      sessionConfig.mode = 'payment';
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${pkg.name} Package`,
              description: 'Brand package — one-time payment',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ];
    }
    const session = await stripe.checkout.sessions.create(sessionConfig);
    res.json({ url: session.url });
  } catch (err) {
    console.error('Checkout error:', err);
    res.status(500).json({ error: err.message || 'Checkout failed' });
  }
});

// Serve static files from the build directory
app.use(express.static(join(__dirname, 'build')));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  if (!stripe) {
    console.warn('STRIPE_SECRET_KEY not set — payments will not work');
  }
});
