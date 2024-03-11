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
import AccordionCardItem from "./AccordionCardItem";

const AccordionComponent = () => {
  return (
    <div className="lg:max-w-[400px] md:max-w-[300px] w-full">
      <Accordion type="single" collapsible className="w-full">
        {beanCategories.map((obj, index) => {
          return <AccordionCardItem key={index} index={index} obj={obj} />;
        })}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
