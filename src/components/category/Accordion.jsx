"use client";
import { Accordion } from "@/components/ui/accordion";
import Roastlevel from "./Roastlevel";

const AccordionComponent = () => {
  return (
    <div className="lg:max-w-[400px] md:max-w-[300px] w-full">
      <Accordion type="single" collapsible className="w-full">
        <Roastlevel />
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
