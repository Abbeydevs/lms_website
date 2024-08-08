import Container from "./container";
import CourseCard from "./ui/course-card";
import TutorCard from "./ui/tutor-card";

import tutor1 from "@/public/images/tutor1.jpg";
import tutor2 from "@/public/images/tutor2.jpg";
import tutor3 from "@/public/images/tutor3.jpg";
import tutor4 from "@/public/images/tutor4.jpg";
import tutor5 from "@/public/images/tutor5.jpg";
import tutor6 from "@/public/images/tutor6.jpg";
import tutor7 from "@/public/images/tutor7.jpg";

const tutors = [
  {
    name: "Adewuyi Makelele",
    imgCover: tutor1,
    description: "Scrum Master",
  },
  {
    name: "Frank Lampard",
    imgCover: tutor2,
    description: "Scrum Master",
  },
  {
    name: "Stephanie Mokoto Yu",
    imgCover: tutor3,
    description: "Data Governance",
  },
  {
    name: "Lois Edwards",
    imgCover: tutor4,
    description: "Scrum Master",
  },
  {
    name: "Ayo Micheal",
    imgCover: tutor5,
    description: "Business Analysis",
  },
  {
    name: "Sharon Stone",
    imgCover: tutor6,
    description: "Product Analysis",
  },
  {
    name: "Micheal Ballack",
    imgCover: tutor7,
    description: "Product Analysis",
  },
];

const Tutors = () => {
  return (
    <Container className="bg-black">
      <h1 className="text-3xl font-bold text-white ">Our Tutors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {tutors.map((tutor) => (
          <TutorCard
            name={tutor.name}
            course={tutor.description}
            imgCover={tutor.imgCover}
          />
        ))}
      </div>
    </Container>
  );
};

export default Tutors;
