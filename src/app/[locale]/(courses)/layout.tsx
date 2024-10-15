import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  const coursesNavData = [
    { name: "Short Courses", link: "/courses/short-courses" },
    { name: "Certificates", link: "/courses/certificates" },
    { name: "Diplomas", link: "/courses/diplomas" },
    { name: "Workshops", link: "/courses/workshops" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={coursesNavData} activeCategory="courses" />

      {children}
    </div>
  );
};

export default CoursesLayout;
