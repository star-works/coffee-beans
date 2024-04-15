import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { blogData } from "../common/Helper";
import { CalenderIcon } from "../common/Icons";
import { Badge } from "@/components/ui/badge";
import BlogCard from "./BlogCard";
import Link from "next/link";

const LatestBlog = () => {
  return (
    <div className="max-w-[1120px] mx-auto px-3 xl:px-0 py-12 sm:py-16 md:py-20">
      <h2 className="text-center font-medium sm:text-3xl text-3xl md:text-[40px]  text-DarkBlack mb-5 sm:mb-8 lg:mb-12">
        Latest <span className="font-extrabold text-lightRed">Blog </span>
        posts
      </h2>
      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10">
        <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 xl:pe-3 flex gap-6 md:gap-10 flex-col ">
          {blogData.map((value, i) => {
            return <BlogCard key={i} value={value} />;
          })}
        </div>
        <div className="md:w-5/12 lg:w-6/12 xl:w-7/12 hidden xl:-ms-3 md:flex">
          <Link href="#">
            <Card className="p-0 bg-white group transition-all duration-300 cursor-pointer">
              <CardHeader className="relative w-full">
                <Badge className="absolute py-2 px-4 text-xs left-4 top-4 font-semibold hover:bg-opacity-90 duration-300 hover:bg-white bg-white text-[#090909] uppercase z-10">
                  Coffee
                </Badge>
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    className="w-full rounded-[20px] !m-0 group-hover:scale-[1.1] transition-all duration-300 cursor-pointer"
                    height={315}
                    width={640}
                    src="/assets/images/webp/blog_img_main.webp"
                    alt="images blog"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col mt-4 p-0">
                <p className="text-[#b5b5b5] text-sm pt-3 sm:pt-0 lg:leading-[18px] text-center sm:text-start flex gap-[6px] justify-center sm:justify-start">
                  <span>
                    <CalenderIcon />
                  </span>
                  September 18, 20230
                </p>
                <CardTitle className="!mt-4 text-base font-semibold text-[#090909]">
                  How To Make Chemex Coffee
                </CardTitle>
                <CardDescription className="!mt-2 text-sm font-light text-[#090909] ">
                  Pour over coffee sounds complicated, but this coffee brewing
                  process is surprisingly simple and the results can be amazing
                  with just a little practice. If you drink a single cup each
                  morning, or want to try different types of coffee, making pour
                  over coffee can be even easier than setting up your home
                  coffee machine (bonus — cleanup takes seconds). And because
                  you’re in control of factors like water temperature and brew
                  time, you can expect amazing flavor in the finished cup.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
