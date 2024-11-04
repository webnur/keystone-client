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
    <aside className="hidden md:block py-6 bg-white border border-gray-300 w-52 mx-8 shadow-lg rounded-lg">
      <ul className="space-y-6">
        <li
          className={`${
            activeSection === "Study in United Kingdom"
              ? "border-l-4 border-red-600 bg-red-50"
              : "border-l-4 border-transparent"
          }`}
        >
          <a
            onClick={() => handleClick("Study in United Kingdom")}
            className={`block text-lg font-medium cursor-pointer ${
              activeSection === "Study in United Kingdom"
                ? "text-red-600"
                : "text-gray-700"
            } transition-all pl-4`}
          >
Study in United Kingdom
</a>
</li>
<li
className={`${
  activeSection === "Cost of Living"
    ? "border-l-4 border-red-600 bg-red-50"
    : "border-l-4 border-transparent"
}`}
>
<a
  onClick={() => handleClick("Cost of Living")}
  className={`block text-lg font-medium cursor-pointer ${
    activeSection === "Cost of Living"
      ? "text-red-600"
      : "text-gray-700"
  } transition-all pl-4`}
>
  Cost of Living
</a>
</li>
<li
className={`${
  activeSection === "Visa Requirements"
    ? "border-l-4 border-red-600 bg-red-50"
    : "border-l-4 border-transparent"
}`}
>
<a
  onClick={() => handleClick("Visa Requirements")}
  className={`block text-lg font-medium cursor-pointer ${
    activeSection === "Visa Requirements"
      ? "text-red-600"
      : "text-gray-700"
  } transition-all pl-4`}
>
  Visa Requirements
</a>
</li>
<li
className={`${
  activeSection === "About Country"
    ? "border-l-4 border-red-600 bg-red-50"
    : "border-l-4 border-transparent"
}`}
>
<a
  onClick={() => handleClick("About Country")}
  className={`block text-lg font-medium cursor-pointer ${
    activeSection === "About Country"
      ? "text-red-600"
      : "text-gray-700"
  } transition-all pl-4`}
>
  About Country
</a>
</li>
<li
className={`${
  activeSection === "Institutions"
    ? "border-l-4 border-red-600 bg-red-50"
    : "border-l-4 border-transparent"
}`}
>
<a
  onClick={() => handleClick("Institutions")}
  className={`block text-lg font-medium cursor-pointer ${
    activeSection === "Institutions"
      ? "text-red-600"
      : "text-gray-700"
  } transition-all pl-4`}
>
  Institutions
</a>
</li>
<li
className={`${
  activeSection === "Programs"
    ? "border-l-4 border-red-600 bg-red-50"
    : "border-l-4 border-transparent"
}`}
>
<a
  onClick={() => handleClick("Programs")}
  className={`block text-lg font-medium cursor-pointer ${
    activeSection === "Programs"
      ? "text-red-600"
      : "text-gray-700"
  } transition-all pl-4`}
>
  Programs
</a>
</li>
</ul>
</aside>
);
};

export default Sidebar;
