import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="heading bg-[#ECE3D4] flex flex-col items-center justify-center h-screen text-center tracking-widest text-[#734523] px-4">
      <h1 id="hero-heading" className="text-4xl md:text-7xl text-[#372A15] font-bold mb-2 tracking-wider">
        Welcome to LiftUp
      </h1>
      <p id="hero-subheading" className="text-2xl md:text-3xl mb-3">Your Next Adventure</p>
      <p id="hero-text1" className="text-xl md:text-2xl mb-3">Sweat, Smile And Repeat</p>
      <p id="hero-text2" className="text-base md:text-lg mb-4 w-full md:w-4/5 tracking-widest">
        Discover the world of endless possibilities with our platform. Whether you're looking to learn new skills, connect with like-minded people, or explore innovative ideas, we've got you covered.
      </p>
      <Link to="/exercises">
        <button id="hero-button" className="bg-[#6F5B45] text-[#ECE3D4] px-4 py-2 md:px-6 md:py-3 rounded-sm hover:bg-[#d6b787] transition duration-300">
          Explore Exercises
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
