"use client";
import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
import { SkeletonComponent } from "./SkeletonComponent";

const ModalForReels = ({ isOpen, onOpenChange, data }) => {
  const videoRef = useRef(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.15;
    }
  }, []);

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      shadow="lg"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
          exit: {
            y: -50,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          },
        },
      }}
      size="3xl"
      placement={"center"}
      // scrollBehavior={"inside"}
      radius="lg"
      classNames={{
        body: "bg-info md:py-6",
        backdrop: "bg-info/70 backdrop-opacity-70",
        base: "bg-[#19172c] text-default !z-[50]",
        header: "bg-info",
        footer: " bg-info",
        closeButton: "hover:bg-red/5 active:bg-red/10",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody className="flex flex-col gap-1 md:gap-5 sm:flex-row">
              {loader && (
                // <div className="h-[25rem] md:h-[380px] lg:h-[460px] xl:h-[500px] w-96 md:w-full flex z-10 justify-center items-center">
                <SkeletonComponent />
                // </div>
              )}
              <video
                // muted
                loop
                autoPlay
                playsInline
                className={`${loader === false ? "block" : "hidden"} h-[25rem] md:h-[380px] lg:h-[460px] xl:h-[500px] w-80 md:w-60 aspect-clip object-contain rounded-lg mx-auto md:mx-0 z-0`}
                ref={videoRef}
                onLoadedData={() => setLoader(false)}
              >
                <source src={data.videoSrc} type="video/mp4" />
              </video>
              <div className="md:space-y-7 w-full">
                <div className="flex items-center justify-center">
                  <div className="spacey-2.5">
                    <h2 className="text-xl tracking-wider sm:text-2xl xl:text-3xl font-protest text-white capitalize mt-2">
                      {data.brand_name}
                    </h2>
                    {/* <h4 className="text-lg tracking-wide sm:text-xl lg:text-2xl font-lato text-white">
                      {data.price}
                    </h4> */}
                  </div>
                </div>
                <div className="flex flex-col  items-center h-full ">
                  <p className="text-base tracking-normal line-clamp-3 sm:line-clamp-5 md:line-clamp-none md:text-lg font-lato my-2">
                    Product description
                  </p>
                  <Link href={"/contact"} className="sm:block">
                    <button
                      className={`block my-4 rounded-lg px-4 py-2 bg-secondary hover:bg-primary text-center text-base duration-700 delay-75 font-lato capitalize w-max group`}
                    >
                      <ButtonComponent text={"Contact us via WhatsApp"} />
                    </button>
                  </Link>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalForReels;
