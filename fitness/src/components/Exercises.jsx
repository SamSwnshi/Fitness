import React, { useEffect, useState } from "react";
import { exerciseOption, fetchData } from "../data";
import { Link } from "react-router-dom";
import ScrollBar from "./ScrollBar"; // Import the ScrollBar component

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodysPart, setBodysPart] = useState("all");
  const [bodyPartList, setBodyPartList] = useState([]); // For ScrollBar
  const [search, setSearch] = useState("");

  // Fetch exercises and body parts on component mount
  useEffect(() => {
    const fetchExeData = async () => {
      try {
        let exerciseData = [];
        const bodyPartData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOption
        );

        if (bodysPart === "all") {
          exerciseData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises",
            exerciseOption
          );
        } else {
          exerciseData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodysPart}`,
            exerciseOption
          );
        }

        setBodyPartList(["all", ...bodyPartData]); // Set body parts in the ScrollBar
        setExercises(exerciseData);
        setFilteredExercises(exerciseData); // Initially show all exercises
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchExeData();
  }, [bodysPart]);

  // Search and filter exercises when the search button is clicked
  const handleSearch = () => {
    if (search) {
      const filtered = exercises.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.target.toLowerCase().includes(search.toLowerCase()) ||
          item.equipment.toLowerCase().includes(search.toLowerCase()) ||
          item.bodyPart.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredExercises(filtered);
    } else {
      setFilteredExercises(exercises); // If search is empty, show all exercises
    }
  };

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-20 h-full flex flex-col items-center justify-center bg-[#ECE3D4] text-[#734523]  tracking-widest">
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="text-3xl font-medium text-[#372A15]">Find the Perfect Exercise for You</h1>
        <p className="text-lg" >
          Search our database of exercises and filter by muscle group and find the perfect workout for your needs.
        </p>
      </div>

      <div className="flex gap-5 mt-3 mb-6 w-4/5  justify-center">
        <input
          type="text"
          placeholder="Search Exercise"
          className="border-2 text-black rounded-md w-3/5 p-2"
          value={search}
          onChange={handleSearchInputChange}
        />
        <button className=" w-36 rounded-md bg-[#734523] text-[#ECE3D4]" onClick={handleSearch}>
          Search
        </button>
      </div>

      <ScrollBar
        data={bodyPartList}
        bodysPart={bodysPart}
        setBodysPart={setBodysPart}
      />

      <div className="grid grid-cols-3 gap-14 p-4">
        {/* Display filteredExercises (either all exercises or filtered results) */}
        {filteredExercises && filteredExercises.length > 0 ? (
          filteredExercises.map((item) => (
            <div key={item.id} className="border p-2 rounded-md">
              <Link
                to={`/exercises/${item.id}`}
                className="block flex flex-col items-center"
              >
                <img
                  src={item.gifUrl}
                  alt={item.name}
                  className="w-full h-auto rounded-md"
                />
                <p className="font-bold mt-2">{item.name}</p>
                <p className="text-gray-600">{item.bodyPart.toUpperCase()}</p>
                <p className="text-gray-500">{item.target}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No exercises found.</p>
        )}
      </div>
    </div>
  );
};

export default Exercises;
