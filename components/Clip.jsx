"use client";
// import { useEffect } from "react";

export const Clip = ({ videoSrc, videoRef, setLoader }) => {
  return (
    <div className="relative shadow-md shadow-text-50">
      <video
        preload="auto"
        muted
        loop
        autoPlay
        playsInline
        className={`w-full h-full aspect-clip object-contain`}
        ref={videoRef}
      >
        <source
          // onLoadedData={() => setLoader(true)}
          src={videoSrc}
          type="video/mp4"
        />
      </video>
      {/* <div
        className={`absolute top-0 left-0 w-full h-full cursor-pointer !z-50`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
      ></div> */}
    </div>
  );
};
