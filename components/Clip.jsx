// "use client";
// import { useState } from "react";
// import SkeletonComponent from "./SkeletonComponent";

export const Clip = ({ videoSrc, videoRef }) => {
  // const [loader, setLoader] = useState(true);
  return (
    <>
      {/* {loader && (
        <div className="flex items-center justify-center w-full h-full">
          <SkeletonComponent />
        </div>
      )} */}
      <div className="relative shadow-md shadow-text-50">
        <video
          preload="auto"
          muted
          loop
          autoPlay
          playsInline
          className={`w-full h-full aspect-clip object-contain`}
          ref={videoRef}
          // onPlay={() => setLoader(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
