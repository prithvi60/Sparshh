"use client";

import React, {  useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

const tabProps = {
  ariaLabel: "Options",
  color: "warning",
  variant: "underlined",
  classNames: {
    base: "relative w-full h-full justify-start xl:justify-center items-center pb-5",
    tabList:
      "gap-4 md:gap-6 w-full relative rounded-none p-0 w-full sm:w-max overflow-x-scroll",
    cursor: "w-full bg-info",
    tab: "max-w-fit px-0 h-10",
    tabContent: "group-data-[selected=true]:text-[#06b6d4]",
  },
};

const TabComponent = ({ reels }) => {
  const [optionValue, setOptionValue] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleSelectionChange = (e) => {
    setOptionValue(Number(e.target.value));
  };

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-5">
      <Filter handleSelectionChange={handleSelectionChange} />
      <Tabs
        selectedKey={selected}
        onSelectionChange={setSelected}
        {...tabProps}
      >
        {reels.map((reel, idx) => (
          <Tab key={idx} title={<TabTitle reel={reel}/>}>
            <ProductCard reels={reel.data} sortValue={optionValue} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;

const TabTitle = ({reel}) => (
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
    <Chip color="secondary" size="sm" variant="solid" className="text-white">
      {reel.data.length}
    </Chip>
  </div>
);
