import React, { useState } from 'react';

interface BannerWithDropdownProps {
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
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-foreground bg-opacity-30 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>

        <div className="flex justify-center items-center space-x-2">
      
          <div className="relative w-4/6">
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="appearance-none px-4 py-3 rounded-lg w-full outline-none bg-background border border-gray-300 pr-10"
            >
              <option value="" disabled>Select a field of study</option>
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

            {/* Cross button to clear selection, visible only when a field is selected */}
            {selectedField && (
              <button
                className="absolute inset-y-0 right-8 flex items-center px-2 text-gray-500"
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

          <input
            type="text"
            placeholder="Where do you want to study?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-3 rounded-lg w-1/2 outline-none bg-white"
          />

          {/* Search Button */}
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
            Search
          </button>
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
