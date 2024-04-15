import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomSelect = () => {
  return (
    <Select>
      <SelectTrigger
        className="w-[123px] py-[3px] border border-[#F3F4F6] rounded-md shadow-[0px_1px_2px_0px_rgba(17px,24px],39px,0.07px)]
"
      >
        <SelectValue
          className="font-semibold text-xs tracking-[-3%]"
          placeholder="Sales view"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sales view</SelectLabel>
          <SelectItem value="apple">10k</SelectItem>
          <SelectItem value="banana">20k</SelectItem>
          <SelectItem value="blueberry">5k</SelectItem>
          <SelectItem value="grapes">90k</SelectItem>
          <SelectItem value="pineapple">50k</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
