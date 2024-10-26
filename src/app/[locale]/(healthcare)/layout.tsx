import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const healthcareNavData = [
    { name: "Healthcare Degrees", link: "/healthcare/healthcare-degrees" },
    { name: "Nursing Programs", link: "/healthcare/nursing-programs" },
    { name: "Medical Studies", link: "/healthcare/medical-studies" },
    {
      name: "Healthcare Management",
      link: "/healthcare/healthcare-management",
    },
    { name: "Universities", link: "/healthcare/universities" },
    { name: "Scholarships", link: "/healthcare/scholarships" },
    { name: "Student resources", link: "/healthcare/student-resources" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={healthcareNavData} activeCategory="healthcare" />

      {children}
    </div>
  );
};

export default Layout;
