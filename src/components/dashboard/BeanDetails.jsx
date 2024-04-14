import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { AddIcon, BackArrow, NextArrow } from "./Icons";
import { beanDetails } from "./Helper";
const BeanDetails = ({ value }) => {
  return (
    <div className="bg-white rounded-xl mt-6">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-6 "
      >
        {beanDetails.map((obj, index) => {
          return (
            <AccordionItem
              key={index}
              value={obj.item}
              className="border-2 border-solid border-[#E5E7EB] px-3  rounded-lg [&[data-state=open]]:bg-[#D3756B] [&[data-state=open]]:bg-opacity-5 [&[data-state=open]]:border-[#D3756B] [&[data-state=open]]:border-opacity-10"
            >
              <AccordionTrigger className=" !flex !items-center sm:py-2 py-1">
                <div className="flex">
                  <span className="pe-3">{obj.titleIcon}</span>
                  <p className="mb-0 ff_inter font-semibold sm:text-base text-sm leading-[20px] -tracking-[3%] text-[#111827] mt-2">
                    {obj.title}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-4 ps-0">
                {obj.details}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <Button className="text-[#D3756B] ff_inter font-semibold sm:text-base text-sm leading-[20px] -tracking-[3%] w-full sm:py-6 py-2 flex items-center justify-center gap-2 my-6 bg-transparent border-2 border-[#E5E7EB] border-dashed">
        <span>
          <AddIcon />
        </span>{" "}
        Add new details
      </Button>
      <div className="flex justify-between items-center gap-1">
        <div onClick={() => value(1)}>
          <Button className="sm:px-4 px-3  group bg-transparent flex items-center gap-2 rounded-lg border border-solid border-[#E5E7EB] shadow-[0px_1px_2px_0px_#11182712] font-semibold sm:text-base text-sm leading-[20px] -tracking-[3%] text-[#1F2937] ff_inter">
            <span className="group-hover:-translate-x-2 transition-all duration-300">
              <BackArrow />
            </span>
            Back
          </Button>
        </div>
        <div onClick={() => value(3)}>
          <Button className="sm:px-4 px-3 group bg-[#D3756B] flex items-center gap-2 rounded-lg border border-solid border-[#E5E7EB] shadow-[0px_1px_2px_0px_#11182712] font-semibold sm:text-base text-sm leading-[20px] -tracking-[3%] text-white ff_inter">
            Review and publish
            <span className="group-hover:translate-x-2 transition-all duration-300">
              <NextArrow />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BeanDetails;
