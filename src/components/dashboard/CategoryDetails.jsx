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

const CategoryDetails = (props) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full  ff_inter font-normal text-xs leading-[15px] tracking-[-3%] text-black ">
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className="!px-2" value={props.item1}>
              {props.item1}
            </SelectItem>
            <SelectItem className="!px-2" value={props.item2}>
              {props.item2}
            </SelectItem>
            <SelectItem className="!px-2" value={props.item3}>
              {props.item3}
            </SelectItem>
            <SelectItem className="!px-2" value={props.item4}>
              {props.item4}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryDetails;
