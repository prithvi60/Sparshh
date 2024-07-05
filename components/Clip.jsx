// "use client";
// import { useState } from "react";
// import SpinnerPage from "./SpinnerPage";
import React, { forwardRef } from "react";
export const Clip = forwardRef(({ videoSrc, setLoader }, ref) => {
  console.log("t", ref.current);
  return (
    <>
      <div className="relative shadow-md shadow-text-50">
        <video
          preload="auto"
          muted
          loop
          // autoPlay
          playsInline
          className={`w-full h-full aspect-clip object-contain cursor-pointer`}
          ref={ref}
          onLoadedData={() => setLoader(false)}
          onMouseEnter={() => ref.current.play()}
          onMouseLeave={() => ref.current.pause()}
        >
          <source src={videoSrc.videoSrc} type="video/mp4" />
        </video>
      </div>
      {/* {loader === true && (
        <div className="flex items-center justify-center w-full h-full">
          <SpinnerPage />
        </div>
      )} */}
    </>
  );
});
