"use client";
import { Accordion } from "@/components/ui/accordion";
import Altitude from "./Altitude";
import BeanOrigin from "./BeanOrigin";
import BeanSort from "./BeanSort";
import Certifications from "./Certifications";
import CoffeeNotes from "./CoffeeNotes";
import RoasterLocation from "./RoasterLocation";
import Roastlevel from "./Roastlevel";
import Subscriptions from "./Subscription";
import CoffeeType from "./CoffeeTypes";

const AccordionComponent = () => {
  return (
    <div className="lg:max-w-[400px] md:max-w-[300px] w-full">
      <Accordion
        defaultValue={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
        type="multiple"
        className="w-full"
      >
        <Roastlevel />
        <CoffeeNotes />
        <BeanSort />
        <BeanOrigin />
        <Altitude />
        <CoffeeType />
        <RoasterLocation />
        <Certifications />
        <Subscriptions />
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
