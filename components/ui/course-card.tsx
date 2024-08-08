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

interface CourseCardProps {
  className?: string;
  name: string;
  description: string;
  imgCover: StaticImageData;
  price: number;
}

const CourseCard = ({
  className,
  name,
  description,
  imgCover,
  price,
}: CourseCardProps) => {
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
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <Separator />
      <CardFooter className="px-0 flex justify-between items-center pb-0 pt-5">
        <p>{formatter.format(price)}</p>
        <Button>Enrol now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
