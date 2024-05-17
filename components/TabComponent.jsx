"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Chip } from "@nextui-org/chip";
import ProductCard from "./ProductCard";
import Image from "next/image";

const TabComponent = ({ reels }) => {
  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="underlined"
      classNames={{
        base: "w-full h-full justify-end",
        tabList: "gap-4 md:gap-6 w-full relative rounded-none p-0 w-full sm:w-max",
        cursor: "w-full bg-primary",
        tab: "max-w-fit px-0 h-10",
        tabContent: "group-data-[selected=true]:text-[#06b6d4]",
      }}
    >
      {reels.map((reel, idx) => (
        <Tab
          key={idx}
          title={
            <div className="flex items-center space-x-2 font-lato group">
              <span>
                <Image
                  alt="money logo"
                  src="/money.svg"
                  width={20}
                  height={20}
                  className="group-hover:animate-pulse hidden md:block"
                />
              </span>
              <span className="uppercase text-success">{reel.range}</span>
              <Chip
                color="primary"
                size="sm"
                variant="solid"
                className="text-white"
              >
                {reel.data.length}
              </Chip>
            </div>
          }
        >
          <ProductCard reels={reel.data} />
        </Tab>
      ))}
    </Tabs>
  );
};

export default TabComponent;
