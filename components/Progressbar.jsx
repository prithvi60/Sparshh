"use client";
import { Progress } from "@nextui-org/progress";
// import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Progressbar = () => {
  const [completion, setCompletion] = useState(0);
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress);
  // {
  //   stiffness: 50,
  //   damping: 10,
  //   restDelta: 0.001,
  // }
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return (
    <div className="w-full h-auto fixed top-[66px] left-0 right-0 !z-30">
      {/* <motion.div
      className={`fixed top-[66px] left-0 right-0 h-[8px] !z-30 origin-left rounded-r-lg shadow-lg bg-secondary
      }`}
      style={{
        scaleX: scrollYProgress,
        // backgroundColor: "yellow",
        // background: "repeating-linear-gradient(45deg,transparent,transparent 40px,red 40px,red 80px);",
        //   // "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
        // backgroundSize: "40px",
        // willChange: "background-position"
      }}
    /> */}
      <Progress
        isStriped
        aria-label="Loading..."
        // color="success"
        value={completion}
        size="md"
        radius="none"
        className="w-full"
        classNames={{
          base: "",
          indicator: "bg-success !rounded-r-lg",
        }}
      />
    </div>
  );
};

export default Progressbar;
