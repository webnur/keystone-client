"use client";
import { useState } from "react";
import SubBanner from "@/components/common/SubBanner";
import React from "react";
import MasterWhereToStudy from "../components/MasterWhereToStudy";

const page = () => {
  const [openDropdown, setOpenDropdown] = useState({
    africa: false,
    asia: false,
  });

  // Toggle dropdowns
  const toggleDropdown = (continent) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [continent]: !prev[continent],
    }));
  };

  // Sample data
  const countries = {
    africa: ["South Africa", "Nigeria", "Kenya"],
    asia: [
      "Azerbaijan",
      "Bahrain",
      "China",
      "India",
      "Indonesia",
      "Israel",
      "Japan",
      "Kazakhstan",
      "Kuwait",
      "Lebanon",
      "Malaysia",
      "Myanmar",
      "Oman",
      "Philippines",
      "Qatar",
      "Saudi Arabia",
      "South Korea",
      "Thailand",
      "United Arab Emirates",
    ],
  };
  // Mock data for WhereToStudy locations (now with id)
  const mockLocations = [
    {
      id: "uk",
      name: "United Kingdom",
      image: "https://i.ibb.co.com/txH8qMm/ezgif-3-c99bcf9998.jpg",
    },
    {
      id: "usa",
      name: "USA",
      image: "https://i.ibb.co.com/3FGPY8X/124334-shutterstock-244469683.jpg",
    },
    {
      id: "canada",
      name: "Canada",
      image: "https://i.ibb.co.com/n34cmjB/110845-shutterstock-255015211.jpg",
    },
    {
      id: "germany",
      name: "Germany",
      image: "https://i.ibb.co.com/bRC2BGf/62089-germany.jpg",
    },
    {
      id: "italy",
      name: "Italy",
      image: "https://i.ibb.co.com/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    {
      id: "france",
      name: "France",
      image: "https://i.ibb.co.com/T4J8cfx/61809-france.jpg",
    },
    {
      id: "spain",
      name: "Spain",
      image: "https://i.ibb.co.com/X8nsYJc/110855-shutterstock-377505535.jpg",
    },
    {
      id: "belgium",
      name: "Belgium",
      image: "https://i.ibb.co.com/2tdMcTC/61795-belgium.jpg",
    },
    {
      id: "japan",
      name: "Japan",
      image: "https://i.ibb.co.com/G243xM9/62094-japan.jpg",
    },
  ];
  return (
    <div className="">
      <SubBanner
        backgroundImage="https://i.ibb.co.com/hLRLbdr/compare-program.jpg"
        title="Study Locations"
        slogan="We have more than a thousand universities from around the world in our database."
        className="h-[300px]"
        titleClass="py-8"
        slogalClass=""
      />
      <MasterWhereToStudy
        title="Most Popular Countries"
        locations={mockLocations}
      />
      <div className="p-6 max-w-3xl mx-auto">
        {/* Africa Dropdown */}
        <div className="mb-6">
          <button
            onClick={() => toggleDropdown("africa")}
            className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
          >
            Africa
            <span>
              {openDropdown.africa ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          </button>
          {openDropdown.africa && (
            <div className="p-4">
              {countries.africa.map((country, index) => (
                <p key={index} className="text-red-600 py-1">
                  {country}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Asia Dropdown */}
        <div className="mb-6">
          <button
            onClick={() => toggleDropdown("asia")}
            className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
          >
            Asia
            <span>
              {openDropdown.asia ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          </button>
          {openDropdown.asia && (
            <div className="p-4 grid grid-cols-3 gap-4">
              {countries.asia.map((country, index) => (
                <p key={index} className="text-red-600 py-1">
                  {country}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
