import React from "react";

const Hero = () => {
  const letters = ["S", "P", "A", "R", "S", "H", "H"];
  return (
    <section className="w-full h-[45vh] bg-success bg-opacity-60 flex justify-center items-center shadow-md">
      {letters.map((letter, idx) => (
        <h1
          className="font-goblin text-xl md:text-4xl lg:text-8xl xl:text-[150px] px-3 font-extrabold text-default text-outline hover:animate-ping cursor-progress tracking-widest shadow-sm"
          key={idx}
        >
          {letter}
        </h1>
      ))}
    </section>
  );
};

export default Hero;
