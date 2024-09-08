import React, { useState } from "react";
import HeroSection from "./HeroSection";

import About from "./About";
import OurServices from "./OurServices";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="app ">
      <HeroSection />
      <About />
      <OurServices/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Home;
