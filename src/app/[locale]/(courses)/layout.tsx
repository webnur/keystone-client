import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  const coursesNavData = [
    { name: "Short Courses", link: "/courses/short-courses" },
    { name: "Certificates", link: "/courses/certificates" },
    { name: "Diplomas", link: "/courses/diplomas" },
    { name: "Workshops", link: "/courses/workshops" },
    { name: "Universities", link: "/courses/universities" },
    { name: "Scholarships", link: "/courses/scholarships" },
    { name: "Student resources", link: "/courses/student-resources" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={coursesNavData} activeCategory="courses" />

      {children}
    </div>
  );
};

export default CoursesLayout;
