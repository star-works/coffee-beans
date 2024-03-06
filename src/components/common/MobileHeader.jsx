import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, SignUpPeople } from "./Icons";
import Link from "next/link";

const MobileHeader = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center text-white" asChild>
        <Button
          className="h-0  bg-transparent p-0 border-none"
          variant="outline"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black">
        <SheetHeader className="bg-black">
          <div className="flex flex-col items-start h-full gap-5">
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
            <Link
              href="/"
              className="text-base text-white hover:opacity-80 duration-300"
            >
              Sign in
            </Link>
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
