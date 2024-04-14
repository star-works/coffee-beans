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

export const LocationSelect = (props) => {
  return (
    <>
      <Select className="p-0 border-none focus:border-none ">
        <SelectTrigger
          className={`p-0 md:ps-10 sm:ps-8 ps-6 bg-transparent group min-w-[97px]  hover:text-opacity-80 duration-300 border-none outline-none focus:outline-none text-[#090909] !flex me-2`}
        >
          <div className={` text-[#090909] !flex me-2`}>
            <CategoryIcon />
          </div>
          <SelectValue className="p-0" placeholder="Location" />
        </SelectTrigger>
        <SelectContent className="mt-5">
          <SelectGroup className="min-w-[150px] sm:min-w-[200px] p-2">
            <SelectLabel className="text-sm">Location</SelectLabel>
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
