import React from "react";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center  p-6 bg-[#D4C3AA] text-[#6F5B45]">
      <div className=" h-screen p-8 rounded-lg  flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#372A15] ">About LiftUp</h1>
        <p className=" text-lg mb-8 text-center">
          At LiftUp, we're dedicated to helping you reach your fitness goals.
          Our state-of-the-art facility is equipped with the latest equipment
          and staffed by experienced trainers who are passionate about helping
          you succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-[#ECE3D4] rounded-lg shadow-lg">
            <h2 className="text-xl text-[#372A15]  font-semibold mb-2">
              Free Weights
            </h2>
            <p >
              Extensive selection of free weights to challenge your muscles.
            </p>
          </div>
          <div className="p-4  bg-[#ECE3D4] rounded-lg shadow-lg">
            <h2 className="text-xl text-[#372A15]  font-semibold mb-2">
              Cardio Equipment
            </h2>
            <p >
              State-of-the-art treadmills, ellipticals, and more.
            </p>
          </div>
          <div className="p-4  bg-[#ECE3D4] rounded-lg shadow-lg">
            <h2 className="text-xl text-[#372A15]  font-semibold mb-2">
              Expert Trainers
            </h2>
            <p >
              Our team of certified trainers are here to guide you every step of
              the way, providing personalized attention and support.
            </p>
          </div>
          <div className="p-4  bg-[#ECE3D4] rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-[#372A15] ">
              Amenities
            </h2>
            <p >
              Spacious locker rooms, showers, and towel service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
