import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const MyBeanCard = () => {
  return (
    <Card className="w-[350px] bg-[#F9FAFB] border-0 px-4 ">
      <CardContent className="pt-4">
        <Image
          className="rounded-[10px] mb-4"
          src="/assets/images/png/my_bean_card.png"
          width={290}
          height={290}
        />
        <p className="xs:text-[16px] text-[14px] font-normal">
          Nordic Roasting & Co.
        </p>
        <p className="xs:text-[16px] text-[14px] font-bold sm:py-1">
          Rushashi - Washed
        </p>
        <p className="xs:text-[16px] text-[14px] font-normal">120 Kr.</p>
      </CardContent>
    </Card>
  );
};

export default MyBeanCard;
