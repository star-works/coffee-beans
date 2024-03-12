import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { useSelectedProvider } from "../context/SelectedProvider";
export const RadioInputs = (props) => {
  const { setCategory } = useSelectedProvider();

  return (
    <>
      <RadioGroup defaultValue="comfortable" className={`gap-0`}>
        {props.search.map((obj, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 py-[4px]"
            onClick={() => setCategory(obj)}
          >
            <RadioGroupItem value={obj} id={obj} className="cursor-pointer" />
            <Label
              className="text-base text-[#090909] font-normal cursor-pointer"
              htmlFor={obj}
            >
              {obj}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
};
export const CheckboxInputs = (props) => {
  return (
    <>
      {props.search.map((obj, i) => (
        <div
          className="flex items-center space-x-2 py-2"
          key={i}
          onClick={() => setCategory(obj)}
        >
          <Checkbox id={obj} className="cursor-pointer" />
          <label
            htmlFor={obj}
            className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {obj}
          </label>
        </div>
      ))}
    </>
  );
};
