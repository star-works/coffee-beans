"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CategorySelect } from "./AllSelect";
import { MainLogo, SignUpPeople } from "./Icons";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <div className="max-w-[1920px] relative mx-auto overflow-hidden">
        <Image
          className="absolute z-[-1] hidden md:flex top-0 start-0"
          height={400}
          width={250}
          src="/assets/images/webp/header_top_start_img_bean.webp"
          alt="image"
        />
        <Image
          className="absolute z-[-1] hidden md:flex -bottom-5 lg:bottom-0 end-[-5%] lg:end-0"
          height={400}
          width={250}
          src="/assets/images/webp/header_bottom_end_img_bean.webp"
          alt="image"
        />
        <div className="max-w-[1120px] relative z-10 mx-auto px-3 xl:px-0 pt-4 md:pt-6">
          <div className="py-3 md:py-5 px-4 md:px-6 bg-black rounded-[50px] md:rounded-[96px] flex justify-between items-center">
            <div className="flex gap-5 md:gap-10 items-center">
              <Link
                href="/"
                className="text-base text-white hover:opacity-80 duration-300"
              >
                <MainLogo />
              </Link>
              <CategorySelect />
              <div className="hidden sm:flex gap-5 md:gap-10">
                <Link
                  href="/"
                  className="text-base text-white hover:opacity-80 duration-300"
                >
                  Newly added
                </Link>
                <Link
                  href="/"
                  className="text-base text-white hover:opacity-80 duration-300"
                >
                  Newsroom
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-5 md:gap-6">
              <Link
                href="/"
                className="text-base text-white hover:opacity-80 duration-300"
              >
                Sign in
              </Link>{" "}
              <Button
                variant="outline"
                className="text-base bg-white flex items-center border border-transparent hover:border-white hover:bg-transparent hover:opacity-80 hover:text-white group gap-2 duration-300 py-3 px-5 rounded-3xl"
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
