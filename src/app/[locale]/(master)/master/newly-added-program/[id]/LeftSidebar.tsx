"use client";
import React, { useState, useEffect } from "react";

interface SidebarProps {
  sections: string[]; // Array of section IDs or titles
}

const LeftSideBar: React.FC<SidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Function to handle scrolling to section when clicking the menu item
  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to determine the currently visible section
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

  // Attach scroll event listener to detect visible sections
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-48 mx-4 fixed top-46 mb-12">
      {/* Sticky positioned wrapper */}
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg">
        {/* Scrollable content within the sticky sidebar */}
        <div className="overflow-y-auto max-h-[60vh] space-y-4">
          {sections.map((section) => (
            <button
              key={section}
              className={`block w-full p-2 text-center rounded-lg transition-colors duration-300 border-l-4 border-transparent ${
                activeSection === section ? "font-bold" : "font-bold"
              }`}
              onClick={() => handleScrollToSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
