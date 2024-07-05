import React, { forwardRef } from "react";
export const Clip = forwardRef(({ videoSrc, setLoader }, ref) => {
  return (
    <>
      <div className="relative shadow-md shadow-text-50">
        <video
          preload="auto"
          muted
          loop
          // autoPlay
          // controls
          playsInline
          className={`w-full h-full aspect-clip object-contain cursor-pointer`}
          ref={ref}
          onLoadedData={() => setLoader(false)}
          onMouseEnter={() => ref.current.play()}
          onMouseLeave={() => ref.current.pause()}
        >
          <source src={videoSrc.videoSrc} type="video/mp4" />
          Please try in latest browser...
        </video>
      </div>
    </>
  );
});
