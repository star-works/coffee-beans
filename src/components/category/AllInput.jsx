import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
export const RadioInputs = (props) => {
  return (
    <>
      <RadioGroup defaultValue="comfortable" className={`gap-0 ${props.flex}`}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" className="cursor-pointer" />
          <Label
            className="text-base text-[#090909] font-normal cursor-pointer"
            htmlFor="r1"
          >
            {props.firstName}
          </Label>
        </div>
        <div className={`flex items-center space-x-2 pt-4 ${props.padding} `}>
          <RadioGroupItem
            value="comfortable"
            id="r2"
            className="cursor-pointer"
          />
          <Label
            className="text-base text-[#090909] font-normal cursor-pointer"
            htmlFor="r2"
          >
            {props.secondName}
          </Label>
        </div>
        <div className={`flex items-center space-x-2 pt-4 ${props.className}`}>
          <RadioGroupItem value="compact" id="r3" className="cursor-pointer" />
          <Label
            className="text-base text-[#090909] font-normal cursor-pointer"
            htmlFor="r3"
          >
            {props.thirdName}
          </Label>
        </div>
      </RadioGroup>
    </>
  );
};
export const CheckboxInputs = (props) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id="first" className="cursor-pointer" />
        <label
          htmlFor="first"
          className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          {props.firstName}
        </label>
      </div>
      <div className="flex items-center pt-4 space-x-2">
        <Checkbox id="second" className="cursor-pointer" />
        <label
          htmlFor="second"
          className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          {props.secondName}
        </label>
      </div>
      <div className={`flex items-center pt-4 space-x-2 ${props.className}`}>
        <Checkbox id="third" className="cursor-pointer" />
        <label
          htmlFor="third"
          className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          {props.thirdName}
        </label>
      </div>
    </>
  );
};
