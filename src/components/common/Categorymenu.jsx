"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="z-10 scrollbar_style">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white font-normal text-base pe-0 ps-20">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-10 pb-3 top-[10px] rounded-[8px] bg-white border ">
            <div className="sm:p-4 p-3 flex flex-col md:flex-row gap-y-3 max-h-[70vh] overflow-auto">
              <ul className="flex flex-wrap sm:flex-nowrap">
                <li className="px-5  pt-1 sm:min-w-[200px]">
                  <span className="text-[14px] uppercase font-bold text-nowrap">
                    Coffee by price point
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4 mt-3">
                    <li className="sm:pt-2 pt-1 cursor-pointer py-2">
                      Advanced Search Functionality
                    </li>
                    <li className=" cursor-pointer py-2">
                      Comprehensive Coffee Bean Database
                    </li>
                    <li className=" cursor-pointer py-2">
                      High Quality Products
                    </li>
                    <li className="sm:pt-2 pt-1 cursor-pointer py-2">Light</li>
                    <li className=" cursor-pointer py-2">
                      Coffee Bean by Malerapaso
                    </li>
                  </ul>
                </li>
                <li className="px-5 text-nowrap pt-1 sm:min-w-[150px]">
                  <span className="text-[14px] uppercase font-bold">
                    Roast level
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4 mt-3">
                    <li className="sm:pt-2 pt-1 cursor-pointer py-2">Light</li>
                    <li className=" cursor-pointer py-2">Medium</li>
                    <li className=" cursor-pointer py-2">Dark</li>
                    <li className="sm:pt-2 pt-1 cursor-pointer py-2">Light</li>
                  </ul>
                </li>
              </ul>
              <ul className="flex flex-wrap sm:flex-nowrap">
                <li className="px-5 pt-1 sm:min-w-[200px]">
                  <span className="text-[14px] uppercase font-bold">
                    Discover
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4 mt-3">
                    <li className="sm:pt-2 pt-1 cursor-pointer py-2">Light</li>
                    <li className="sm:pt-2 pt-1 cursor-pointer py-2">
                      Advanced Search Functionality
                    </li>
                    <li className=" cursor-pointer py-2">
                      Comprehensive Coffee Bean Database
                    </li>
                    <li className=" cursor-pointer py-2">
                      High Quality Products
                    </li>
                  </ul>
                </li>
                <li className="px-5 pt-1 sm:min-w-[150px]">
                  <span className="text-[14px] uppercase font-bold">
                    Country
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4 mt-3">
                    <li className="sm:pt-2 pt-1 cursor-pointer py-2">Light</li>
                    <li className=" cursor-pointer py-2">Medium</li>
                    <li className=" cursor-pointer py-2">Dark</li>
                    <li className=" cursor-pointer py-2">Dark</li>
                  </ul>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
