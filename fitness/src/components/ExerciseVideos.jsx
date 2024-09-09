import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="p-4 min-h-full bg-[#D4C3AA] text-[#6F5B45] tracking-widest">
      <div className="text-center mb-4">
        <h1 className="text-2xl md:text-3xl">
          Watch<br/> <span className="font-bold text-[#372A15]">{name.toUpperCase()}</span> <br/> Exercise Videos
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {exerciseVideos?.slice(0, 3).map((items, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex flex-col items-center"
          >
            <a
              href={`https://www.youtube.com/watch?v=${items.video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={items.video.thumbnails[0].url}
                alt={items.video.title}
                className="w-full h-auto rounded-lg"
              />
            </a>
            <p className="truncate mt-2 text-center">{items.video.channelName}</p>
            <p className="truncate text-center">{items.video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
