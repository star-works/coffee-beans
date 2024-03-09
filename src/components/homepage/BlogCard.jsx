import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalenderIcon } from "../common/Icons";
const BlogCard = ({ value }) => {
  return (
    <Card
      className={`flex flex-col sm:flex-row items-center p-0 gap-3 sm:gap-6 md:gap-3 lg:gap-6 bg-white ${value.blogclass}`}
    >
      <CardHeader className="relative m-0 md:min-w-[150px] min-w-[120px] sm:min-w-[170px] lg:min-w-[170px]">
        <Badge className="absolute py-2 px-4 text-xs left-2 top-2 font-semibold hover:bg-opacity-90 duration-300 hover:bg-white bg-white text-[#090909] uppercase">
          {value.badge}
        </Badge>
        <Image
          className="w-[470px] h-[200px] object-cover sm:w-[170px] rounded-[20px] !m-0 sm:h-[134px]"
          height={134}
          width={170}
          src={value.image}
          alt="images blog"
        />
      </CardHeader>
      <CardContent className="flex flex-col p-0">
        <p className="text-[#b5b5b5] text-sm justify-center sm:justify-start lg:leading-[18px] flex gap-[6px]">
          <span>
            <CalenderIcon />
          </span>
          {value.blogDate}
        </p>
        <CardTitle className="!mt-2 text-base font-semibold text-[#090909] text-center sm:text-start">
          {value.title}
        </CardTitle>
        <CardDescription className="!mt-1 text-sm font-light text-[#090909] text-center sm:text-start">
          {value.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
