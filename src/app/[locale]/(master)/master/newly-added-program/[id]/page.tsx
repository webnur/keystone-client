import React from "react";
import MiddleContent from "./MiddleContent";
import RightSidebar from "./RightSidebar";
import LeftSideBar from "./LeftSidebar";

const Page = () => {
  const sections = [
    "Introduction",
    "Admissions",
    "Curriculum",
    "Program Outcome",
    "About the School",
    "Ask a Question",
  ];

  return (
    <div className="mt-10 flex w-full">
      {/* Left Sidebar */}
      <div className="w-1/6">
        <LeftSideBar sections={sections} />
      </div>

      {/* Middle content */}
      <div className="w-4/6 mx-auto">
        <MiddleContent />
      </div>
      <div className="w-1/6">
      <RightSidebar
        logo="https://i.ibb.co.com/jJRpsgM/4-ahhsql.png"
        institution="Keystone University"
        programId="graduate-school-application-trends"
        programData={{
          title: "Student Application",
          description: "Program description goes here",
          location: "Dhaka University",
          country: "Bangladesh",
          image: "https://i.ibb.co.com/jJRpsgM/4-ahhsql.png",
        }}
      />
      </div>
    </div>
  );
};

export default Page;
