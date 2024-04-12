import React from "react";
import MyBeanCard from "./MyBeanCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Grid, GridToggle, Plus, Search } from "./Icons";

const MyBean = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="ps-4">
        <div className="flex justify-between">
          <div className="flex items-center w-full">
            <h3 className="xs:text-[20px] text-[18px] font-semibold text-[#111827] me-4">
              My Beans
            </h3>
            <Button className="bg-[#D3756B] group px-4 text-[12px] font-semibold py-2 h-full hover:bg-transparent hover:text-[#D3756B] border border-[#D3756B] rounded-[6px]">
              <Plus /> Add new bean
            </Button>
          </div>
          <div className="flex items-center w-full">
            <div className="bg-white border border-[#E5E7EB] rounded-[6px] shadow-[0px_2px_4px_2px_#f9fafa] flex items-center w-full max-w-[240px] ms-auto">
              <img
                className="ps-2"
                src="/assets/images/png/search.png"
                alt="search"
              />
              <Input
                type="text"
                placeholder="Search beans"
                className="text-[12px] font-normal bg-transparent border-0 focus:no-outline focus-visible:shadow-none ps-1 w-full placeholder-[#9CA3AF] "
              />
            </div>
            <div className="flex border rounded-[6px] border-[#E5E7EB] bg-white ms-4">
              <span className="border-r inline-block py-3 px-3 border-[#E5E7EB]">
                <Grid />
              </span>
              <span className="inline-block px-3 py-3">
                <GridToggle />
              </span>
            </div>
          </div>
        </div>
        <div className="py-2">
          <p className="text-[14px] font-normal text-[#6B7280]">
            8 beans found
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        {arr.map((obj, i) => (
          <MyBeanCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default MyBean;