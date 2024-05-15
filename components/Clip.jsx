"use client";

import { useRef, useState } from "react";

export const Clip = ({videoSrc}) => {
  const [play, setPlay] = useState("false");
  const videoRef = useRef();

  const handleMouseOver = () => {
    videoRef.current.play(undefined);
    // setPlay("true");
  };
  const handleMouseOut = () => {
    videoRef.current.pause();
    // setPlay("false");
  };
  
  return (
    <div className="relative shadow-md shadow-text-50">
      <video
        loop
        preload="auto"
        className={`w-full h-full aspect-clip object-contain`}
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={`absolute top-0 left-0 w-full h-full cursor-pointer !z-50`}
        onMouseEnter={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
      </div>
    </div>
  );
};