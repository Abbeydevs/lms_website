import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row justify-center items-center gap-20 h-screen lg:h-0",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 w-full text-xl lg:text-sm">
        <Link href="/about">About</Link>
        <Link href="/contact">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-end items-center gap-5 w-auto">
        <Link href="/login">
          <Button variant="outline" className="w-28">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="default" className="w-28">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
