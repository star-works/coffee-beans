import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommonAccordion = (props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm -tracking-[3%] text-[#4B5563] font-semibold group-hover:text-[#D3756B] transition-all duration-300 hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]">
          {props.icon}
          {props.heading}
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm -tracking-[3%] text-[#4B5563] font-semibold hover:text-[#D3756B] transition-all duration-300 px-2 py-2 rounded-[8px] hover:bg-[#F9FAFB]">
            {props.option1}
          </p>
          <p className="text-sm -tracking-[3%] text-[#4B5563] font-semibold hover:text-[#D3756B] transition-all duration-300 px-2 py-2 rounded-[8px] hover:bg-[#F9FAFB]">
            {props.option2}
          </p>
          <p className="text-sm -tracking-[3%] text-[#4B5563] font-semibold hover:text-[#D3756B] transition-all duration-300 px-2 py-2 rounded-[8px] hover:bg-[#F9FAFB]">
            {props.option3}
          </p>
          <p className="text-sm -tracking-[3%] text-[#4B5563] font-semibold hover:text-[#D3756B] transition-all duration-300 px-2 py-2 rounded-[8px] hover:bg-[#F9FAFB]">
            {props.option4}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CommonAccordion;
