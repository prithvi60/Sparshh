// "use client";
import { Card, CardHeader } from "@nextui-org/card";
import { Clip } from "./Clip";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

const ProductCard = ({ reels }) => {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "30px" });
  useEffect(() => {
    // console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div
      ref={container}
      className="grid w-full h-full grid-cols-2 gap-4 py-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 place-items-center"
    >
      {reels.map((reel, idx) => (
        <Card
          className="overflow-hidden h-[17.5rem] md:h-[380px] lg:h-[460px] xl:h-[500px] w-40 md:w-full aspect-clip group"
          key={idx}
          ref={ref}
        >
          <CardHeader className="overflow-hidden group-hover:translate-y-0 absolute z-10 top-0 left-0 flex-col !items-start ease-linear group-hover:block md:opacity-0 transition-all md:-translate-y-20 md:duration-300 opacity-100 translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 backdrop-blur-sm bg-info/35">
            <p className="font-bold uppercase text-lg md:text-xl text-default">
              {reel.brand_name}
            </p>
            <h4 className="font-medium text-default text-base md:text-lg flex items-center gap-2">
              <span>
                <Image
                  alt="money logo"
                  src="/money.svg"
                  width={28}
                  height={28}
                  className="animate-pulse"
                />
              </span>
              {reel.price}
            </h4>
          </CardHeader>
          <Clip videoSrc={reel.videoSrc} key={idx} />
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
