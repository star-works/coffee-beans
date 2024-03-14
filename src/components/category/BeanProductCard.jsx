import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import {
  ChocolateBadge,
  GreenBadge,
  OrangeBadge,
  RedeBadge,
} from "../common/AllBadges";
import { useSelectedProvider } from "../context/SelectedProvider";
const BeanProductCard = ({ value }) => {
  const { setCategory } = useSelectedProvider();
  return (
    <Card className="max-w-[680px] p-2 sm:p-3 lg:p-6 shadow-[0px_16px_64px_0px_#00000008] w-full border border-[#F2F4F4] bg-white rounded-2xl md:rounded-3xl flex sm:flex-col md:flex-row gap-2 sm:gap-2 md:gap-3 lg:gap-8">
      <CardHeader>
        <Image
          width={200}
          height={180}
          className="md:h-[180px] sm:w-3/4 md:w-full mx-auto sm:h-[120px]  md:max-w-[154px] lg:max-w-[200px] object-cover rounded-2xl"
          src={value.image}
          alt="coffee image"
        />
      </CardHeader>
      <div className="p-0">
        <CardContent className="pt-0">
          <p className="text-lg text-[#090909] font-semibold !leading-[140%]">
            {value.title}
          </p>
          <p className="text-base text-[#090909] font-light !leading-[140%]">
            {value.description}
          </p>
          <p className="flex items-center pt-2 text-[#090909] font-semibold text-xl">
            $80
            <span className="text-sm font-normal ms-1 text-[#c1c1c1] relative before:absolute before:w-full before:h-[1px] before:bg-[#c1c1c1] before:start-0 before:top-1/2 before:-translate-y-1/2">
              $55.99
            </span>
          </p>
          <div className="flex gap-[2px] min-[360px]:gap-1.5 py-3 sm:py-2 md:py-4">
            <Image
              width={40}
              height={40}
              className="h-9 w-9 md:w-10 md:h-10"
              src="/assets/images/png/secure_badge.png"
              alt="image slider"
            />
            <Image
              width={40}
              height={40}
              className="h-9 w-9 md:w-10 md:h-10"
              src="/assets/images/png/money_back_badge.png"
              alt="image slider"
            />
            <Image
              width={40}
              height={40}
              className="h-9 w-9 md:w-10 md:h-10"
              src="/assets/images/png/satisfaction_badge.png"
              alt="image slider"
            />
            <Image
              width={40}
              height={40}
              className="h-9 w-9 md:w-10 md:h-10"
              src="/assets/images/png/easy_returns_badge.png"
              alt="image slider"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1 lg:gap-2">
          <div onClick={() => setCategory("Bean")} className="cursor-pointer">
            <GreenBadge className={"py-[6px] px-[10px]"} name={"Bean"} />
          </div>
          <div
            onClick={() => setCategory("Caramel")}
            className="cursor-pointer"
          >
            <RedeBadge className={"py-[6px] px-[10px]"} name={"Caramel"} />
          </div>
          <div onClick={() => setCategory("Bean")} className="cursor-pointer">
            <ChocolateBadge className={"py-[6px] px-[10px]"} name={"Bean"} />
          </div>
          <div onClick={() => setCategory("Honey")} className="cursor-pointer">
            <OrangeBadge className={"py-[6px] px-[10px]"} name={"Honey"} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BeanProductCard;
