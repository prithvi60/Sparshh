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
      className="fixed bottom-0 left-0 right-0 h-[10px] !z-[100] origin-left bg-info"
      style={{ scaleX }}
    />
  );
};

export default Progressbar;
