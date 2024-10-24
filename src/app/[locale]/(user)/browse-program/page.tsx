"use client";
import { useState } from "react";
import { FaGraduationCap, FaBuilding, FaStar } from "react-icons/fa";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineComment,
} from "react-icons/ai";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const FilterLayout = () => {
  // State to control the popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter data for Field of Study, Languages, and Locations
  const fieldOfStudyOptions = [
    "Academic English",
    "Business Studies",
    "Computer Science",
    "Engineering",
    "Law",
  ];

  const languageOptions = ["English", "French", "Spanish", "German", "Chinese"];

  const locationOptions = ["USA", "Belgium", "Switzerland", "Germany", "UK"];

  // Properly type the filters state
  const [filters, setFilters] = useState<{
    fieldOfStudy: string;
    languages: string[];
    location: string[];
  }>({
    fieldOfStudy: "",
    languages: [],
    location: [],
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - Filters */}
        <div className="hidden md:block w-1/4 p-4">
          {/* Sidebar only visible from medium screens (md) and above */}
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* Field of Study */}
          <div className="mb-4">
            <h4 className="font-semibold">Field of Study</h4>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Search Field of Study..."
              value={filters.fieldOfStudy}
              onChange={(e) =>
                setFilters({ ...filters, fieldOfStudy: e.target.value })
              }
            />
            <div className="mt-2">
              {fieldOfStudyOptions.map((field, index) => (
                <label key={index} className="block">
                  <input
                    type="checkbox"
                    className="form-checkbox mr-2"
                    checked={filters.fieldOfStudy === field}
                    onChange={() =>
                      setFilters((prev) => ({
                        ...prev,
                        fieldOfStudy: prev.fieldOfStudy === field ? "" : field,
                      }))
                    }
                  />
                  {field}
                </label>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-4">
            <h4 className="font-semibold">Languages</h4>
            <div>
              {languageOptions.map((language, index) => (
                <label key={index} className="block">
                  <input
                    type="checkbox"
                    className="form-checkbox mr-2"
                    checked={filters.languages.includes(language)}
                    onChange={() =>
                      setFilters((prev) => ({
                        ...prev,
                        languages: prev.languages.includes(language)
                          ? prev.languages.filter((lang) => lang !== language)
                          : [...prev.languages, language],
                      }))
                    }
                  />
                  {language}
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-4">
            <h4 className="font-semibold">Location</h4>
            <div className="mt-2">
              {locationOptions.map((location, index) => (
                <label key={index} className="block">
                  <input
                    type="checkbox"
                    className="form-checkbox mr-2"
                    checked={filters.location.includes(location)}
                    onChange={() =>
                      setFilters((prev) => ({
                        ...prev,
                        location: prev.location.includes(location)
                          ? prev.location.filter((loc) => loc !== location)
                          : [...prev.location, location],
                      }))
                    }
                  />
                  {location}
                </label>
              ))}
            </div>
          </div>

          <button
            className="text-red-500 underline mt-2"
            onClick={() =>
              setFilters({
                fieldOfStudy: "",
                languages: [],
                location: [],
              })
            }
          >
            Reset Filters
          </button>
        </div>

        {/* Right Side - Programs */}
        <div className="w-full md:w-3/4 p-4">
          <h3 className="text-lg font-semibold mb-4">Programs</h3>

          {/* Example Program Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row justify-between items-start relative">
            {/* Left Section - Program Details */}
            <div className="flex flex-col md:flex-row">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Master of English Linguistics and Literature
                </h3>
                {/* University Logo */}
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src="https://i.ibb.co.com/285BZwF/240330-Screenshot2024-09-17170404.png"
                      alt="KU Leuven Logo"
                      width={96}
                      height={96}
                      layout="intrinsic"
                      className="h-auto"
                    />
                  </div>

                  <div>
                    <p className="text-gray-600 font-semibold">KU Leuven</p>
                    <p className="text-gray-500 flex items-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>Leuven,
                      Belgium
                    </p>
                  </div>
                </div>
                {/* Program Info */}

                <p className="text-gray-600 mt-2">
                  The Master of English Linguistics and Literature will expand
                  your knowledge of the English language, its structure and
                  history, its literature, and its cultural embedding.
                  <span className="text-red-500"> ... +</span>
                </p>
                <button className="text-red-600 font-semibold mt-2">
                  Read a more detailed description
                </button>
              </div>
            </div>

            {/* Right Section - Program Information */}
            <div className="flex flex-col justify-between items-end text-sm mt-4 md:mt-0">
              {/* Icon + Text for each detail */}

              <div className="flex flex-wrap space-y-3 mb-4">
                {/* First row with MA and Sep 2025 */}
                <div className="w-full flex justify-between items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <FaGraduationCap className="text-gray-700" />
                    <span className="text-gray-700">MA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AiOutlineCalendar className="text-gray-700" />
                    <span className="text-gray-700">Sep 2025</span>
                  </div>
                </div>

                {/* Second row with Full time and Campus */}
                <div className="w-full flex justify-between items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineClockCircle className="text-gray-700" />
                    <span className="text-gray-700">Full time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaBuilding className="text-gray-700" />
                    <span className="text-gray-700">Campus</span>
                  </div>
                </div>

                {/* Third row with 1 Year and Featured */}
                <div className="w-full flex justify-between items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineClockCircle className="text-gray-700" />
                    <span className="text-gray-700">1 Year</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-gray-700" />
                    <span className="text-gray-700">Featured</span>
                  </div>
                </div>

                {/* Fourth row with English */}
                <div className="w-full flex justify-between items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineComment className="text-gray-700" />
                    <span className="text-gray-700">English</span>
                  </div>
                </div>
              </div>

              {/* Connect Button */}
              <div className="pt-4 w-full md:w-auto">
                <button
                  className="bg-red-100 text-red-600 px-8 py-3 rounded-lg font-semibold w-full md:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start bg-black bg-opacity-50 justify-end">
          <div className="bg-gray-800 text-white rounded-lg p-6 w-1/3 h-screen relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              <IoMdClose />
            </button>

            <h3 className="text-2xl font-semibold mb-4">Attention</h3>
            <p className="text-gray-300 mb-4">
              3 programs require the following information to process your
              inquiry. To ensure the institution receives your inquiry, please
              answer all fields below. Thank you.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Country of residence
              </label>
              <select className="w-full p-2 border border-gray-300 rounded text-black">
                <option>Choose one</option>
                <option>USA</option>
                <option>Belgium</option>
                <option>Germany</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Submit button at the bottom */}
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold w-full absolute bottom-4"
              onClick={() => setIsModalOpen(false)}
            >
              Submit information to schools
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterLayout;
