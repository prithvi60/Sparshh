"use client";
import { Card, CardHeader} from "@nextui-org/card";
import { Clip } from "./Clip";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/modal";
import ModalForReels from "./ModalForReels";
import { SkeletonComponents } from "./SkeletonComponent";

const ProductCard = ({ reels }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState(undefined);
  const [loader, setLoader] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.05;
    }
  }, []);

  const handleClick = (reel) => {
    setData(reel);
    onOpen();
  };

  return (
    <>
      {loader && (
        <div className="z-10 flex w-full h-full">
          <SkeletonComponents />
        </div>
      )}
      <div className="relative grid w-full h-full grid-cols-2 gap-4 py-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 place-items-center">
        {reels.map((reel, idx) => (
          <div onClick={() => handleClick(reel)} key={idx}>
            <Card
              style={{ backgroundColor: "#FDFCD4" }}
              className={`${loader === false ? "block" : "hidden"} overflow-hidden h-[17.5rem] md:h-[380px] lg:h-[460px] xl:h-[500px] w-40 md:w-full aspect-clip group cursor-pointer z-10 !shadow-none`}
            >
              <CardHeader className="overflow-hidden group-hover:translate-y-0 absolute z-20 top-0 left-0 flex-col !items-start ease-linear group-hover:block md:opacity-0 transition-all md:-translate-y-20 md:duration-300 opacity-100 translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 backdrop-blur-sm bg-info/55">
                <p className="text-lg font-bold uppercase md:text-xl text-success">
                  {reel.brand_name}
                </p>
                <h4 className="flex items-center gap-2 text-base font-medium text-success md:text-lg">
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
              {/* <CardBody> */}
              <Clip
                videoRef={videoRef}
                videoSrc={reel.videoSrc}
                setLoader={setLoader}
                key={idx}
              />
              {/* </CardBody> */}
            </Card>
          </div>
        ))}

        {isOpen === true && (
          <ModalForReels
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            data={data}
          />
        )}
      </div>
    </>
  );
};

export default ProductCard;
