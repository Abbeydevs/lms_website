import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

import amazon from "@/public/images/amazon.svg";
import apple from "@/public/images/apple.png";
import google from "@/public/images/google.png";
import ibm from "@/public/images/ibm.png";
import microsoft from "@/public/images/microsoft.png";
import netflix from "@/public/images/netflix.jpg";

const companyImages = [
  {
    id: 1,
    img: amazon,
    alt: "Amazon",
  },
  {
    id: 2,
    img: apple,
    alt: "Apple",
  },
  {
    id: 3,
    img: google,
    alt: "Google",
  },
  {
    id: 4,
    img: ibm,
    alt: "IBM",
  },
  {
    id: 5,
    img: microsoft,
    alt: "Microsoft",
  },
  {
    id: 6,
    img: netflix,
    alt: "Netflix",
  },
];

const CarouselImg = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {companyImages.map((cimg) => (
          <CarouselItem key={cimg.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-0">
              <Card className="border-0 shadow-none p-0">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={cimg.img}
                    alt={cimg.alt}
                    className="w-full lg:w-[100px]"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselImg;
