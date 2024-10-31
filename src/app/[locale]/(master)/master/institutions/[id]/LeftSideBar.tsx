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
    "Introduction",
    "Gallery",
    "Admissions",
    "Scholarships and Funding",
    "Rankings",
    "Accreditations",
    "Locations",
    "Programs",
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen bg-gray-50 border-r border-gray-300 w-1/4 p-6">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              onClick={() => handleClick(section)}
              className={`block text-lg font-semibold cursor-pointer transition-colors duration-200 pl-4 ${
                activeSection === section
                  ? "text-red-500 border-l-4 border-red-500 bg-gray-100"
                  : "text-gray-700 hover:text-red-500"
              }`}
              style={{
                paddingLeft: activeSection === section ? "16px" : "20px",
                transition: "padding-left 0.2s ease-in-out",
              }}
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
