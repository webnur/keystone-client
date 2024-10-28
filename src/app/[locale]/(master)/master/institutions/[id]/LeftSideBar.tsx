"use client";
import React from "react";

interface SidebarProps {
  activeSection: string;
}

const LeftSidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    "Study in United Kingdom",
    "Cost of Living",
    "Visa Requirements",
    "About Country",
    "Institutions",
    "Programs",
  ];

  return (
    <aside className="py-8 bg-white border-r border-gray-300 w-1/6">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li
            key={section}
            className={`${
              activeSection === section ? "border-l-2 border-red-600" : ""
            }`}
          >
            <a
              onClick={() => handleClick(section)}
              className={`block text-lg font-semibold cursor-pointer ${
                activeSection === section ? "text-red-500" : "text-gray-800"
              } transition pl-4`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
