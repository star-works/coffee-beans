import React, { useState } from "react";
import { CheckboxInputs, RadioInputs } from "./AllInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlackSearch } from "../common/Icons";
import { useSelectedProvider } from "../context/SelectedProvider";
const Certifications = () => {
  const options = ["Rainforest", "fair trade"];
  const [search, setSerach] = useState(options);
  const { certifications, setCertifications } = useSelectedProvider();
  const searchHandler = (e) => {
    const newArr = options.filter((obj) =>
      obj.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setSerach(newArr);
  };
  return (
    <AccordionItem value={`8`} className="mb-6  border-b-0">
      <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
        Certifications
      </AccordionTrigger>
      <AccordionContent className="pt-5">
        <div className={`relative mb-[25px]`}>
          <Label htmlFor="icon">
            <span className="opacity-40 absolute right-4 top-[50%] -translate-y-[50%]">
              <BlackSearch />
            </span>
          </Label>
          <Input
            onChange={(e) => searchHandler(e.target.value)}
            id="icon"
            placeholder="Search Certifications..."
            className="border-0 pb-4 px-4 border-b rounded-none focus-visible:outline-none focus-visible:ring-0"
          />
        </div>
        <div className="px-4">
          <CheckboxInputs
            value={certifications}
            setValue={setCertifications}
            options={search}
            type="Certifications"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Certifications;
