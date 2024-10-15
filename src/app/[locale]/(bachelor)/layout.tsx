import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const BachelorLayout = ({ children }: { children: React.ReactNode }) => {
  const bachelorNavData = [
    { name: "Bachelor Degrees", link: "/bachelor/bachelor-degrees" },
    {
      name: "Undergraduate Programs",
      link: "/bachelor/undergraduate-programs",
    },
    { name: "Scholarships", link: "/bachelor/scholarships" },
    { name: "Student Resources", link: "/bachelor/student-resources" },
  ];

  return (
    <div className="">
      <SubHeaderNav navData={bachelorNavData} activeCategory="bachelor" />
      {children}
    </div>
  );
};

export default BachelorLayout;
