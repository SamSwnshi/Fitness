import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center"
      
    >
      <h1 className="text-white text-6xl font-bold mb-4">
        Welcome to Your Next Adventure
      </h1>
      <p className="text-white text-2xl mb-8 ">
      Sweat, Smile  And Repeat
      </p>
      <p className="text-white text-lg mb-8 w-3/5 ">
        Discover the world of endless possibilities with our platform. Whether you're looking to learn new skills, connect with like-minded people, or explore innovative ideas, we've got you covered.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
        Explore Exercises
      </button>
    </div>
  );
};

export default HeroSection;
