import CarouselImg from "./carousel-img";
import Container from "./container";

const Students = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold w-full lg:w-1/2">
        Our Students have worked in these companies
      </h1>
      <CarouselImg />
    </Container>
  );
};

export default Students;
