import React from "react";
import HeroSection from "../HeroSection"; 
import WhyFellowship from "../WhyFellowship";
import AboutFellowship from "../AboutFellowship";
import EligibilityOfferings from "../EligibilityOfferings";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyFellowship />
      <AboutFellowship />
      <EligibilityOfferings />
      <Footer />
    </div>
  );
}
