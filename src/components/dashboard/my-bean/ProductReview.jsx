import Image from "next/image";
import { Button } from "../../ui/button";
import { BackArrow, NextArrow } from "../common/Icons";

const ProductPreview = ({ value }) => {
  return (
    <div className="max-w-[1312px] bg-white rounded-xl sm:p-6 p-2 lg:mx-6 md:mx-3 lg:my-6 mt-3">
      <div className="flex md:flex-row flex-col-reverse lg:gap-24 gap-10">
        <div className="flex flex-col xs:gap-6 gap-3">
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Title
            </p>
            <p className="text-[#111827] font-semibold sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              Hanhadhi Village
            </p>
          </div>
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Description
            </p>
            <p className="text-[#111827] font-normal sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              A complex coffee grown in the heart of the Guji appellation. After
              the harvest, the beans are sun-dried in the village of Hangadhi,
              resulting in a fruity profile with pleasant notes of blueberry and
              apple. Certified organic and in recognition of a local know-how
              that is respectful of people and the environment.
            </p>
          </div>
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Notes
            </p>
            <p className="text-[#111827] font-normal sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              Blueberry • Green apple • Lime
            </p>
          </div>
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Weight & Price
            </p>
            <p className="text-[#111827] font-normal sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              250g. 120 Kr.
              <span className="block"> 1kg. 320 Kr.</span>{" "}
            </p>
          </div>
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Roast level
            </p>
            <p className="text-[#111827] font-normal sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              Light Roast
            </p>
          </div>
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Bean sort
            </p>
            <p className="text-[#111827] font-normal sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              Arabica: Ethiopian landraces
            </p>
          </div>
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Plantation & Country
            </p>
            <p className="text-[#111827] font-normal sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              Hangadhi Village • Ethiopia
            </p>
          </div>
          <div className="flex xs:flex-row flex-col sm:gap-6 xs:gap-3 gap-1 lg:flex-row md:flex-col lg:gap-6 md:gap-1">
            <p className="text-[#4B5563] font-normal text-xs leading-[15px] -tracking-[3%] max-w-[120px] ff_inter w-full">
              Recommended use
            </p>
            <p className="text-[#111827] font-normal sm:text-base text-sm leading-[20px] -tracking-[3%] max-w-[728.5px] ff_inter w-full">
              French press • Filter
            </p>
          </div>
        </div>
        <div className="max-w-[295.5px] w-full">
          <p className="font-medium ff_inter text-sm leading-[17.5px] -tracking-[3%] text-[#111827] mb-[10px]">
            Product preview
          </p>
          <Image
            className="mb-3"
            src="/assets/images/dasboard/png/village.png"
            alt="bean-pouch"
            height={290}
            width={290}
          />
          <p className="font-normal sm:text-base text-sm leading-[20.16px] text-black mb-[7px]">
            Nordic Roasting & Co.
          </p>
          <p className="font-bold sm:text-base text-sm leading-[20.16px] text-black mb-[7px]">
            Hanhadhi Village
          </p>
          <p className="font-light sm:text-base text-sm leading-[20.16px] text-black">
            120 Kr.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div onClick={() => value(1)}>
          <Button className="sm:px-4 px-3  group bg-transparent flex items-center gap-2 rounded-lg border border-solid border-[#E5E7EB] shadow-[0px_1px_2px_0px_#11182712] font-semibold sm:text-base text-sm leading-[20px] -tracking-[3%] text-[#1F2937] ff_inter">
            <span className="group-hover:-translate-x-2 transition-all duration-300">
              <BackArrow />
            </span>
            Back
          </Button>
        </div>
        <div onClick={() => value(1)}>
          <Button className="sm:px-4 px-3  group bg-[#D3756B] flex items-center gap-2 rounded-lg border border-solid border-[#E5E7EB] shadow-[0px_1px_2px_0px_#11182712] font-semibold sm:text-base text-sm leading-[20px] -tracking-[3%] text-white ff_inter">
            Publish
            <span className="group-hover:translate-x-2 transition-all duration-300">
              <NextArrow />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
