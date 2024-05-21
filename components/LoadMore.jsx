"use client";
import React, { useEffect } from "react";
import SpinnerPage from "./SpinnerPage";
import { useInView } from "react-intersection-observer";

const LoadMore = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
    //   console.log("in view",inView);
    }
  }, [inView]);
  return (
    <div className="flex items-center justify-center w-full h-auto" ref={ref}>
      <SpinnerPage />
    </div>
  );
};

export default LoadMore;
