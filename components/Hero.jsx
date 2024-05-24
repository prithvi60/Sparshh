import Image from "next/image";
import React from "react";
import MarqueeHero from "./MarqueeHero";

const Hero = () => {
  const letters = ["S", "P", "A", "R", "S", "H", "H"];
  return (
      <section className="w-full h-[35vh] md:h-[50vh] xl:h-[60vh] bg-black relative z-0 overflow-hidden">
       <MarqueeHero/>
        <div className="absolute bottom-5 left-5 block space-y-1 md:space-y-4 z-20">
          <h1 className="font-protest text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-default tracking-widest uppercase">
            sparshh
          </h1>
          <div className="flex items-center gap-3">
            <h4 className="text-base font-medium md:text-xl xl:text-3xl font-lato text-success">
              The Touch Of Elegance
            </h4>
            <Image
              alt="cloth_svg"
              src={"/cloth_svg.png"}
              // fill
              height={30}
              width={30}
              className="object-cover"
            />
          </div>
        </div>
        {/* <div className="block space-y-4 md:space-y-8 xl:space-y-12 z-20">
          <h1 className="font-protest text-[2.25rem] md:text-7xl lg:text-8xl xl:text-8xl px-3 font-extrabold text-default tracking-widest shadow-sm uppercase">
            sparshh
          </h1>
          <div className="space-y-4 xl:space-y-10">
            <hr className="w-full !text-zinc-900" />
            <div className="flex items-center gap-3">
              <h4 className="text-base font-medium md:text-xl xl:text-3xl font-montserrat text-success">
                The Touch Of Elegance
              </h4>
              <Image
                alt="cloth_svg"
                src={"/cloth_svg.png"}
                // fill
                height={30}
                width={30}
                className="object-cover"
              />
            </div>
          </div>
        </div> */}
      </section>
  );
};

export default Hero;
