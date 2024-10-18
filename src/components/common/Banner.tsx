"use client";
import React, { useState } from "react";

interface BannerWithDropdownProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  backgroundImage: any;
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
  const clearSelection = () => {
    setSelectedField("");
  };

  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center py-[4rem] p-2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-foreground bg-opacity-70 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 w-full container mx-auto text-center">
        <h1 className="text-white text-[2.5rem] font-bold mb-4 max-w-4xl mx-auto">
          {title}
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2">
          <div className="relative w-full md:w-4/6 my-6">
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="appearance-none px-4 py-3 rounded-lg w-full outline-none bg-background border border-gray-300 pr-10"
            >
              <option value="" disabled>
                Select a field of study
              </option>
              {studyFields.map((field, index) => (
                <option key={index} value={field}>
                  {field}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 top-2 bottom-2 pointer-events-none border-l border-gray-300">
              <svg
                className="w-5 h-5 text-gray-500"
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
            </div>

            {/* Clear button for selected field */}
            {selectedField && (
              <button
                className="absolute inset-y-0 right-8 flex items-center px-5 py-3 text-gray-500"
                onClick={clearSelection}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Location Input */}
          <input
            type="text"
            placeholder="Where do you want to study?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-3 rounded-lg w-full md:w-1/2 outline-none bg-white border border-gray-300"
          />

          {/* Search Button */}
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg w-full md:w-auto">
            Search
          </button>
        </div>

        <div className="py-5">
          <p className="text-white">Or</p>
        </div>
        <div className="mt-4">
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg">
            Browse Fields of Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerWithDropdown;
