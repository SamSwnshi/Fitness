import React, { useEffect, useState } from "react";
import { exerciseOption, fetchData } from "../data";
import { Link } from "react-router-dom";
import Scroll from "./Scroll"; // Import the ScrollBar component
import Footer from "./Footer";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodysPart, setBodysPart] = useState("all");
  const [bodyPartList, setBodyPartList] = useState([]); // For ScrollBar
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [noData, setNoData] = useState(false); // No data state

  // Fetch exercises and body parts on component mount
  useEffect(() => {
    const fetchExeData = async () => {
      setLoading(true); // Start loading

      try {
        let exerciseData = [];
        const bodyPartData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOption
        );

        console.log('Body Part Data:', bodyPartData);

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

        // Set noData state if no exercises are found
        setNoData(exerciseData.length === 0);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
        setNoData(true); // Set noData state if there's an error
      } finally {
        setLoading(false); // End loading
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
    <>
      <div className="p-20 min-h-screen flex flex-col items-center justify-center bg-[#ECE3D4] text-[#734523] tracking-widest">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-medium text-[#372A15]">
            Find the Perfect Exercise for You
          </h1>
          <p className="text-lg">
            Search our database of exercises and filter by muscle group to find the perfect workout for your needs.
          </p>
        </div>

        <div className="flex gap-5 mt-3 mb-6 w-4/5 justify-center">
          <input
            type="text"
            placeholder="Search Exercise"
            className="border-2 text-black rounded-md w-3/5 p-2"
            value={search}
            onChange={handleSearchInputChange}
          />
          <button
            className="w-36 rounded-md bg-[#734523] text-[#ECE3D4] hover:bg-[#6F5B45] hover:text-[#ECE3D4]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <Scroll
          data={bodyPartList}
          bodysPart={bodysPart}
          setBodysPart={setBodysPart}
        />

        <div className="grid grid-cols-3 gap-14 p-4 items-center">
          {loading ? (
            <p className="text-center text-2xl col-span-full">Loading exercises...</p>
          ) : noData ? (
            <p className="text-center col-span-full">No exercises found.</p>
          ) : filteredExercises && filteredExercises.length > 0 ? (
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
                  <p className="font-bold mt-2">{item.name.toUpperCase()}</p>
                  <p className="text-gray-600">{item.bodyPart.toUpperCase()}</p>
                  <p className="text-gray-500">{item.target.toUpperCase()}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No exercises found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exercises;
