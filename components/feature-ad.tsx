import Container from "./container";
import Image from "next/image";

import featureImg from "@/public/images/img-cover.jpg";
import { Button } from "./ui/button";

const FeatureAd = () => {
  return (
    <Container>
      <div className="bg-gradient-to-r from-blue-700 to-blue-950 text-white p-20 rounded-2xl">
        <h1 className="text-4xl font-bold">Become a pro in 30 days!</h1>
        <p className="mt-2">
          Designed to equip you with the skills and knowledge needed for
          professional success with hands-on experience, and expert guidance.
        </p>
        <div className="flex justify-start items-center gap-3 mt-10">
          <Button variant="outline" className="text-black">
            Get Started
          </Button>
          <Button>Explore Courses</Button>
        </div>
      </div>
    </Container>
  );
};

export default FeatureAd;
