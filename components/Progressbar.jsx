"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const Progressbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 10,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-[66px] left-0 right-0 h-[10px] !z-30 origin-left bg-secondary rounded-xl animate-pulse shadow-lg
      }`}
      style={{
        scaleX,
        backgroundImage: "linear-gradient(to right, #FDFCD4,#E3B76A,#C78E3A ",
      }}
    />
  );
};

export default Progressbar;
