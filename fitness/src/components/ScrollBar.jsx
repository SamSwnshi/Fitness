import React from 'react';

const ScrollBar = ({ data }) => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide gap-2">
      {data?.map((item, index) => (
        <div key={index} className="flex-shrink-0">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollBar;
