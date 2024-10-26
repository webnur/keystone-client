import SubHeaderNav from "@/components/home/SubHeaderNav";
import React from "react";

const LawLayout = ({ children }: { children: React.ReactNode }) => {
  const lawNavData = [
    { name: "Law Degrees", link: "/law/law-degrees" },
    { name: "LLM Programs", link: "/law/llm-programs" },
    { name: "JD Programs", link: "/law/jd-programs" },
    { name: "Legal Studies", link: "/law/legal-studies" },
    { name: "Bar Exam Prep", link: "/law/bar-exam-prep" },
    { name: "Universities", link: "/law/universities" },
    { name: "Scholarships", link: "/law/scholarships" },
    { name: "Student resources", link: "/law/student-resources" },
  ];
  return (
    <div className="">
      <SubHeaderNav navData={lawNavData} activeCategory="law" />
      {children}
    </div>
  );
};

export default LawLayout;
