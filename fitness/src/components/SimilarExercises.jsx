import React from "react";
import ScrollBar from "./ScrollBar";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <div className="p-4 md:p-8 bg-[#ECE3D4] text-[#734523]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#372A15]">
          Exercises with Similar Equipment
        </h2>

        <ScrollBar
          data={equipmentExercises.map((exercise, index) => (
            <div
              key={index}
              className="w-56 h-48 flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white border border-gray-300"
            >
              <img
                src={exercise.gifUrl}
                alt={exercise.name}
                className="w-9/12 h-3/4 object-cover rounded-lg  "
              />
              <div className="w-full flex flex-col items-center justify-center text-center p-2">
                <h3 className="text-sm truncate">{exercise.target.toUpperCase()}</h3>
                <h3 className="text-sm truncate">{exercise.name.toUpperCase()}</h3>
              </div>
            </div>
          ))}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#372A15]">
          Exercises Targeting the Same Muscle
        </h2>
        <ScrollBar
          data={targetMuscleExercises.map((exercise, index) => (
            <div
              key={index}
              className="w-full h-48 flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white border border-gray-300"
            >
              <img
                src={exercise.gifUrl}
                alt={exercise.name}
                className="w-9/12 h-3/4 object-cover rounded-lg  "
              />
              <div className="w-full flex flex-col items-center justify-center text-center p-2">
                <h3 className="text-sm truncate">{exercise.target.toUpperCase()}</h3>
                <h3 className="text-sm truncate">{exercise.name.toUpperCase()}</h3>
              </div>
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default SimilarExercises;
