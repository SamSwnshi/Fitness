import React from "react";

const Scroll = ({ data, setBodysPart }) => {
  return (
    <div className="w-full h-4/5 flex flex-wrap gap-7 items-center text-[#734523]     justify-center">
      {data?.map((item, index) => (
        <div
          key={index}
          className="w-56 h-14 flex  bg-white p-5 justify-evenly items-center rounded-lg cursor-pointer hover:bg-[#734523] hover:text-[#ECE3D4]"
          onClick={() => setBodysPart(item)} // Update bodysPart on click
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Scroll;
