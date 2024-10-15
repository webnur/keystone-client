import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const onlineNavData = [
    { name: "Online Degrees", link: "/online/online-degrees" },
    { name: "Distance Learning", link: "/online/distance-learning" },
    { name: "Virtual Classrooms", link: "/online/virtual-classrooms" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={onlineNavData} activeCategory="online" />

      {children}
    </div>
  );
};

export default Layout;
