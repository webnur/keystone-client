"use client";
import React from "react";

interface SidebarProps {
  sections: string[];
}

const LeftSideMenu: React.FC<SidebarProps> = ({ sections }) => {
  return (
    <div className="sticky top-20 w-48 left-4 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
      <div className="space-y-4">
        {sections.map((section) => (
          <button
            key={section}
            className="block w-full p-2 text-left rounded-lg transition-colors duration-300 border-l-4 border-transparent hover:border-red-500 hover:text-red-500"
            onClick={() => {
              const sectionElement = document.getElementById(section);
              sectionElement?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSideMenu;
