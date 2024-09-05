import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  return (
    <div>
      <div>
        <h1>
          Watch <span>{name.toUpperCase()} Exercise Videos</span>
        </h1>
      </div>
      <div className="h-1/2 flex justify-around items-center">
        <>
          {exerciseVideos?.slice(0, 3).map((items, index) => (
            <div key={index}>
             
              <a href={`https://www.youtube.com/watch?v=${items.video.videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={items.video.thumbnails[0].url} alt="Exercise video thumbnail" />
              </a>
              <p className="truncate">{items.video.channelName}</p>
              <p className="truncate">{items.video.title}</p>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default ExerciseVideos;
