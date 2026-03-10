import "../styles/fonts.css";
import "../styles/luxury.css";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ThumbnailStrip } from "./components/ThumbnailStrip";
import { WhyNow } from "./components/WhyNow";
import { WhatYouGet } from "./components/WhatYouGet";
import { IsThisYou } from "./components/IsThisYou";
import { Packages } from "./components/Packages";
import { Investment } from "./components/Investment";
import { FAQ } from "./components/FAQ";
import { FinalWord } from "./components/FinalWord";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#140c07]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <CustomCursor />
      <Navbar />
      <Hero />
      <ThumbnailStrip />
      <WhyNow />
      <WhatYouGet />
      <IsThisYou />
      <Packages />
      <Investment />
      <FAQ />
      <FinalWord />
      <Footer />
    </div>
  );
}