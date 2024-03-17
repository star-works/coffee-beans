import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AltitudeSlider from "./RangeSlider";
const Altitude = () => {
  return (
    <AccordionItem value={`5`} className="mb-6  border-b-0">
      <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
        Altitude (m)
      </AccordionTrigger>
      <AccordionContent className="pt-5">
        <AltitudeSlider />
      </AccordionContent>
    </AccordionItem>
  );
};

export default Altitude;
