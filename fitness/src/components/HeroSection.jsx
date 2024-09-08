import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[#ECE3D4] flex flex-col items-center justify-center h-screen text-center tracking-widest text-[#734523] ">
      <h1 className="text-7xl text-[#372A15] font-bold mb-2 tracking-wider ">
        Welcome to LiftUp
      </h1>
      <p className=" text-4xl mb-3 ">Your Next Adventure</p>
      <p className=" text-2xl mb-3 ">Sweat, Smile And Repeat</p>
      <p className="text-lg mb-4 w-4/5 tracking-widest ">
        Discover the world of endless possibilities with our platform. Whether
        you're looking to learn new skills, connect with like-minded people, or
        explore innovative ideas, we've got you covered.
      </p>
      <Link to="/exercises">
        <button className="bg-[#D5B990]   px-6 py-3 rounded-sm hover:bg-red-900 transition duration-300">
          Explore Exercises
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
