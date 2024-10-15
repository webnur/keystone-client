import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const PhdLayout = ({ children }: { children: React.ReactNode }) => {
  const navData = [
    { name: "PhD Programs", link: "/phd/phd-programs" },
    { name: "Research Opportunities", link: "/phd/masters-of-science" },
    { name: "Doctoral Studies", link: "/phd/doctoral-studies" },
    { name: "Postdoctoral Positions", link: "/phd/postdoctoral-positions" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={navData} activeCategory="phd" />
      {children}
    </div>
  );
};

export default PhdLayout;
