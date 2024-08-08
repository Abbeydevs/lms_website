import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Separator } from "./separator";
import { cn, formatter } from "@/lib/utils";
import { Button } from "./button";

interface TutorCardProps {
  className?: string;
  name: string;
  course: string;
  imgCover: StaticImageData;
}

const TutorCard = ({ className, name, course, imgCover }: TutorCardProps) => {
  return (
    <Card className={cn("overflow-hidden p-3", className)}>
      <Image
        src={imgCover.src}
        alt={imgCover.src}
        width={imgCover.width}
        height={imgCover.height}
        className="rounded-t-lg"
      />
      <CardHeader className="px-0">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{`Field: ${course}`}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TutorCard;
