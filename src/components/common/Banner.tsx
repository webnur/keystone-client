"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface BannerWithDropdownProps {
  backgroundImage: string;
  title: string;
  studyFields: string[];
}

const BannerWithDropdown: React.FC<BannerWithDropdownProps> = ({
  backgroundImage,
  title,
  studyFields,
}) => {
  const [selectedField, setSelectedField] = useState("");
  const [location, setLocation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFieldSelect = (field: string) => {
    setSelectedField(field);
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    const searchData = { field: selectedField, location };
    localStorage.setItem("searchData", JSON.stringify(searchData));
  };

  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center py-16 p-2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-foreground bg-opacity-70 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 w-full container mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] font-bold mb-4 max-w-4xl mx-auto text-center">
          {title}
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2">
          <div className="relative w-full md:w-4/6 my-6">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-3 bg-white border border-gray-300 rounded-lg w-full text-left font-semibold text-gray-500 text-sm sm:text-base"
            >
              {selectedField || "What do you want to study?"}
              <span className="float-right">
                <svg
                  className="w-5 h-5 text-gray-500 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-48 overflow-y-auto">
                {studyFields.map((field, index) => (
                  <div
                    key={index}
                    onClick={() => handleFieldSelect(field)}
                    className="px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-100"
                  >
                    {field}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Where do you want to study?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-3 rounded-lg w-full md:w-1/2 outline-none bg-white border border-gray-300 text-sm sm:text-base"
          />

          {/* Link Component for Navigation */}
          <Link href="/master/discover-program">
            <button
              onClick={handleSearch} // Trigger the data storage before navigation
              className="bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg w-full md:w-auto text-sm sm:text-base"
            >
              Search
            </button>
          </Link>
        </div>

        <div className="py-5">
          <p className="text-white text-center text-sm sm:text-base">Or</p>
        </div>

        <div className="mt-4 text-center">
          <button className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base">
            Browse Fields of Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerWithDropdown;
