"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemo } from "./Categorymenu";
import { MainLogo, SignUpPeople } from "./Icons";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <div className="max-w-[1920px] fixed w-full mx-auto  z-10 left-[50%] translate-x-[-50%] ">
        <div className="max-w-[1120px] relative z-10 mx-auto px-3 xl:px-0 pt-4 md:pt-6 ">
          <div className="py-3 md:py-2 px-4 md:px-3 bg-black rounded-[50px] md:rounded-[96px] flex justify-between items-center">
            <div className="flex gap-5 md:gap-10 items-center">
              <div className="absolute z-[10] bg-transparent w-[70px] flex flex-col justify-center">
                <Link
                  href="/"
                  className="text-base text-white duration-300  inline-block"
                >
                  <MainLogo />
                </Link>
              </div>
              <div className="relative z-[1]">
                <NavigationMenuDemo />
              </div>
              <div className="hidden sm:flex gap-5 md:gap-10">
                <Link
                  href="/"
                  className="text-base text-white hover:opacity-80 hover:text-white duration-300"
                >
                  Newly added
                </Link>
                <Link
                  href="/"
                  className="text-base text-white hover:opacity-80 hover:text-white duration-300 "
                >
                  Newsroom
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-5 md:gap-6">
              <Link
                href="/"
                className="text-base text-white hover:opacity-80 duration-300 hover:text-white"
              >
                Sign in
              </Link>{" "}
              <Button
                variant="outline"
                className="text-base bg-white flex items-center border border-transparent hover:border-white hover:bg-transparent hover:opacity-80 hover:text-white group gap-2  py-3 px-5 rounded-3xl active:scale-[.9] transition-all duration-300 ease-in-out"
              >
                <span>
                  <SignUpPeople />
                </span>
                Sign up
              </Button>
            </div>
            <div className="sm:hidden cursor-pointer">
              <MobileHeader />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
