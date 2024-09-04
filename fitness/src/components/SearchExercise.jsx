import React, { useEffect, useState } from "react";
import { exerciseOption, fetchData } from "../data";
import ScrollBar from "./ScrollBar";

const SearchExercise = ({setBodysPart,bodysPart,setExercises}) => {
  const [search, setSearch] = useState("");
 
  const [bodyPart, setBodyPart] = useState([]);
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const cachedData = localStorage.getItem("bodyParts");

        if (cachedData) {
          setBodyPart(["all", ...JSON.parse(cachedData)]);
        } else {
          const exercisesData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
            exerciseOption
          );

          if (Array.isArray(exercisesData)) {
            setBodyPart(["all", ...exercisesData]);
            localStorage.setItem("bodyParts", JSON.stringify(exercisesData)); // Cache the response
          } else {
            console.error("Unexpected response format", exercisesData);
            setBodyPart(["all"]); // Fallback to a default value if response is unexpected
          }
        }
      } catch (error) {
        setError("Failed to fetch exercises. Please try again later.");
        console.error("Failed to fetch exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    // Throttle the request to avoid too many requests
    const timeoutId = setTimeout(fetchExercises, 1000);

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        setLoading(true);
        const gymData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOption
        );

        if (Array.isArray(gymData)) {
          const searchedExercises = gymData.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.target.toLowerCase().includes(search) ||
              item.equipment.toLowerCase().includes(search) ||
              item.bodyPart.toLowerCase().includes(search)
          );

          setExercises(searchedExercises);
        } else {
          console.error("Unexpected response format", gymData);
        }

        setSearch(""); // Clear the search input
      } catch (error) {
        setError("Failed to search exercises. Please try again later.");
        console.error("Failed to search exercises:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex h-screen flex-col items-center gap-2">
      <div className="text-4xl flex flex-col justify-center items-center">
        <h1>Awesome Exercises You</h1>
        <span>Should Know</span>
      </div>

      <div className="flex gap-2 w-2/5">
        <input
          type="text"
          placeholder="Search Exercise"
          className="border-2 rounded-md w-4/5 p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className="border-2 w-1/5 rounded-md" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p> // Show loading text or spinner
        ) : error ? (
          <p>{error}</p> // Show error message
        ) : (
          <ScrollBar data={bodyPart} bodysPart={bodysPart} setBodysPart={setBodysPart}/>
        )}
      </div>
    </div>
  );
};

export default SearchExercise;
