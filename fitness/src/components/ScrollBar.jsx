import React from 'react';
import '../App.css'; // Import the custom scrollbar styles

const ScrollBar = ({ data, setBodysPart }) => {
  return (
    <div className="w-full h-62 flex overflow-x-auto gap-4 p-4 scrollbar-custom">
      <div className="flex items-center gap-5">
        {data?.map((item, index) => (
          <div
            key={index}
            className="w-56 h-52 flex bg-white p-5 justify-evenly items-center rounded-lg cursor-pointer shrink-0"
            onClick={() => setBodysPart(item)} // Update bodysPart on click
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
