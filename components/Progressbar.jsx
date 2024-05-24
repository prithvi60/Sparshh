"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const Progressbar = () => {
  const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress);
  // {
  //   stiffness: 50,
  //   damping: 10,
  //   restDelta: 0.001,
  // }

  return (
    <div className="w-full h-auto">
    <motion.div
      className={`fixed top-[66px] left-0 right-0 h-[20px] !z-30 origin-left rounded-md shadow-lg bar
      }`}
      style={{
        scaleX: scrollYProgress,
        // backgroundColor: "yellow",
        // background: "repeating-linear-gradient(45deg,transparent,transparent 40px,red 40px,red 80px);",
        //   // "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
        // backgroundSize: "40px",
        // willChange: "background-position"
      }}
    />
    </div>
  );
};

export default Progressbar;
