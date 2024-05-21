"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const Progressbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-[66px] left-0 right-0 h-[10px] !z-[100] origin-left 
        bg-secondary
      }`}
      style={{ scaleX }}
    />
  );
};

export default Progressbar;
