import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import ExercisesDetails from "./components/ExercisesDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import ContactUs from "./components/ContactUs";
import PreLoader from "./components/PreLoader";
import gsap from "gsap";
import "./App.css";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const wrapperRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the preloader box and progress bar
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
    });

    // Scroll to top when the preloader starts removing
    tl.to(wrapperRef.current, {
      y: "-100%", // Move the preloader off the screen
      duration: 2,
      ease: "power1.inOut",
      opacity: 0,
      // Delay before removing the preloader
      onComplete: () => {
        // Ensure the page scrolls to the top after the preloader is finished
        window.scrollTo(0, 0);
      },
    });
   
  }, []);

  return (
    <div className="app font-suse">
      <PreLoader wrapperRef={wrapperRef} progressRef={progressRef} />
      <BrowserRouter>
        {/* ScrollToTop component ensures that the page always starts from the top */}
        <ScrollToTop />
        <div className="app bg-cover h-screen">
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
