import React from "react";
import HeroSection from "../HeroSection"; 
import WhyFellowship from "../WhyFellowship";
import AboutFellowship from "../AboutFellowship";
import Program_objective from "../Program_objective";
import Who_Can_Apply from "./Who_Can_Apply";
import What_You_Gain from "./What_You_Gain";
import Join_the_movement from "./Join_the_movement";
import Footer from "../Footer";


export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <WhyFellowship /> */}
      <AboutFellowship />
      <Program_objective />
      <Who_Can_Apply />
      <What_You_Gain />
      <Join_the_movement />
      <Footer />
    </div>
  );
}
