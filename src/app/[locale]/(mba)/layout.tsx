import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const MbaLayout = ({ children }: { children: React.ReactNode }) => {
  const mbaNavData = [
    { name: "MBA Programs", link: "/mba/mba-programs" },
    { name: "Executive MBA", link: "/mba/mba-executive" },
    { name: "Part-time MBA", link: "/mba/part-time-mba" },
    { name: "Online MBA", link: "/mba/mba-online" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={mbaNavData} activeCategory="mba" />
      {children}
    </div>
  );
};

export default MbaLayout;