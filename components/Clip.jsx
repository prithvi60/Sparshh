"use client";
import React, { forwardRef, useEffect } from "react";

export const Clip = forwardRef(({ videoSrc, setLoader }, ref) => {
  useEffect(() => {
    const videoElement = ref?.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log("props", entry, videoElement);
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: window.innerWidth > 600 ? 0.6 : 0.9 } // Adjust the threshold as needed
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [ref]);

  return (
    <>
      <div className="relative shadow-md shadow-text-50">
        <video
          aria-label="Product video"
          preload="auto"
          muted
          loop
          // poster="/sparsh-logo.jpg"
          autoPlay
          playsInline
          className={`w-full h-full aspect-clip object-contain cursor-pointer`}
          ref={ref}
          onLoadedData={() => setLoader(false)}
        >
          <source src={videoSrc.videoSrc} type="video/mp4" />
          Please try in latest browser...
        </video>
      </div>
    </>
  );
});
