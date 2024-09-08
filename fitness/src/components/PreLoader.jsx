import React from "react";

const PreLoader = ({ wrapperRef, progressRef }) => {
  return (
    <div
      ref={wrapperRef}
      className="wrapper fixed bg-[#ECE3D4] text-[#372A15] h-screen w-full flex items-center justify-center"
    >
      <div className="box w-full h-32 flex flex-col items-center gap-3 justify-center">
        <h1 className="text-5xl font-semibold tracking-wide">Loading</h1>
        <div className="progress-bar border-2 border-[#372A15] w-1/2 bg-[#0e0e10] rounded-lg">
          <div
            ref={progressRef}
            className="progress h-px bg-[#ECE3D4] w-0 rounded-lg"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
