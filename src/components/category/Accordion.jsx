"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { beanCategories } from "../common/Helper";
import { BlackSearch } from "../common/Icons";
import RangeSlider from "./RangeSlider";

const AccordionComponent = () => {
  return (
    <div className="lg:max-w-[400px] md:max-w-[300px] w-full">
      <Accordion type="single" collapsible className="w-full">
        {beanCategories.map((obj, index) => {
          return (
            <AccordionItem
              key={index}
              value={`${index}`}
              defaultOpen={`${index}` === "0"}
              className="mb-6  border-b-0"
            >
              <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
                {obj.heading}
              </AccordionTrigger>
              <AccordionContent className="pt-5">
                <div className={`relative mb-[25px] ${obj.classHidden}`}>
                  <Label htmlFor="icon">
                    <span className="opacity-40 absolute right-4 top-[50%] -translate-y-[50%]">
                      <BlackSearch />
                    </span>
                  </Label>
                  <Input
                    id="icon"
                    placeholder={obj.placeholder}
                    className="border-0 pb-4 px-4 border-b rounded-none focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="px-4">
                  {obj.type === "range" ? <RangeSlider /> : obj.type}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
