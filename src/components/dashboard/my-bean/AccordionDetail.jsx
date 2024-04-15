import React from "react";
import { profileCharacteristic, qualityData } from "../common/Helper";
import { DeleteIcon } from "../common/Icons";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const ProfileCharacteristic = () => {
  return (
    <div className="border border-solid border-[#E5E7EB] rounded-lg bg-white xl:pt-[66px] xl:pb-[30px] xl:px-4 p-4">
      <div className="flex justify-between gap-6 sm:flex-row flex-col">
        <div className="grid xs:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 md:gap-4 lg:gap-6 max-w-[415px] w-full xl:gap-x-[55px] xl:gap-y-5 gap-6">
          {profileCharacteristic.map((obj, index) => {
            return (
              <div key={index}>
                <p className="ff_inter font-semibold text-xs leading-[15px] tracking-[-3%] text-[#1F2937] text-nowrap">
                  {obj.category}
                </p>
                <div className="mt-3">{obj.option}</div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 sm:max-w-[320px] w-full xl:me-[60px]">
          {qualityData.map((quality, index) => {
            return (
              <div key={index} className="flex gap-6 items-center">
                <p className="max-w-20 w-full font-normal text-base text-lightBlack">
                  {quality.title} <span>{quality.span}</span>
                </p>
                <Progress className="" value={quality.value} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center xl:mt-[78px] mt-6">
        <Button className="px-4 sm:px-[14px] sm:py-[10px] py-1 group bg-transparent flex items-center gap-2 rounded-lg border border-solid border-[#E5E7EB] shadow-[0px_1px_2px_0px_#11182712] font-semibold text-sm leading-[20px] -tracking-[3%] text-[#F83B3B] ff_inter hover:border-[#F83B3B]">
          <span className="group-hover:-translate-x-[-4px] transition-all duration-300">
            <DeleteIcon />
          </span>
          Remove
        </Button>
        <Button className="px-4 sm:px-[44px] sm:py-[10px] py-1 group bg-transparent flex items-center gap-2 rounded-lg border border-solid border-[#E5E7EB] shadow-[0px_1px_2px_0px_#11182712] font-semibold text-sm leading-[20px] -tracking-[3%] text-[#F83B3B] ff_inter  hover:border-[#F83B3B]">
          Save
        </Button>
      </div>
    </div>
  );
};
