"use client"
import Image from "next/image";
import React from "react";
// import { FaMapLocationDot } from "react-icons/fa6";

const Hero = () => {
  const [blur, setBlur] = React.useState(true);
  const loadingImage = React.useRef();

  React.useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener("load", () => {
      setBlur(false);
    });
  }, []);
  return (
    <section className="relative z-0 w-full h-full overflow-hidden bg-black">
      <div className={`${blur ? "blur" : "unblur"}`}>
        <div className="relative w-full h-[60vh] md:h-screen">
          <Image
            loading={"eager"}
            alt="cloth_svg"
            src={"/palceholder.jpg"}
            fill
            priority
            className="object-cover object-center"
          />
          <Image
            alt="cloth_svg"
            src={"/heroBg.jpg"}
            fill
            loading="lazy"
            quality={90}
            ref={loadingImage}
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="absolute z-20 block p-1.5 rounded-md space-y-1  bottom-5 left-7 md:bottom-28 md:left-14 md:space-y-4 ">
        {/* bg-black bg-opacity-10 */}
        <h1 className="text-4xl font-extrabold tracking-widest uppercase md:text-5xl text-white/85 font-protest lg:text-6xl xl:text-7xl">
          Sparsh Designer
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7">
              <Image
                alt="cloth_svg"
                src={"/location-pin.svg"}
                fill
                // height={25}
                // width={25}
                className="object-cover"
              />
            </div>
            <h4 className="text-sm font-medium md:text-xl xl:text-2xl font-lato text-success/85">
              Coimbatore
            </h4>
          </div>
          {/* <Image
              alt="cloth_svg"
              src={"/cloth_svg.png"}
              // fill
              height={30}
              width={30}
              className="object-cover"
            /> */}
        </div>
      </div>
      {/* <div className="z-20 block space-y-4 md:space-y-8 xl:space-y-12">
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
