import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

const priceRange = ["low to high", "high to low"];

export default function Filter({ handleSelectionChange }) {
  return (
    <div className="absolute z-10 right-14 md:!right-0 top-14 md:top-0">
      <Select
        onChange={handleSelectionChange}
        label="Filter:"
        placeholder="Select a Price Range"
        labelPlacement={"outside-left"}
        size={"md"}
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
          <SelectItem key={idx} value={idx}>
            {range}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
