import React from 'react';

const About = () => {
  return (
    <div className="flex   flex-col items-center justify-center min-h-screen p-6 bg-[#0e0e10]">
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">About LiftUp</h1>
        <p className="text-gray-300 text-lg mb-8 text-center">
          At LiftUp, we're dedicated to helping you reach your fitness goals. Our state-of-the-art facility is equipped with the latest equipment and staffed by experienced trainers who are passionate about helping you succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl text-[#0e0e10] font-semibold mb-2">Free Weights</h2>
            <p className="text-gray-600">
              Extensive selection of free weights to challenge your muscles.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl text-[#0e0e10]  font-semibold mb-2">Cardio Equipment</h2>
            <p className="text-gray-600">
              State-of-the-art treadmills, ellipticals, and more.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl text-[#0e0e10]  font-semibold mb-2">Group Classes</h2>
            <p className="text-gray-600">
              A variety of classes like yoga, Pilates, and HIIT.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-[#0e0e10] ">Amenities</h2>
            <p className="text-gray-600">
              Spacious locker rooms, showers, and towel service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
