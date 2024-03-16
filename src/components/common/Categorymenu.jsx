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
    <NavigationMenu className="z-10">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white font-normal text-base px-0">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-10 pb-3">
            <div className="sm:p-4 p-3">
              <ul className="flex flex-wrap sm:flex-nowrap">
                <li className="px-2 text-nowrap pt-1">
                  <span className="text-[14px] uppercase font-bold">
                    Coffee by price point
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4">
                    <li className="sm:pt-2 pt-1 cursor-pointer">Light</li>
                    <li className=" cursor-pointer">Medium</li>
                    <li className=" cursor-pointer">Dark</li>
                  </ul>
                </li>
                <li className="px-2 text-nowrap pt-1">
                  <span className="text-[14px] uppercase font-bold">
                    Roast level
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4">
                    <li className="sm:pt-2 pt-1 cursor-pointer">Light</li>
                    <li className=" cursor-pointer">Medium</li>
                    <li className=" cursor-pointer">Dark</li>
                  </ul>
                </li>
                <li className="px-2 pt-1">
                  <span className="text-[14px] uppercase font-bold">
                    Discover
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4">
                    <li className="sm:pt-2 pt-1 cursor-pointer">Light</li>
                    <li className=" cursor-pointer">Medium</li>
                    <li className=" cursor-pointer">Dark</li>
                  </ul>
                </li>
                <li className="px-2 pt-1">
                  <span className="text-[14px] uppercase font-bold">
                    Country
                  </span>
                  <ul className="text-[14px] font-normal list-disc ps-4">
                    <li className="sm:pt-2 pt-1 cursor-pointer">Light</li>
                    <li className=" cursor-pointer">Medium</li>
                    <li className=" cursor-pointer">Dark</li>
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
