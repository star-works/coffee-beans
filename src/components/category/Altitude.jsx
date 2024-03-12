import React, { useState } from "react";
import { RadioInputs } from "./AllInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlackSearch } from "../common/Icons";
import RangeSlider from "./RangeSlider";
const Altitude = () => {
  const options = ["Light", "Medium", "Dark"];
  const [search, setSerach] = useState(options);
  const searchHandler = (e) => {
    const newArr = options.filter((obj) =>
      obj.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setSerach(newArr);
  };
  return (
    <AccordionItem value={`5`} className="mb-6  border-b-0">
      <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
        Altitude (m)
      </AccordionTrigger>
      <AccordionContent className="pt-5">
        <RangeSlider />
      </AccordionContent>
    </AccordionItem>
  );
};

export default Altitude;
