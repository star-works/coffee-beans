import React from "react";
import MyBeanCard from "./MyBeanCard";
import { Button } from "@/components/ui/button";

import { Plus } from "./Icons";

const MyBean = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="ps-4">
        <div className="flex items-center">
          <h3 className="xs:text-[20px] text-[18px] font-semibold text-[#111827] me-4">
            My Beans
          </h3>
          <Button className="bg-[#D3756B] group px-4 text-[12px] font-semibold py-2 h-full hover:bg-transparent hover:text-[#D3756B] border border-[#D3756B] rounded-[6px]">
            <Plus /> Add new bean
          </Button>
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
