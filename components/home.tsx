import Hero from "./hero";
import Students from "./students";
import CourseList from "./course-list";
import Tutors from "./tutors";
import Feature from "./feature";
import FeatureAd from "./feature-ad";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Students />
      <CourseList />
      <Feature />
      <Tutors />
      <FeatureAd />
    </>
  );
};

export default HomePage;
