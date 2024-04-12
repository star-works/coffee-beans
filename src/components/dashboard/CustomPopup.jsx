import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

const CustomPopup = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="border-0 rounded-full px-2" variant="outline">
          <Image
            height="24"
            width="24"
            src="/assets/images/dasboard/svg/dots-vertical-icon.svg"
            alt="dots"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-80">
        <div>
          <h3 className="text-center font-semibold">Top Coffee</h3>
          <p className="py-2 border-b">Hangadhi Village</p>
          <p className="border-b py-2">Jiwaka - Papua New Guniea</p>
          <p className="py-2 border-b">Yiver Vargas, Gesga</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopup;
