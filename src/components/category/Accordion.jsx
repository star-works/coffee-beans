"use client";
import { Accordion } from "@/components/ui/accordion";
import Roastlevel from "./Roastlevel";
import CoffeeNotes from "./CoffeeNotes";
import BeanSort from "./BeanSort";
import BeanOrigin from "./BeanOrigin";
import Altitude from "./Altitude";
import CoffeeType from "./Coffeetype";
import RoasterLocation from "./RoasterLocation";
import Certifications from "./Certifications";
import Subscriptions from "./Subscription";

const AccordionComponent = () => {
  return (
    <div className="lg:max-w-[400px] md:max-w-[300px] w-full">
      <Accordion type="single" collapsible className="w-full">
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
