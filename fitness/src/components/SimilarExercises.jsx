import React from "react";
import ScrollBar from "./ScrollBar";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <div>
      <div className="overflow-hidden bg-[#0e0e10]">
        <h2 className="text-xl font-bold mb-4">Exercises with Similar Equipment</h2>
        <ScrollBar data={equipmentExercises.map((exercise, index) => (
          <div key={index} className="exercise-card overflow-hidden p-2 border rounded-lg">
            <h3 className="text-lg font-medium">{exercise.name}</h3>
            <img 
              src={exercise.gifUrl} 
              alt={exercise.name} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))} />
      </div>
      <div className="overflow-hidden mt-8">
        <h2 className="text-xl font-bold mb-4">Exercises Targeting the Same Muscle</h2>
        <ScrollBar data={targetMuscleExercises.map((exercise, index) => (
          <div key={index} className="exercise-card overflow-hidden p-2 border rounded-lg">
            <h3 className="text-lg font-medium">{exercise.name}</h3>
            <img 
              src={exercise.gifUrl} 
              alt={exercise.name} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))} />
      </div>
    </div>
  );
};

export default SimilarExercises;
