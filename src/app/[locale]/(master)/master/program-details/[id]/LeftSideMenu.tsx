"use client";
import React, { useState, useEffect } from "react";

interface SidebarProps {
  sections: string[];
}

const LeftSideMenu: React.FC<SidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    let currentSection = "";
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top;
        if (sectionTop >= 0 && sectionTop <= window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-48 fixed top-34 left-4 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
      <div className="sticky top-24 space-y-4">
        {sections.map((section) => (
          <button
            key={section}
            className={`block w-full p-2 text-left rounded-lg transition-colors duration-300 border-l-4 ${
              activeSection === section ? "border-red-500 font-bold text-red-500" : "border-transparent"
            } hover:text-red-500`}
            onClick={() => handleScrollToSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSideMenu;
