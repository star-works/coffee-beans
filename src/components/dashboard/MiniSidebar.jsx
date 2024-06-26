"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { miniSidebarLinks, sidebarLinks } from "./common/Helper";
import { SettingsIcon, SupportIcon } from "./common/Icons";

const MiniSidebar = ({ showNav, setShowNav }) => {
  const router = usePathname();
  return (
    <div
      className={`w-[50px] h-screen transition-all duration-300 ease-in-out absolute md:relative z-10  ${
        !showNav ? "ms-[0px] z-[20]" : "-ms-[50px]"
      }`}
    >
      <div
        className={`flex items-center  justify-between bg-white py-5 px-2 border-r border-r-solid border-r-lightGray ${
          !showNav ? "" : "border-b border-b-solid  border-b-lightGray"
        }`}
      >
        <Link href="/" className="flex justify-end items-end">
          <Image
            src="/assets/images/dasboard/png/logo.png"
            alt="logo"
            height={34}
            width={32}
          />
        </Link>
      </div>
      <div className={`${!showNav ? "w-[50px]" : "w-0"}`}>
        <div
          className={`max-w-[240px] w-full transition-all duration-500 border-r border-r-solid border-r-lightGray ${
            !showNav
              ? "absolute left-0 top-[72px]"
              : "absolute top-[72px] !-left-[100%]"
          }`}
        >
          <div className="bg-white px-4 pb-4 h-[calc(100vh-176px)] overflow-auto flex flex-col gap-1 my_sidebar pt-4">
            {miniSidebarLinks.map((obj, index) => {
              return (
                <Link href={`${obj.path}`} key={index}>
                  <div
                    className={`w-full flex items-center transition-all group cursor-pointer justify-center gap-2 ${
                      obj.class
                    } ${
                      router === obj.path
                        ? "bg-[#F9FAFB] px-2 py-2  rounded-lg"
                        : ""
                    }`}
                  >
                    {obj.icon && <span>{obj.icon}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="px-2 bg-white py-[14px]">
            <div className="px-2 py-2 mb-1 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 flex items-center gap-2 group cursor-pointer">
              <span>
                <SupportIcon />
              </span>
            </div>
            <Link href="/dashboard/settings">
              <div
                className={`px-2 py-2 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 flex items-center gap-2 group cursor-pointer ${
                  router === "/dashboard/settings"
                    ? "bg-[#F9FAFB] px-2 py-2  rounded-lg "
                    : ""
                }`}
              >
                <span>
                  <SettingsIcon />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;
