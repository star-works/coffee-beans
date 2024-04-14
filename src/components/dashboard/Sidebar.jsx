"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "./Helper";
import { SettingsIcon, SupportIcon } from "./Icons";

const Sidebar = ({ showNav, setShowNav }) => {
  const router = usePathname();
  return (
    <div
      className={`w-[240px] h-screen transition-all duration-300 ease-in-out absolute md:relative z-10  ${
        showNav ? "ms-[0px]" : "-ms-[240px]"
      }`}
    >
      <div
        className={`flex items-center  justify-between bg-white py-5 px-6 border-r border-r-solid border-r-[#F3F4F6] ${
          showNav ? "" : "border-b border-b-solid border-b-[#F3F4F6]"
        }`}
      >
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/assets/images/dasboard/svg/logo.svg"
            alt="logo"
            height={34}
            width={32}
          />
          <p className="font-semibold text-base leading-[22px] -tracking-[3%] text-black">
            Cool Name
          </p>
        </Link>
        <div
          onClick={() => setShowNav(!showNav)}
          className={`flex flex-col gap-[2px] cursor-pointer absolute  ${
            showNav ? "left-[210px]" : "left-[260px]"
          }`}
        >
          <span
            className={`transition-all duration-500 ${
              showNav
                ? "translate-y-[1px] -rotate-[45deg] w-[16px] h-[2px] bg-[#111827] rounded block"
                : "w-[16px] h-[2px] bg-[#111827] rounded block"
            }`}
          ></span>
          <span
            className={`transition-all duration-500 ${
              showNav
                ? "opacity-0 -translate-x-2"
                : "w-[16px] h-[2px] bg-[#111827] rounded block"
            }`}
          ></span>
          <span
            className={`transition-all duration-500 ${
              showNav
                ? "-translate-y-[5px] rotate-[45deg] w-[16px] h-[2px] bg-[#111827] rounded block"
                : "w-[16px] h-[2px] bg-[#111827] rounded block"
            }`}
          ></span>
        </div>
      </div>
      <div className={`${showNav ? "w-[240px]" : "w-0"}`}>
        <div
          className={`max-w-[240px] w-full transition-all duration-500 border-r border-r-solid border-r-[#F3F4F6] ${
            showNav
              ? "absolute left-0 top-[72px]"
              : "absolute top-[72px] !-left-[100%]"
          }`}
        >
          <div className="bg-white px-4 pb-4 h-[calc(100vh-176px)] overflow-auto flex flex-col gap-1 my_sidebar">
            {sidebarLinks.map((obj, index) => {
              return (
                <Link href={`${obj.path}`} key={index}>
                  <div
                    className={`w-full flex items-center transition-all group cursor-pointer justify-start gap-2 ${
                      obj.class
                    } ${
                      router === obj.path
                        ? "bg-[#F9FAFB] px-2 py-2  rounded-[8px]"
                        : ""
                    }`}
                  >
                    {obj.icon && <span>{obj.icon}</span>}
                    <div
                      className={`text-sm -tracking-[3%] text-[#4B5563] font-semibold group-hover:text-[#D3756B] transition-all duration-300 w-full ${
                        router === obj.path ? "text-[#D3756B]" : ""
                      } `}
                    >
                      {obj.tittle}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="px-4 bg-white py-[14px]">
            <div className="px-2 py-2 mb-1 rounded-[8px] hover:bg-[#F9FAFB] transition-all duration-300 flex items-center gap-2 group cursor-pointer">
              <span>
                <SupportIcon />
              </span>
              <p className="text-sm -tracking-[3%] text-[#4B5563] font-semibold group-hover:text-[#D3756B] transition-all duration-300">
                Support
              </p>
            </div>
            <Link href="/dashboard/settings">
              <div
                className={`px-2 py-2 rounded-[8px] hover:bg-[#F9FAFB] transition-all duration-300 flex items-center gap-2 group cursor-pointer ${
                  router === "/dashboard/settings"
                    ? "bg-[#F9FAFB] px-2 py-2  rounded-[8px] "
                    : ""
                }`}
              >
                <span>
                  <SettingsIcon />
                </span>
                <p
                  className={`text-sm -tracking-[3%] text-[#4B5563] font-semibold group-hover:text-[#D3756B] transition-all duration-300 ${
                    router === "/dashboard/settings" && "text-[#D3756B]"
                  }`}
                >
                  Settings
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
