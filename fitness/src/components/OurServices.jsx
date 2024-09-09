import React from "react";

const OurServices = () => {
  return (
    <div className="w-full min-h-screen bg-[#ECE3D4] text-[#6F5B45] flex flex-col items-center justify-center gap-8 tracking-wider p-4 md:p-2">
      <div className="flex flex-col items-center justify-center">
        <p className="text-md rounded-sm md:text-lg p-2 w-32 md:w-40 flex justify-center bg-[#D4C3AA]">
          Services
        </p>
        <h1 className="text-4xl md:text-7xl text-[#372A15] font-bold">
          Our Services
        </h1>
        <p className="text-base md:text-xl text-center">
          Explore the range of services we offer to help you achieve your
          fitness goals.
        </p>
      </div>

      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-around w-full gap-4">
          <div className="w-full md:w-2/5 flex flex-col items-center gap-1 shadow-xl rounded-md p-4 
          bg-[#D4C3AA]">
            <h1 className="text-[#372A15] text-lg md:text-xl font-semibold">
              Personal Training
            </h1>
            <p className="text-sm md:text-md p-2 w-full text-center">
              Work one-on-one with our certified personal trainers to create a
              customized workout plan and achieve your fitness goals.
            </p>
            <button className="h-10 md:h-12 w-36 md:w-44 rounded-md bg-[#ECE3D4] text-[#372A15] mb-2 hover:bg-[#6F5B45] hover:text-[#ECE3D4]">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-2/5 flex flex-col items-center gap-1 shadow-xl rounded-md p-4 bg-[#D4C3AA]">
            <h1 className="text-[#372A15] text-lg md:text-xl font-semibold">
              Group Classes
            </h1>
            <p className="text-sm md:text-md p-2 w-full text-center">
              Join our diverse range of group fitness classes, from yoga and
              Pilates to HIIT and strength training.
            </p>
            <button className="h-10 md:h-12 w-36 md:w-44 rounded-md bg-[#ECE3D4] text-[#372A15] mb-2 hover:bg-[#6F5B45] hover:text-[#ECE3D4]">
              View Schedule
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around w-full gap-4">
          <div className="w-full md:w-2/5 flex flex-col items-center gap-1 shadow-xl rounded-md p-4 bg-[#D4C3AA]">
            <h1 className="text-[#372A15] text-lg md:text-xl font-semibold">
              Nutrition Coaching
            </h1>
            <p className="text-sm md:text-md p-2 w-full text-center">
              Get personalized nutrition guidance from our expert coaches to support your fitness journey.
            </p>
            <button className="h-10 md:h-12 w-36 md:w-44 rounded-md bg-[#ECE3D4] text-[#372A15] mb-2 hover:bg-[#6F5B45] hover:text-[#ECE3D4]">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-2/5 flex flex-col items-center gap-1 shadow-xl rounded-md p-4 bg-[#D4C3AA]">
            <h1 className="text-[#372A15] text-lg md:text-xl font-semibold">
              Massage Therapy
            </h1>
            <p className="text-sm md:text-md p-2 w-full text-center">
              Relax and recover with our professional massage therapists, offering a variety of massage modalities.
            </p>
            <button className="h-10 md:h-12 w-36 md:w-44 rounded-md bg-[#ECE3D4] text-[#372A15] mb-2 hover:bg-[#6F5B45] hover:text-[#ECE3D4]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
