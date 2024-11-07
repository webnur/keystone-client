"use client";
import React, { useState, useRef, useEffect } from "react";
import ProgramCard from "./ProgramCard";
import Pagination from "./Pagination";
import PopularMenu from "./PopularMenu";
import BestProgramsForYou from "./BestPrograms";

const ITEMS_PER_PAGE = 10;

const mockPrograms = [
  {
    id: 1,
    title: "Online MSc Business Analytics",
    institution: "Aston University Online",
    country: "United Kingdom",
    degreeType: "MSc",
    subject: "Business Analytics",
    location: "Online",
    duration: "24 months",
    studyMode: "Full-time",
    locationType: "Distance Learning",
    language: "English",
    applicationTime: "October 2023",
    applicationDeadline: "July 2024",
    recommended: true,
    imageUrl:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "The MSc Business Analytics programme will equip you with a broad range of analytical skills...",
    logo: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Master in IT Management",
    institution: "IU International University",
    country: "Germany",
    degreeType: "MA",
    subject: "IT Management",
    location: "Berlin, Germany",
    duration: "12 months",
    studyMode: "Part-time",
    locationType: "Blended",
    language: "English",
    applicationTime: "September 2023",
    applicationDeadline: "June 2024",
    imageUrl:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A master's degree to advance your IT management skills...",
    logo: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "MBA in Business Administration",
    institution: "Harvard Business School",
    country: "USA",
    degreeType: "MBA",
    subject: "Business Administration",
    location: "Boston, USA",
    duration: "2 years",
    studyMode: "Full-time",
    locationType: "On-Campus",
    language: "English",
    applicationTime: "January 2024",
    applicationDeadline: "September 2024",
    recommended: true,
    imageUrl:
      "https://images.pexels.com/photos/372746/pexels-photo-372746.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "The MBA programme at Harvard will provide you with unparalleled education...",
    logo: "https://images.pexels.com/photos/372746/pexels-photo-372746.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // Additional entries as provided in your initial code
];

const mockRelatedFields = [
  "Business Administration",
  "Business Engineering",
  "Business Law Studies",
  "Business Management",
  "Accounting",
  "Marketing",
  "Human Resources",
  "Economics",
  "Finance",
  "Taxation",
];

const ProgramList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPrograms, setFilteredPrograms] = useState(mockPrograms);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedFilters = localStorage.getItem("selectedFilters");
    if (storedFilters) {
      const filters = JSON.parse(storedFilters);
      const filtered = mockPrograms.filter((program) => {
        return filters.every((filter: string) =>
          Object.values(program).some((value) =>
            typeof value === "string"
              ? value.toLowerCase().includes(filter.toLowerCase())
              : false
          )
        );
      });
      setFilteredPrograms(filtered.length ? filtered : mockPrograms); // Show all data if no filters match
    } else {
      setFilteredPrograms(mockPrograms); // Show all data if no filters are applied
    }
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const slideLeft = () => {
    sliderRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredPrograms.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="w-full md:w-3/4 p-4 mx-auto">
      <h2 className="font-bold text-2xl mb-6">
        {filteredPrograms.length} Master Programs in Economic Studies 2024/2025
      </h2>

      <div className="relative flex items-center mb-6">
        <button
          onClick={slideLeft}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-300"
        >
          {"<"}
        </button>
        <div
          ref={sliderRef}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar mx-4 hide-scrollbar"
        >
          {mockRelatedFields.map((field) => (
            <a
              key={field}
              href="#"
              className="flex-shrink-0 text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full shadow-md hover:text-red-600 hover:bg-gray-200 transition border border-gray-300"
            >
              {field}
            </a>
          ))}
        </div>
        <button
          onClick={slideRight}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-300"
        >
          {">"}
        </button>
      </div>

      <div className="space-y-4">
        {currentItems.length > 0 ? (
          currentItems.map((program) => (
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.title}
              institution={program.institution}
              location={program.location}
              country={program.country}
              degreeType={program.degreeType}
              subject={program.subject}
              duration={program.duration}
              studyMode={program.studyMode}
              locationType={program.locationType}
              language={program.language}
              applicationTime={program.applicationTime}
              applicationDeadline={program.applicationDeadline}
              recommended={program.recommended}
              imageUrl={program.imageUrl}
              description={program.description}
              logo={program.logo}
            />
          ))
        ) : (
          <div className="text-center text-gray-500">No data was found.</div>
        )}
      </div>

      <BestProgramsForYou />

      <Pagination
        totalItems={filteredPrograms.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <PopularMenu />
    </div>
  );
};

export default ProgramList;
