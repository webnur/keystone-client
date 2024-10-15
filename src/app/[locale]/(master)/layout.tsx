import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  // Master category navigation data
  const masterNavData = [
    { name: "Master Degrees", link: "/master/masters-degrees" },
    { name: "Masters of Science", link: "/master/masters-of-science" },
    { name: "Masters of Arts", link: "/master/masters-of-arts" },
    { name: "Universities", link: "/master/universities" },
    { name: "Scholarships", link: "/master/scholarships" },
    { name: "Student Resources", link: "/master/student-resources" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={masterNavData} activeCategory="master" />
      {children}
    </div>
  );
};

export default MasterLayout;
