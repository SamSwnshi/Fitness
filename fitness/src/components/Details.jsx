import React from "react";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  return (
    <div className="bg-[#ECE3D4] text-[#734523]  tracking-wide flex flex-col md:flex-row h-auto md:h-screen items-center justify-center gap-8 p-4 md:p-8 border-2 border-gray-300 ">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full md:w-2/5 h-auto md:h-3/4 mb-4 md:mb-0">
        <img
          src={gifUrl}
          alt={name}
          className="bg-transparent h-auto w-full max-w-xs md:max-w-full rounded-lg"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-2/5 h-auto text-center">
        <h1 className="text-4xl md:text-2xl font-bold mb-2 text-[#372A15]">
          {name.toUpperCase()}
        </h1>
        <h2 className="text-xl md:text-md mb-4">
          Exercises keep you strong. {name.toUpperCase()} is one of the best
        
          exercises to target your {target}. It will help you improve your
         
          mood and gain energy.
        </h2>
        <p className="text-base md:text-md mb-2">
          <strong>Body Part:</strong> {bodyPart.toUpperCase()}
        </p>
        <p className="text-base md:text-md mb-2">
          <strong>Target:</strong> {target.toUpperCase()}
        </p>
        <p className="text-base md:text-md mb-2">
          <strong>Equipment:</strong> {equipment.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Details;
