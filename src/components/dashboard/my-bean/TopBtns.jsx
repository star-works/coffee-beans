import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

const TopBtns = ({ value }) => {
  return (
    <div className="flex sm:flex-nowrap flex-wrap gap-4">
      <Button
        className={` text-[#A2A8B3] w-full text-sm font-semibold flex justify-start border-[2px] border-[#E9BAB5] bg-transparent text-lightRed ${
          value === 2 || value === 3 ? "bg-[#F6E3E1]" : ""
        } `}
      >
        <span
          className={`flex me-3 h-[16px] w-[16px] rounded-full justify-center text-xs items-center text-white bg-[#D3756B] `}
        >
          1
        </span>
        General info
      </Button>
      <Button
        className={`bg-[#F9FAFB] text-[#A2A8B3] w-full text-sm font-semibold flex justify-start  border-[2px]  ${
          value === 2
            ? "border-[#E9BAB5] bg-transparent text-lightRed"
            : `border-transparent ${
                value === 3 ? "bg-[#F6E3E1] border-[#E9BAB5] text-lightRed" : ""
              }`
        }`}
      >
        <span
          className={`flex me-3 h-[16px] w-[16px] rounded-full justify-center text-xs items-center text-white bg-[#D1D5DB] ${
            value === 2 || value === 3 ? " bg-[#D3756B]" : ""
          }`}
        >
          2
        </span>
        Details
      </Button>
      <Button
        className={`bg-[#F9FAFB] text-[#A2A8B3] w-full text-sm font-semibold flex justify-start   ${
          value === 3
            ? "border-[#E9BAB5] bg-transparent text-lightRed  border-[2px]"
            : ""
        }`}
      >
        <span
          className={`flex me-3 h-[16px] w-[16px] rounded-full justify-center text-xs items-center text-white bg-[#D1D5DB] ${
            value === 3 ? "bg-[#D3756B]" : ""
          }`}
        >
          3
        </span>
        Review & publish
      </Button>
    </div>
  );
};

export default TopBtns;
