import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOption, fetchData, youtubeOptions } from "../data";
import Details from "./Details";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ExercisesDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const exerciseDb = "https://exercisedb.p.rapidapi.com";
        const exerciseDetailData = await fetchData(
          `${exerciseDb}/exercises/exercise/${id}`,
          exerciseOption
        );
        const youtubeDb = "https://youtube-search-and-download.p.rapidapi.com";

        const exerciseYoutubeData = await fetchData(
          `${youtubeDb}/search?query=${exerciseDetailData.name}`,
          youtubeOptions
        );

        const targetMuscleData = await fetchData(
          `${exerciseDb}/exercises/target/${exerciseDetailData.target}`,
          exerciseOption
        );

        const equipmentData = await fetchData(
          `${exerciseDb}/exercises/target/${exerciseDetailData.target}`,
          exerciseOption
        );

        setExerciseDetails(exerciseDetailData);
        setExerciseVideos(exerciseYoutubeData.contents);
        setTargetMuscleExercises(targetMuscleData);
        setEquipmentExercises(equipmentData);
        
      } catch (error) {
        setError("Failed to fetch exercise details.");
        console.error("Failed to fetch exercise details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExerciseData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    <Footer/>
    </div>
  );
};

export default ExercisesDetails;
