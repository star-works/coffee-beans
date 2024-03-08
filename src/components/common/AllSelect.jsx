import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryIcon } from "./Icons";

export const CategorySelect = (props) => {
  return (
    <>
      <Select className="p-0 border-none focus:border-none ">
        <SelectTrigger
          className={`p-0 bg-transparent group min-w-[97px] text-white hover:text-opacity-80 duration-300 border-none outline-none focus:outline-none`}
        >
          <div className={`hidden`}>
            <CategoryIcon />
          </div>
          <SelectValue className="p-0" placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
export const LocationSelect = (props) => {
  return (
    <>
      <Select className="p-0 border-none focus:border-none ">
        <SelectTrigger
          className={`p-0 bg-transparent group min-w-[97px]  hover:text-opacity-80 duration-300 border-none outline-none focus:outline-none text-[#090909] !flex me-2`}
        >
          <div className={` text-[#090909] !flex me-2`}>
            <CategoryIcon />
          </div>
          <SelectValue className="p-0" placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-[14px]">Location</SelectLabel>
            <SelectItem value="India">India</SelectItem>
            <SelectItem value="Australia">Australia</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="America">America</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
