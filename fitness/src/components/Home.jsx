import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SearchExercise from "./SearchExercise";
import Erercises from "./Exercises";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodysPart, setBodysPart] = useState("all");
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchExercise
        setExercises={setExercises}
        bodysPart={bodysPart}
        setBodysPart={setBodysPart}
      />
      <Erercises
        exercises={exercises}
        setExercises={setExercises}
        bodysPart={bodysPart}
      />
    </div>
  );
};

export default Home;
