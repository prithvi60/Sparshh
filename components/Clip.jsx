"use client";
import React, { forwardRef, useEffect } from "react";
export const Clip = forwardRef(({ videoSrc, setLoader }, ref) => {
  useEffect(() => {
    const videoElement = ref.current;
    const handlePlay = () => videoElement.play();
    const handlePause = () => videoElement.pause();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.load();
          videoElement.addEventListener("mouseenter", handlePlay);
          videoElement.addEventListener("mouseleave", handlePause);
        } else {
          videoElement.pause();
          videoElement.removeEventListener("mouseenter", handlePlay);
          videoElement.removeEventListener("mouseleave", handlePause);
        }
      },
      { threshold: 0.6 } // Adjust the threshold as needed
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
        videoElement.removeEventListener("mouseenter", handlePlay);
        videoElement.removeEventListener("mouseleave", handlePause);
      }
    };
  }, [ref]);

  return (
    <>
      <div className="relative shadow-md shadow-text-50">
        <video
          preload="auto"
          muted
          loop
          poster="/sparsh-logo.jpg"
          autoPlay
          // controls
          playsInline
          className={`w-full h-full aspect-clip object-contain cursor-pointer`}
          ref={ref}
          onLoadedData={() => setLoader(false)}
          // onMouseEnter={() => ref.current.play()}
          // onMouseLeave={() => ref.current.pause()}
        >
          <source src={videoSrc.videoSrc} type="video/mp4" />
          Please try in latest browser...
        </video>
      </div>
    </>
  );
});
