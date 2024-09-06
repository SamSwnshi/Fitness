import React from "react";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  return (
    <div className="flex h-screen  items-center justify-center gap-5 border-2 bg-[#0e0e10] ">
      <div className="flex items-center justify-center w-2/5 h-3/4 ">
        <img src={gifUrl} alt={name} className="bg-transparent h-full w-full rounded-lg" />
      </div>
      
      <div className="flex flex-col items-center justify-center  w-2/5 h-3/4">
      {name.toUpperCase()}
        <h2>
          Exercises keep you strong. {name.toUpperCase()} bup is one
          <span>
            {" "}
            of the best <br /> exercises to target your {target}. It will help
            you improve your <br /> mood and gain energy.
          </span>
        </h2>
        <p>
          <strong>Body Part:</strong> {bodyPart}
        </p>
        <p>
          <strong>Target:</strong> {target}
        </p>
        <p>
          <strong>Equipment:</strong> {equipment}
        </p>

        <p></p>
      </div>
    </div>
  );
};

export default Details;
