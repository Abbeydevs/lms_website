import imgCover from "@/public/images/img-cover.jpg";
import CourseCard from "./ui/course-card";
import Container from "./container";

const courses = [
  {
    name: "Scrum Master",
    imgCover: imgCover,
    description: "Learn the fundamentals of Scrum methodology.",
    price: 200,
  },
  {
    name: "Business Analysis",
    imgCover: imgCover, // Replace with a different image
    description: "Master the skills of business analysis.",
    price: 550,
  },
  {
    name: "Data Governance",
    imgCover: imgCover, // Replace with a different image
    description: "Master the skills of business analysis.",
    price: 300,
  },
  {
    name: "Product Analysis",
    imgCover: imgCover, // Replace with a different image
    description: "Master the skills of business analysis.",
    price: 600,
  },
];

const CourseList = () => {
  return (
    <Container className="bg-blue-50">
      <h1 className="text-3xl font-bold">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {courses.map((course) => (
          <CourseCard
            key={course.name}
            name={course.name}
            imgCover={course.imgCover}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default CourseList;
