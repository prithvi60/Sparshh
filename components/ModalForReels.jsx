"use client";
import React, { useEffect, useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
} from "@nextui-org/modal";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";

const ModalForReels = ({ isOpen, onOpenChange, data }) => {
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current){
      videoRef.current.volume = 0.04
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
        body: "py-6 bg-info",
        backdrop: "bg-info/70 backdrop-opacity-70",
        base: "bg-[#19172c] text-default",
        header: "bg-info",
        footer: " bg-info",
        closeButton: "hover:bg-red/5 active:bg-red/10",
      }}
    >
      {/* w-4/5 md:!max-w-[500px] xl:!max-w-[800px] 2xl:!max-w-[1000px] */}
      <ModalContent>
        {(onClose) => (
          <>
            {/* <ModalHeader className="flex flex-col items-center gap-1 tracking-wider shadow-md md:text-xl xl:text-3xl 2xl:text-4xl font-protest">
              Sparshh
            </ModalHeader>
            <Divider className="p-0.5 bg-success" /> */}
            <ModalBody className="flex flex-col gap-5 sm:flex-row">
              <video
                // muted
                loop
                autoPlay
                playsInline
                className={`h-[17rem] md:h-[380px] lg:h-[460px] xl:h-[500px] w-80 md:w-full aspect-clip object-contain`}
                ref={videoRef}
              >
                <source src={data.videoSrc} type="video/mp4" />
              </video>
              {/* <Divider orientation="vertical" className="p-0.5 bg-success" /> */}
              <div className="space-y-5 md:space-y-10">
                <div >
                <h2 className="text-xl tracking-wider sm:text-2xl xl:text-3xl font-protest">{data.brand_name}</h2>
                <h4 className="text-lg tracking-wide sm:text-xl lg:text-2xl font-lato">{data.price}</h4>
                </div>
                <p className="text-base tracking-normal line-clamp-3 sm:line-clamp-5 md:line-clamp-none md:text-lg font-lato">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora ducimus odit explicabo porro aperiam molestias laborum
                  sed nobis, sequi ipsam quidem. Obcaecati, commodi inventore
                  eveniet quam vel doloremque fugit delectus?
                </p>
                <Link href={"/contact"}>
                  <button
                    className={`block my-10 rounded-lg px-4 py-2 bg-secondary hover:bg-primary text-center text-base duration-700 delay-75 font-lato capitalize mx-auto sm:mx-0 w-full md:w-[200px] group`}
                  >
                    <ButtonComponent />
                  </button>
                </Link>
              </div>
            </ModalBody>
            {/* <Divider className="bg-success p-0.5" />
            <ModalFooter className="items-center justify-center text-lg shadow-md font-protest xl:text-xl">
              The Touch Of Elegance
            </ModalFooter> */}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalForReels;
