import React from "react";
import { NotificationsIcons, SearchIcon } from "./Icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

const Header = ({ showNav }) => {
  return (
    <div className="bg-white border-b border-l border-solid border-[#F3F4F6] h-[72px]">
      <div className="flex justify-between items-center pe-4 py-4 sm:pe-6 ps-20 sm:py-4">
        <div className="w-[120px] sm:w-[202px] flex items-center ">
          <label htmlFor="searchInput" className="w-auto">
            <SearchIcon />
          </label>
          <input
            id="searchInput"
            className="border-none py-2 ps-[10px] outline-none font-normal text-sm sm:text-base text-[#9CA3AF] placeholder:text-[#9CA3AF] tracking-[-0.5px]"
            type="search"
            placeholder="Search here"
          />
        </div>
        <div className="flex gap-2">
          <NotificationsIcons />
          <Select className="border-0">
            <SelectTrigger className="gap-2 p-0 border-0">
              <Image
                src="/assets/images/dasboard/svg/acme-roasters-img.svg"
                alt="Example Image"
                width={32}
                height={32}
              />

              <div className="flex-col items-start xs:flex hidden">
                <h4 className="text-gray-900 text-xs leading-[15px] tracking-[-3%]">
                  Acme Roasters
                </h4>
                <Link
                  className="text-gray-600 text-xs leading-[15px] tracking-[-3%]"
                  href="mailto:hello@acme-coffee.com"
                >
                  hello@acme-coffee.com
                </Link>
              </div>
            </SelectTrigger>
            <SelectContent>
              <div className="flex gap-2 p-2">
                <Image
                  src="/assets/images/dasboard/svg/acme-roasters-img.svg"
                  alt="Example Image"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-gray-900 text-xs leading-[15px] tracking-[-3%] ff_inter">
                    Acme
                  </h4>
                  <Link
                    className="text-gray-600 text-xs leading-[15px] tracking-[-3%] ff_inter"
                    href="mailto:hello@acme-coffee.com"
                  >
                    hello@acme-coffee.com
                  </Link>
                </div>
              </div>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;
