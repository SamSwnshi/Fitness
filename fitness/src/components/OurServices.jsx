import React from "react";

const OurServices = () => {
  return (
    <div className="w-full h-screen bg-[#ECE3D4] text-[#6F5B45] flex flex-col items-center justify-center gap-8 tracking-wide">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg p-2 w-40 flex  justify-center bg-[#D5B990]">
          Services
        </p>
        <h1 className="text-7xl text-[#372A15] font-bold">Our Services</h1>
        <p className="text-xl">
          Explore the range of services we offer to help you achieve your
          fitness goals.
        </p>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="flex items-center  justify-around  ">
          <div className="w-2/5 h-full  flex flex-col items-center gap-1 shadow-xl rounded-md ">
            <h1 className="text-[#372A15] text-xl  font-semibold">
              Personal Training
            </h1>
            <p className="p-2 w-full text-md flex items-center  justify-center">
              Work one-on-one with our certified personal trainers to create a
              customized workout plan and achieve your fitness goals.
            </p>
            <button className="h-12 w-44 rounded-md  bg-[#D5B990] text-[#372A15] mb-2">
              Learn More
            </button>
          </div>
          <div className="w-2/5 h-full flex flex-col items-center gap-1 shadow-xl rounded-md">
            <h1 className="text-[#372A15] text-xl  font-semibold">
              Group Classes
            </h1>
            <p className="p-2 w-full text-md flex items-center  justify-center">
              Join our diverse range of group fitness classes, from yoga and
              Pilates to HIIT and strength training.
            </p>
            <button className="h-12 w-44 rounded-md bg-[#D5B990] text-[#372A15] mb-2">
              View Schedule
            </button>
          </div>
        </div>
        <div className="flex items-center   justify-around ">
          <div className="w-2/5 h-full  flex flex-col items-center gap-1 shadow-xl rounded-md">
            <h1 className="text-[#372A15] text-xl  font-semibold">
              Nutrition Coaching
            </h1>
            <p className="p-2 w-full text-md flex items-center  justify-center">
              Get personalized nutrition guidance from our expert coaches to{" "}
              support your fitness journey.
            </p>
            <button className="h-12 w-44 rounded-md bg-[#D5B990] text-[#372A15] mb-2">
              Learn More
            </button>
          </div>
          <div className="w-2/5 h-full  flex flex-col items-center gap-1 shadow-xl rounded-md">
            <h1 className="text-[#372A15] text-xl  font-semibold">
              Massage Therapy
            </h1>
            <p className="p-2 w-full text-md flex items-center  justify-center">
              Relax and recover with our professional massage therapists,
              offering a variety of massage modalities.
            </p>
            <button className="h-12 w-44 rounded-md bg-[#D5B990] text-[#372A15] mb-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
