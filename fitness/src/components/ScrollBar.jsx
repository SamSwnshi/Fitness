import React from 'react';

const ScrollBar = ({ data, setBodysPart }) => {
  return (
    <div className="w-full h-4/5 flex flex-wrap gap-12 items-center justify-center">
      {data?.map((item, index) => (
        <div
          key={index}
          className="w-36 h-24 flex border-2 p-5 justify-evenly items-center rounded-lg cursor-pointer"
          onClick={() => setBodysPart(item)} // Update bodysPart on click
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default ScrollBar;
