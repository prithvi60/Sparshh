"use client";

import { useEffect, useRef, useState } from "react";

export const Clip = ({ videoSrc }) => {
  const [mute, setMute] = useState(false);
  const videoRef = useRef(null);

  // console.log(mute);

  const handleMouseOver = () => {
    // videoRef.current.play(undefined);
    setMute(true);
    // videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
  };
  const handleMouseOut = () => {
    // videoRef.current.pause();
    setMute(false);
    // videoRef.current.defaultMuted = false;
    videoRef.current.muted = false;
  };

  return (
    <div className="relative shadow-md shadow-text-50">
      <video
        muted
        loop
        autoPlay={!mute ? true : false}
        // playsInline
        className={`w-full h-full aspect-clip object-contain`}
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={`absolute top-0 left-0 w-full h-full cursor-pointer !z-50`}
        onMouseEnter={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
    </div>
  );
};
