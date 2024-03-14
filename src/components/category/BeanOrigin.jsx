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
import { useSelectedProvider } from "../context/SelectedProvider";
const BeanOrigin = () => {
  const options = ["Columbia", "Peru"];
  const [search, setSerach] = useState(options);
  const { beanOrigin, setBeanOrigin } = useSelectedProvider();
  const searchHandler = (e) => {
    const newArr = options.filter((obj) =>
      obj.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setSerach(newArr);
  };
  return (
    <AccordionItem value={`4`} className="mb-6  border-b-0">
      <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
        Bean origin
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
            placeholder="Search Bean origin..."
            className="border-0 pb-4 px-4 border-b rounded-none focus-visible:outline-none focus-visible:ring-0"
          />
        </div>
        <div className="px-4">
          <RadioInputs
            value={beanOrigin}
            setValue={setBeanOrigin}
            options={search}
            type="Bean origin"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default BeanOrigin;
