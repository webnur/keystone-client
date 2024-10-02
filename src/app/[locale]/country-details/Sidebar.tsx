"use client";
import React from "react";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="py-8 bg-white border-r border-gray-300">
      <ul className="space-y-4">
        <li
          className={`${
            activeSection === "Study in United Kingdom"
              ? "border-l-2 border-red-600"
              : ""
          }`}
        >
          <a
            onClick={() => handleClick("Study in United Kingdom")}
            className={`block text-lg font-semibold cursor-pointer ${
              activeSection === "Study in United Kingdom"
                ? "text-red-500"
                : "text-gray-800"
            } transition pl-4`}
          >
            Study in United Kingdom
          </a>
        </li>
        <li
          className={`${
            activeSection === "Cost of Living"
              ? "border-l-2 border-red-600"
              : ""
          }`}
        >
          <a
            onClick={() => handleClick("Cost of Living")}
            className={`block text-lg font-semibold cursor-pointer ${
              activeSection === "Cost of Living"
                ? "text-red-500"
                : "text-gray-800"
            } transition pl-4`}
          >
            Cost of Living
          </a>
        </li>
        <li
          className={`${
            activeSection === "Visa Requirements"
              ? "border-l-2 border-red-600"
              : ""
          }`}
        >
          <a
            onClick={() => handleClick("Visa Requirements")}
            className={`block text-lg font-semibold cursor-pointer ${
              activeSection === "Visa Requirements"
                ? "text-red-500"
                : "text-gray-800"
            } transition pl-4`}
          >
            Visa Requirements
          </a>
        </li>
        <li
          className={`${
            activeSection === "About Country"
              ? "border-l-2 border-red-600"
              : ""
          }`}
        >
          <a
            onClick={() => handleClick("About Country")}
            className={`block text-lg font-semibold cursor-pointer ${
              activeSection === "About Country"
                ? "text-red-500"
                : "text-gray-800"
            } transition pl-4`}
          >
            About Country
          </a>
        </li>
        <li
          className={`${
            activeSection === "Institutions"
              ? "border-l-2 border-red-600"
              : ""
          }`}
        >
          <a
            onClick={() => handleClick("Institutions")}
            className={`block text-lg font-semibold cursor-pointer ${
              activeSection === "Institutions"
                ? "text-red-500"
                : "text-gray-800"
            } transition pl-4`}
          >
            Institutions
          </a>
        </li>
        <li
          className={`${
            activeSection === "Programs"
              ? "border-l-2 border-red-600"
              : ""
          }`}
        >
          <a
            onClick={() => handleClick("Programs")}
            className={`block text-lg font-semibold cursor-pointer ${
              activeSection === "Programs"
                ? "text-red-500"
                : "text-gray-800"
            } transition pl-4`}
          >
            Programs
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
