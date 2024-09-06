import React, { useState } from "react";
import HeroSection from "./HeroSection";

import About from "./About";
import OurServices from "./OurServices";
import ContactUs from "./ContactUs";
const Home = () => {
  return (
    <div className="app bg-[#0e0e10]">
      <HeroSection />
      <About />
      <OurServices/>
      <ContactUs/>
    </div>
  );
};

export default Home;
