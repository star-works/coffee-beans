import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { BlackSearch } from "../common/Icons";
import { RadioInputs } from "./AllInput";
import { useSelectedProvider } from "../context/SelectedProvider";
const Subscriptions = () => {
  const options = ["Yes", "No"];
  const [search, setSerach] = useState(options);
  const { subscription, setSubscription } = useSelectedProvider();
  const searchHandler = (e) => {
    const newArr = options.filter((obj) =>
      obj.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setSerach(newArr);
  };
  return (
    <AccordionItem value={`9`} className="mb-6  border-b-0">
      <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-lightBlack">
        Subscription
      </AccordionTrigger>
      <AccordionContent className="pt-5">
        <div className="px-4">
          <RadioInputs
            value={subscription}
            setValue={setSubscription}
            options={search}
            type="Subscription"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Subscriptions;
