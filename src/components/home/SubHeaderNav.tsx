"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

type NavData = {
  name: string;
  link: string;
};

type SubHeaderNavProps = {
  navData?: NavData[]; // Mark as optional to prevent runtime errors
  activeCategory: string; // The active category, e.g., 'phd' or 'bachelor'
};

const SubHeaderNav: React.FC<SubHeaderNavProps> = ({
  navData = [],
  activeCategory,
}) => {
  const router = useRouter();
  // const pathname = usePathname();

  // useEffect(() => {
  //   const path = pathname?.split("/")[1];
  //   if (path && activeCategory !== path) {

  //   }
  // }, [pathname, activeCategory]);

  // const handleCategoryClick = (category: string) => {
  //   router.push(`/${category}`); // Navigate to the selected category's path
  // };

  return (
    <div className="subheader-container">
      {/* Main navigation for categories */}
      {/* <nav className="flex justify-left py-3 border-b border-gray-200 w-11/12 mx-auto">
        <button
          className={`px-4 py-2 ${
            activeCategory === "master" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("master")}
        >
          Master
        </button>

        <button
          className={`px-4 py-2 ${
            activeCategory === "phd" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("phd")}
        >
          PhD
        </button>

        <button
          className={`px-4 py-2 ${
            activeCategory === "law" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("law")}
        >
          Law
        </button>

        <button
          className={`px-4 py-2 ${
            activeCategory === "bachelor" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("bachelor")}
        >
          Bachelor
        </button>
        <button
          className={`px-4 py-2 ${
            activeCategory === "mba" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("mba")}
        >
          Mba
        </button>
        <button
          className={`px-4 py-2 ${
            activeCategory === "healthcare" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("healthcare")}
        >
          Healthcare
        </button>
        <button
          className={`px-4 py-2 ${
            activeCategory === "courses" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("courses")}
        >
          Courses
        </button>
        <button
          className={`px-4 py-2 ${
            activeCategory === "online" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handleCategoryClick("online")}
        >
          Online
        </button>
      </nav> */}

      <nav className="flex justify-left py-3 border-b border-gray-200 w-11/12 mx-auto">
        <Link
          href="/master"
          className={`px-4 py-2 ${
            activeCategory === "master" ? "text-red-600 font-bold" : ""
          }`}
        >
          Master
        </Link>

        <Link
          href="/phd"
          className={`px-4 py-2 ${
            activeCategory === "phd" ? "text-red-600 font-bold" : ""
          }`}
        >
          PhD
        </Link>

        <Link
          href="/law"
          className={`px-4 py-2 ${
            activeCategory === "law" ? "text-red-600 font-bold" : ""
          }`}
        >
          Law
        </Link>

        <Link
          href="/bachelor"
          className={`px-4 py-2 ${
            activeCategory === "bachelor" ? "text-red-600 font-bold" : ""
          }`}
        >
          Bachelor
        </Link>

        <Link
          href="/mba"
          className={`px-4 py-2 ${
            activeCategory === "mba" ? "text-red-600 font-bold" : ""
          }`}
        >
          MBA
        </Link>

        <Link
          href="/healthcare"
          className={`px-4 py-2 ${
            activeCategory === "healthcare" ? "text-red-600 font-bold" : ""
          }`}
        >
          Healthcare
        </Link>

        <Link
          href="/courses"
          className={`px-4 py-2 ${
            activeCategory === "courses" ? "text-red-600 font-bold" : ""
          }`}
        >
          Courses
        </Link>

        <Link
          href="/online"
          className={`px-4 py-2 ${
            activeCategory === "online" ? "text-red-600 font-bold" : ""
          }`}
        >
          Online
        </Link>
      </nav>

      {/* Sub-navigation for the active category */}
      <div className="bg-foreground">
        <div className="subnav w-11/12 mx-auto py-3 px-4">
          <div className="flex justify-left space-x-4">
            {navData.length > 0 ? (
              navData.map((subNavItem, index) => (
                <Link
                  key={index}
                  href={subNavItem.link} // Use the correct link for each sub-item
                  className="text-white hover:underline"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior
                    router.push(subNavItem.link); // Navigate to the sub-item link
                  }}
                >
                  {subNavItem.name}
                </Link>
              ))
            ) : (
              <p>No sub-navigation available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderNav;
