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
  const [optionValue, setOptionValue] = useState();
  const [selected, setSelected] = useState(0);
  // const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState(null);

  useEffect(() => {
    // let products = reels[Number(selected)].data;
    setSortedProducts(reels[Number(selected)].data);
  }, [selected]);

  const handleSelectionChange = (e) => {
    setOptionValue(Number(e.target.value));
  };

  // useEffect(() => {
  //   if (optionValue >= 0) {
  //     // let tempValue = sortedProducts;
  //     if (optionValue === 0) {
  //       console.log("lock1", optionValue);
  //       const low = sortedProducts.sort(
  //         (val1, val2) =>
  //           Number(val2.price.replace("₹", "")) -
  //           Number(val1.price.replace("₹", ""))
  //       );
  //       setSortedProducts(low);
  //       console.log("low to high");
  //     } else {
  //       console.log("lock2", optionValue);
  //       const high = sortedProducts.sort(
  //         (val1, val2) =>
  //           Number(val1.price.replace("₹", "")) -
  //           Number(val2.price.replace("₹", ""))
  //       );
  //       console.log("high to low");
  //       setSortedProducts(high);
  //     }
  //     console.log("render");
  //   }
  // }, [optionValue]);
  
  // console.log(Number(selected));
  // console.log("lock", priceRange[optionValue]);

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-5">
      <div className="absolute z-10 right-14 md:!right-0 top-14 md:top-0">
        <Select
          label="Filter:"
          placeholder="Select an Price Range"
          labelPlacement={"outside-left"}
          size={"md"}
          // color="success"
          // onChange={handleSelectionChange}
          className="items-center"
          classNames={{
            base: "w-full max-w-xs h-full capitalize",
            value: "!text-white font-medium",
            label:
              "w-full h-full !text-primary text-lg tracking-wider font-medium",
            mainWrapper: "min-w-[230px]",
            popoverContent: "!p-0",
            trigger:
              "bg-info !text-white data-[hover=true]:bg-info data-[hover=true]:bg-opacity-80",
            innerWrapper: "capitalize !text-white",
            listbox: "bg-info !text-white rounded-md capitalize",
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
          base: "relative w-full h-full justify-start xl:justify-center items-center pb-5",
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
            <ProductCard reels={sortedProducts} />
            <ModalForReels />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;
