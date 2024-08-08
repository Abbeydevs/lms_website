import Image from "next/image";
import Container from "./container";
import { Button } from "./ui/button";

import heroImg from "@/public/images/hero-img.png";

const Hero = () => {
  return (
    <Container className="flex flex-col lg:flex-row h-auto lg:h-screen justify-center items-center gap-10">
      <div className="w-full lg:w-1/2 pt-16 lg:py-0 flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-bold">
          Transform your Career with JT Careers
        </h1>
        <p className="text-muted-foreground">
          Transform your career this year by joining our career training in
          Business/Product Analysis, Scrum master or Data Governance. Our
          trainig is designed to prepare you for a career in different sectors.
        </p>
        <div className="flex justify-center lg:justify-start items-center gap-2 w-full">
          <Button variant="outline" className="w-1/2 lg:w-1/4 mt-5">
            Get Started
          </Button>
          <Button variant="default" className="w-1/2 lg:w-1/4 mt-5">
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src={heroImg} alt="Hero Image" className="w-full" />
      </div>
    </Container>
  );
};

export default Hero;
