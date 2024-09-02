import React, { useState } from "react";

const SearchExercise = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      // const gymData = await fetchData
    }
  };
  return (
    <div className="flex h-screen flex-col items-center gap-2 ">
      <div className="text-4xl flex flex-col justify-center items-center">
        <h1 className=" "> Awesome Exercises You</h1>
        <span>Should Know</span>
      </div>

      <div className="flex  gap-2 w-2/5">
        <input
          type="text"
          placeholder="Search Exersise"
          className="border-2 rounded-md w-4/5 p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className="border-2 w-1/5 rounded-md " onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchExercise;
