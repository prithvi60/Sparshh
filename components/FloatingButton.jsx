"use client";
// import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  // const [click, setClick] = useState(false);
  return (
    <div
      className="fixed flex items-center justify-center gap-3 bottom-8 right-4"
      style={{ zIndex: "1000" }}
    >
      {/* <div className={`${!click ? "block" : "hidden"}`}>
        <h4 className="relative p-3 mt-1.5 text-sm tracking-normal rounded-lg font-lato text-warning bg-info after:content-[''] after:h-4 after:w-4 after:bg-info after:absolute after:top-4 after:-right-1.5 after:rotate-45">
          Hi team, I'd like your assistance
        </h4>
        <h4
          className={`text-[12px] absolute -top-1.5 -left-1 font-montserrat font-bold text-success py-0.5 px-1.5 rounded-full bg-primary cursor-pointer hover:bg-red-600`}
          onClick={() => setClick(true)}
        >
          X
        </h4>
      </div> */}

      <motion.a
        href="https://wa.me/9840884460?text=Hi%20team,%20I'd%20like%20your%20assistance"
        target="_blank"
        rel="noopener noreferrer"
        title="whatsapp"
        className="hover:animate-pulse"
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          loading="lazy"
          // src="https://ik.imagekit.io/webibee/Agency/whatsapp.gif"
          src="/whatsapp_logo.png"
          alt="whatsapp logo"
          title="whatsapp logo"
          className="w-12 h-12 md:h-14 md:w-14"
          // whileHover={{ boxShadow: "0 0 0 2px #572D0C" }}
        />
      </motion.a>
    </div>
  );
}
