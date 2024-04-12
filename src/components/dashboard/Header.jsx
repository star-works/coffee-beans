import React from "react";
import { NotificationsIcons, SearchIcon } from "./Icons";

const Header = ({ showNav }) => {
  return (
    <div className="bg-white  border-b border-l border-solid border-[#F3F4F6] h-[72px]">
      <div
        className={`flex justify-between items-center transition-all duration-300 ease-in-out pe-6 py-4 ${
          showNav ? "ps-6" : "ps-12"
        }`}
      >
        <div className="w-[202px] flex items-center ">
          <div className="w-auto">
            <SearchIcon />
          </div>
          <input
            className="border-none py-2 ps-[10px] outline-none font-normal text-sm sm:text-base text-[#9CA3AF] placeholder:text-[#9CA3AF] tracking-[-0.5px]"
            type="Search here"
            placeholder="Search here"
          />
        </div>
        <div className="w-[253px] flex items-center">
          <NotificationsIcons />
        </div>
      </div>
    </div>
  );
};

export default Header;
