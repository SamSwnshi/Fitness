import React, { useEffect } from 'react';
import { exerciseOption, fetchData } from '../data';
import { Link } from 'react-router-dom';

const Exercises = ({ exercises, bodysPart, setExercises }) => {
  console.log(exercises)
  useEffect(() => {
    const fetchExeData = async () => {
      let exerciseData = [];

      if (bodysPart === "all") {
        exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOption);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodysPart}`, exerciseOption);
      }
      setExercises(exerciseData);
    };
    fetchExeData();
  }, [bodysPart, setExercises]);

  return (
    <div className='border-2 flex flex-col items-center'>
      <h1>Showing Results</h1>
      <div className='grid grid-cols-2 gap-4 p-4'>
        {exercises.map((item) => (
          <div key={item.id} className='border p-2 rounded-md'>
            <Link to={`/exercises/${item.id}`} className='block'>
              <img src={item.gifUrl} alt={item.name} className='w-full h-auto rounded-md' />
              <p className='font-bold mt-2'>{item.name}</p>
              <p className='text-gray-600'>{item.bodyPart.toUpperCase()}</p>
              <p className='text-gray-500'>{item.target}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
