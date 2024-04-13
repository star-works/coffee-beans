import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

const TopBtns = ({ value }) => {
  return (
    <div className="flex sm:flex-nowrap flex-wrap gap-4">
      <Button
        className={` text-[#A2A8B3] w-full text-[14px] font-semibold flex justify-start border-[2px] border-[#E9BAB5] bg-transparent text-[#D3756B] ${
          value === 2 ? "bg-[#F6E3E1]" : ""
        } `}
      >
        <span
          className={`flex me-3 h-[16px] w-[16px] rounded-full justify-center text-[12px] items-center text-white bg-[#D3756B] `}
        >
          1
        </span>
        General info
      </Button>
      <Button
        className={`bg-[#F9FAFB] text-[#A2A8B3] w-full text-[14px] font-semibold flex justify-start  border-[2px]  ${
          value === 2
            ? "border-[#E9BAB5] bg-transparent text-[#D3756B]"
            : "border-transparent"
        }`}
      >
        <span
          className={`flex me-3 h-[16px] w-[16px] rounded-full justify-center text-[12px] items-center text-white bg-[#D1D5DB] ${
            value === 2 ? " bg-[#D3756B]" : ""
          }`}
        >
          2
        </span>
        Details
      </Button>
      <Button className="bg-[#F9FAFB] text-[#A2A8B3] w-full text-[14px] font-semibold flex justify-start">
        <span className="flex me-3 h-[16px] w-[16px] rounded-full justify-center text-[12px] items-center text-white bg-[#D1D5DB]">
          3
        </span>
        Review & publish
      </Button>
    </div>
  );
};

export default TopBtns;
