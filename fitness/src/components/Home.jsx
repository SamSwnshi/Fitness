import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SearchExercise from "./SearchExercise";
import Erercises from "./Exercises";
import Footer from "./Footer";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodysPart, setBodysPart] = useState("all");
  return (
    <div className="app bg-cover h-screen  " style={{ backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
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
      <Footer/>
    </div>
  );
};

export default Home;
