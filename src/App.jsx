import React from "react";
import HeroSection from "./Hero/HeroSection";
import TestimonialSection from "./Testimonial/TestimonialSection";
import IntegrationSection from "./Integration/IntegrationSection";
import PricingSection from "./Pricing/PricingSection";
import CtaSection from "./Cta/CtaSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="bg-[#121212]">
      <HeroSection />
      <TestimonialSection />
      <IntegrationSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
