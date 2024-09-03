import React, { useState } from "react";
import { exerciseOption, data } from "../data";

const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const [exercises,setExercises] = useState([])

  const handleSearch = async () => {
    if (search) {
      const gymData = await data(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOption
      );
      const searchExercise = gymData.filter(
        (exercise) =>
          exercise.name.toLowerCase().include(search) ||
          exercise.target.toLowerCase().include(search) ||
          exercise.equipment.toLowerCase().include(search) ||
          exercise.bodyPart.toLowerCase().include(search)
      );

      setSearch("")
      setExercises(searchExercise)
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
