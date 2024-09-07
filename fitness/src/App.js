import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExercisesDetails from "./components/ExercisesDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import PreLoader from "./components/PreLoader";
import gsap from "gsap";
import "./App.css";

function App() {
  const wrapperRef = useRef(null);
  const progressRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".box", {
      scale: 1,
      y: "-25%",
      ease: "power2",
      duration: 1,
    });
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2, // Duration of the progress animation
      ease: "power2.inOut",
    }).to(wrapperRef.current, {
      y: "-100%", // Move the preloader off the screen
      duration: 3,
      ease: "power1.inOut",
      opacity: 0,
      delay: 0.1, // Delay before removing the preloader
    });
  }, []);
  return (
    <div className="app font-suse ">
      <PreLoader wrapperRef={wrapperRef} progressRef={progressRef} />
      <BrowserRouter>
        <div className="app bg-cover h-screen bg-[#0e0e10] text-[#EFF0F3] ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:id" element={<ExercisesDetails />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
