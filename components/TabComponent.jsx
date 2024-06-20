"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import ModalForReels from "./ModalForReels";
import ProductCard from "./ProductCard";
import { Select, SelectItem } from "@nextui-org/select";

const priceRange = ["low to high", "high to low"];

const TabComponent = ({ reels }) => {
  const [selected, setSelected] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState(reels[Number(selected)]);

  // useEffect(() => {}, [sortedProducts, selected]);

  // console.log(reels[Number(selected)]);
  // console.log(sortedProducts);
  return (
    <div className="relative flex flex-col items-center w-full h-full gap-5">
      <div className="absolute top-14 left-0 md:top-0 md:left-[65%] xl:left-[80%]">
        {/* <h4 className="text-lg font-bold text-left sm:text-center ">
          Filters :
        </h4> */}
        <Select
          label="Filter:"
          placeholder="Select an Price Range"
          labelPlacement={"outside-left"}
          size={"md"}
          color="warning"
          className="items-center"
          classNames={{
            base: "w-full max-w-xs h-full capitalize",
            label:
              "w-full h-full !text-primary text-lg tracking-wider font-medium",
            mainWrapper: "min-w-[230px]",
            popoverContent: "!p-0",
            trigger:
              "bg-info text-warning data-[hover=true]:bg-info data-[hover=true]:bg-opacity-80",
            innerWrapper: "capitalize text-warning",
            listbox: "bg-info text-warning rounded-md capitalize",
          }}
        >
          {priceRange.map((range, idx) => (
            <SelectItem key={idx}>{range}</SelectItem>
          ))}
        </Select>
      </div>
      <Tabs
        selectedKey={selected}
        onSelectionChange={setSelected}
        aria-label="Options"
        color="warning"
        variant="underlined"
        classNames={{
          base: "w-full h-full justify-start xl:justify-center items-center pb-5",
          tabList:
            "gap-4 md:gap-6 w-full relative rounded-none p-0 w-full sm:w-max overflow-x-scroll",
          cursor: "w-full bg-info",
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
                    className="hidden group-hover:animate-pulse md:block"
                  />
                </span>
                <span className="uppercase text-info">{reel.range}</span>
                <Chip
                  color="secondary"
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
            <ModalForReels />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;
