"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

// Sub-navigation data for each main category
const navData: Record<string, string[]> = {
  master: [
    "Master Degrees",
    "Masters of Science",
    "Masters of Arts",
    "Universities",
    "Scholarships",
    "Student Resources",
  ],
  phd: [
    "PhD Programs",
    "Research Opportunities",
    "Doctoral Studies",
    "Postdoctoral Positions",
  ],
  law: [
    "Law Degrees",
    "LLM Programs",
    "JD Programs",
    "Legal Studies",
    "Bar Exam Prep",
  ],
  bachelor: [
    "Bachelor Degrees",
    "Undergraduate Programs",
    "Scholarships",
    "Student Resources",
  ],
  mba: ["MBA Programs", "Executive MBA", "Part-time MBA", "Online MBA"],
  healthcare: [
    "Healthcare Degrees",
    "Nursing Programs",
    "Medical Studies",
    "Healthcare Management",
  ],
  courses: ["Short Courses", "Certificates", "Diplomas", "Workshops"],
  online: ["Online Degrees", "Distance Learning", "Virtual Classrooms"],
};

const SubHeaderNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("master");
  const router = useRouter();
  const pathname = usePathname();

  // Sync the activeCategory with the current path
  useEffect(() => {
    const path = pathname?.split("/")[1]; // Extract category from the URL path
    if (path && Object.keys(navData).includes(path)) {
      setActiveCategory(path);
    } else {
      setActiveCategory("master"); // Default to master if no matching path is found
    }
  }, [pathname]);

  const handleCategoryClick = (category: string) => {
    // Navigate to the respective page for the selected category
    router.push(`/${category}`);
  };

  return (
    <div className="subheader-container">
      {/* Main navigation for categories */}
      <nav className="flex justify-left py-3 border-b border-gray-200 w-11/12 mx-auto">
        {Object.keys(navData).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 ${
              activeCategory === category ? "text-red-600 font-bold" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </nav>

      {/* Sub-navigation for the active category */}
      <div className="bg-foreground">
        <div className="subnav w-11/12 mx-auto py-3 px-4">
          <div className="flex justify-left space-x-4">
            {navData[activeCategory]?.map((subNavItem, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:underline"
              >
                {subNavItem}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderNav;
