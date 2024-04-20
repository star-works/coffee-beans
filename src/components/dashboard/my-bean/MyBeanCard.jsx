import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const MyBeanCard = () => {
  return (
    <Card className="xs:max-w-[20%] xl:min-w-[280px] 2xl:w-[300px] lg:min-w-[235px] min-w-[230px] bg-[#F9FAFB] border-0 px-4 pt-0 pb-2 hover:translate-y-[-5px] transition-all duration-300 ease-in-out cursor-pointer">
      <CardContent className="pt-4">
        <Image
          className="rounded-[10px] mb-4"
          src="/assets/images/png/my_bean_card.png"
          width={290}
          height={290}
          alt="my-bean"
        />
        <p className="xs:text-base text-sm font-normal">
          Nordic Roasting & Co.
        </p>
        <p className="xs:text-base text-sm font-bold ">Rushashi - Washed</p>
        <p className="xs:text-base text-sm font-normal">120 Kr.</p>
      </CardContent>
    </Card>
  );
};

export default MyBeanCard;
