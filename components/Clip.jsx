// "use client";
// import { useState } from "react";
// import SpinnerPage from "./SpinnerPage";

export const Clip = ({ videoSrc, videoRef, setLoader }) => {

  return (
    <>
      <div className="relative shadow-md shadow-text-50">
        <video
          preload="auto"
          muted
          loop
          autoPlay
          playsInline
          className={`w-full h-full aspect-clip object-contain`}
          ref={videoRef}
          onLoadedData={() => setLoader(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      {/* {loader === true && (
        <div className="flex items-center justify-center w-full h-full">
          <SpinnerPage />
        </div>
      )} */}
    </>
  );
};
