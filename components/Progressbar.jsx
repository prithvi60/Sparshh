"use client";
import { useScroll, motion } from "framer-motion";

const Progressbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full !z-30">
      <motion.div
        className={`fixed top-[64px] left-0 right-0 h-[5px] !z-30 origin-left rounded-r-lg shadow-lg inset-5 bg-[#CADCE6]
      }`}
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </div>
  );
};

export default Progressbar;
