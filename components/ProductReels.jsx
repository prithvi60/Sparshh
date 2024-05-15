"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Chip } from "@nextui-org/chip";
import ProductCard from "./ProductCard";

const reels = [
  "/sparshh_reel.mp4",
  "/sparshh_reel_2.mp4",
  "/sparshh_reel.mp4",
  "/sparshh_reel_2.mp4",
  "/sparshh_reel.mp4",
  "/sparshh_reel.mp4",
  "/sparshh_reel_2.mp4",
  "/sparshh_reel.mp4",
]

const ProductReels = () => {
  return (
    <section className="h-full px-6 py-5 max-w-screen-2xl sm:px-10 md:py-8 xl:py-10">
      <div className="flex flex-col w-full">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            base: "w-full h-full justify-end",
            tabList:
              "gap-6 w-full relative rounded-none p-0 w-max",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-0 h-10",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
           {/* bg-[#22d3ee] */}
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2 font-lato">
                <span className="uppercase text-success">upto 5K</span>
                <Chip color="primary" size="sm" variant="solid" className="text-white">
                  9
                </Chip>
              </div>
            }
          >
            <ProductCard reels={reels} />
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2 font-lato">
                <span className="uppercase text-success">5K - 10K</span>
                <Chip color="primary" size="sm" variant="solid" className="text-white">
                  4
                </Chip>
              </div>
            }
          >
            <ProductCard reels={reels} />
          </Tab>
          <Tab
            key="videos"
            title={
              <div className="flex items-center space-x-2 font-lato">
                <span className="uppercase text-success">10K - 15K</span>
                <Chip color="primary" size="sm" variant="solid" className="text-white">
                  5
                </Chip>
              </div>
            }
          >
            <ProductCard reels={reels} />
          </Tab>
        </Tabs>
      </div>
      {/* <div className="flex items-center gap-4 md:gap-8 xl:gap-12">
        <Card
          as={Link}
          href={"#"}
          className="col-span-12 sm:col-span-4 h-[500px] aspect-clip group"
        >
          <CardHeader className="group-hover:translate-y-0 absolute z-10 top-2 left-2 flex-col !items-start group-hover:duration-1000 group-hover:ease-in-out group-hover:block md:opacity-0 group-hover:transition-all md:-translate-y-20 md:duration-1000 opacity-100 translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            <p className="font-bold uppercase text-tiny text-white/90">
              What to watch
            </p>
            <h4 className="font-medium text-white text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 object-cover w-full h-full"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
        </Card>
        <Card
          as={Link}
          href={"#"}
          className="col-span-12 sm:col-span-4 h-[500px] aspect-clip group"
        >
          <CardHeader className="group-hover:translate-y-0 absolute z-10 top-2 left-2 flex-col !items-start duration-1000 ease-in hidden group-hover:block md:opacity-0 transition-all md:-translate-y-20 md:duration-1000 opacity-100 translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            <p className="font-bold uppercase text-tiny text-white/90">
              What to watch
            </p>
            <h4 className="font-medium text-white text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Clip videoSrc={"/sparshh_reel.mp4"} />
        </Card>
      </div> */}
    </section>
  );
};

export default ProductReels;
