import Container from "./container";
import Image from "next/image";

import featureImg from "@/public/images/img-cover.jpg";
import { Button } from "./ui/button";

const Feature = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold w-full lg:w-1/2 text-blue-700">
        Hands-on workshops, simulations, and expert-led sessions.
      </h1>
      <p className="text-muted-foreground">
        At The JT Careers Solutions we offer an opportunity for individuals, at
        all stages of their careers to enhance their skills and advance in the
        dynamic field of IT. Choosing to join us goes beyond enrolling in an IT
        training program; it signifies a step towards securing your future in
        the tech industry. Our commitment to excellence, innovative teaching
        methods and supportive learning environment set us apart as the choice
        for your IT education. Here are some key reasons why we stand out;
      </p>
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <Image
          src={featureImg}
          alt="Feature Image"
          className="w-full lg:w-1/2 rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-700 mb-5">
            We care about you!
          </h1>
          <p className="text-muted-foreground">
            What sets JT Career Solutions apart is the quality of our
            instructors. With experience they bring an understanding of industry
            standards and the latest technological trends. Their practical
            experience in delivery overseeing portfolios and navigating
            landscapes ensures that our training remains relevant and up to
            date.
          </p>
          <p className="text-muted-foreground">
            Our philosophy revolves around hands on learning. Our courses focus
            on tasks, work experience and case studies that mirror scenarios
            allowing students to apply theoretical knowledge in practical
            settings. This methodology not only enhances problem solving skills
            it also prepares students, for the real-world challenges they will
            face in their future careers.
          </p>
          <div className="flex gap-3 mt-5">
            <Button variant="outline" className="">
              Get Started
            </Button>
            <Button>Explore Courses</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Feature;
