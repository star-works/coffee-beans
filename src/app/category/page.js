import AccordionComponent from "@/components/category/Accordion";
import CategoryCard from "@/components/category/Categorycard";
import { CrossIcon } from "@/components/common/Icons";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="pt-[45px] md:pb-20 pb-[45px] max-w-[1120px] mx-auto xl:px-0 px-3 ">
      <div className="flex gap-6 sm:items-center sm:flex-row flex-col mb-10 pt-20 sm:mt-12 ">
        <h2 className="font-semibold text-[32px] leading-[38.4px] text-[#090909]">
          Category Page
        </h2>
        <div className="flex gap-3 items-center">
          <Button className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full hover:opacity-80">
            Coffee
            <span className="ms-1">
              <CrossIcon />
            </span>
          </Button>
          <Button className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full hover:opacity-80">
            Dark
            <span className="ms-1">
              <CrossIcon />
            </span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 pt-3">
        <AccordionComponent /> <CategoryCard />
      </div>
    </div>
  );
};

export default page;
