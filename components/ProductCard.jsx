"use client";
import { Card, CardHeader } from "@nextui-org/card";
import { Clip } from "./Clip";
import { Suspense, useEffect, useRef, useState } from "react";
// import { useInView } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
import { useDisclosure } from "@nextui-org/modal";
import ModalForReels from "./ModalForReels";
import SpinnerPage from "./SpinnerPage";
// import bgImg from "/thumbnail.png"

const ProductCard = ({ reels }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState(undefined);
  const [loader, setLoader] = useState(false);
  // const [mute, setMute] = useState(false);
  // const container = useRef(null);
  const videoRef = useRef(null);
  // const { ref, inView } = useInView({
  //   threshold: 0.5, // Adjust the threshold as needed
  // });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.05;
      setLoader(true);
    }
  }, []);

  const handleClick = (reel) => {
    setData(reel);
    onOpen();
  };

  return (
    <div className="grid w-full h-full grid-cols-2 gap-4 py-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 place-items-center">
      {reels.map((reel, idx) => (
        <div onClick={() => handleClick(reel)} key={idx}>
          <Card
            style={{
              backgroundImage: `url(/thumbnail.png)`,
              // filter: "blur(2px) brightness(50%) contrast(15%)",
            }}
            className="overflow-hidden h-[17.5rem] md:h-[380px] lg:h-[460px] xl:h-[500px] w-40 md:w-full aspect-clip group cursor-pointer bg-contain z-10"
          >
            <CardHeader className="overflow-hidden group-hover:translate-y-0 absolute z-20 top-0 left-0 flex-col !items-start ease-linear group-hover:block md:opacity-0 transition-all md:-translate-y-20 md:duration-300 opacity-100 translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 backdrop-blur-sm bg-info/35">
              <p className="text-lg font-bold uppercase md:text-xl text-default">
                {reel.brand_name}
              </p>
              <h4 className="flex items-center gap-2 text-base font-medium text-default md:text-lg">
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
            <Clip
              videoRef={videoRef}
              videoSrc={reel.videoSrc}
              setLoader={setLoader}
              key={idx}
            />

            {/* {!loader ? (
              <Image
                title="bg image"
                src={"/thumbnail.png"}
                quality={10}
                alt="bg image"
                priority
                fill
                className="blur-md"
              />
            ) : (
              <Clip
                videoRef={videoRef}
                videoSrc={reel.videoSrc}
                setLoader={setLoader}
                key={idx}
              />
            )} */}
          </Card>
        </div>
      ))}
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      {isOpen === true && (
        <ModalForReels
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          data={data}
        />
      )}
    </div>
    //   )}
    // </>
  );
};

export default ProductCard;
