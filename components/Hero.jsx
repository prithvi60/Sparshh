import Image from "next/image";
import React from "react";

const Hero = () => {
  const letters = ["S", "P", "A", "R", "S", "H", "H"];
  return (
    <section className="w-full h-[25vh] md:h-[35vh] xl:h-[55vh] bg-black flex justify-center items-center shadow-md">
      {/* {letters.map((letter, idx) => (
        <h1
          className="font-protest text-xl md:text-4xl lg:text-8xl xl:text-[150px] px-3 font-extrabold text-default text-outline hover:animate-ping cursor-progress tracking-widest shadow-sm"
          key={idx}
        >
          {letter}
        </h1>
      ))} */}
      <div className="block space-y-4 md:space-y-8 xl:space-y-12">
        <h1 className="font-protest text-[2.25rem] md:text-7xl lg:text-8xl xl:text-[180px] px-3 font-extrabold text-default text-outline tracking-widest shadow-sm uppercase">
          sparshh
        </h1>
        <div className="space-y-4 xl:space-y-10">
          <hr className="w-full !text-zinc-900" />
          <div className="flex items-center gap-3">
            <h4 className="text-base font-medium md:text-xl xl:text-3xl font-montserrat text-success">
              The Touch Of Elegance
            </h4>
            {/* <div className="relative w-7 h-7 md:w-9 md:h-8 xl:h-20 xl:w-20"> */}
            <Image
              alt="cloth_svg"
              src={"/cloth_svg.png"}
              // fill
              height={30}
              width={30}
              className="object-cover"
            />
            {/* </div> */}
          </div>
        </div>
        {/* <Divider orientation="horizontal" /> */}
      </div>
    </section>
  );
};

export default Hero;
