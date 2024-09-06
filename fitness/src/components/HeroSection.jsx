import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center tracking-wide "
      
    >
      <h1 className="text-7xl font-bold mb-2 tracking-wider ">
        Welcome to LiftUp
      </h1>
      <p className=" text-3xl mb-3">
      Your Next Adventure
      </p>
      <p className=" text-xl mb-4 ">
      Sweat, Smile  And Repeat
      </p>
      <p className="text-lg mb-8 w-3/5 ">
        Discover the world of endless possibilities with our platform. Whether you're looking to learn new skills, connect with like-minded people, or explore innovative ideas, we've got you covered.
      </p>
      <Link to="/exercises">
      <button className=" border-2 border-[#EFF0F3] px-6 py-3 rounded-lg hover:bg-red-900 transition duration-300">
        Explore Exercises
      </button>
      </Link>
    </div>
  );
};

export default HeroSection;
