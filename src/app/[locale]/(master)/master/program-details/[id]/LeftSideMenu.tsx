"use client";
import React, { useState, useEffect } from "react";

interface SidebarProps {
  sections: string[];
}

const LeftSideMenu: React.FC<SidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isFixed, setIsFixed] = useState<boolean>(true);

  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    let currentSection = "";
    const pageBottom = document.documentElement.scrollHeight - window.innerHeight;

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top;
        if (sectionTop >= 500 && sectionTop <= window.innerHeight / 20) {
          currentSection = sectionId;
        }
      }
    });

    setActiveSection(currentSection);
    setIsFixed(window.scrollY < pageBottom - 30); // Adjust this threshold as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-48 ${
        isFixed ? "fixed top-34" : "absolute"
      } left-4 bg-white border border-gray-300 shadow-lg rounded-lg p-4 transition-all duration-500 ease-in-out`}
      style={{ transition: "top 0.5s ease, position 0.5s ease" }}
    >
      <div className="space-y-4">
        {sections.map((section) => (
          <button
            key={section}
            className={`block w-full p-2 text-left rounded-lg transition-colors duration-300 border-l-4 ${
              activeSection === section
                ? "border-red-500 font-bold text-red-500"
                : "border-transparent"
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
