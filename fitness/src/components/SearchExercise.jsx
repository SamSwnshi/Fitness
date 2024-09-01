import React from "react";

const SearchExercise = () => {
  return (
    <div className="flex h-screen flex-col items-center border-2 ">
      <h1>
        {" "}
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="flex  gap-2 w-2/5">
      <input type="text" placeholder="Search Exersise" className="border-2 rounded-md w-4/5  p-2" />
      <button className="border-2 w-1/5 rounded-md ">Search</button>
      </div>
     
    </div>
  );
};

export default SearchExercise;
