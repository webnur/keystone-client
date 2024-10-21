"use client";
import React, { useState } from 'react';
import ProgramCard from './ProgramCard';
import Pagination from './Pagination';
import PopularMenu from './PopularMenu';

const mockPrograms = [
  {
    id: 1,
    title: "Online MSc Business Analytics",
    institution: "Aston University Online",
    location: "Online United Kingdom",
    duration: "24 months",
    mode: "Distance Learning",
    language: "English",
    recommended: true,
  },
  {
    id: 2,
    title: "Master Management in IT Management",
    institution: "IU International University of Applied Sciences",
    location: "Berlin, Germany",
    duration: "12 months",
    mode: "Blended, On-Campus",
    language: "English",
  },
  {
    id: 3,
    title: "MBA in Business Administration",
    institution: "Harvard Business School",
    location: "Boston, USA",
    duration: "2 years",
    mode: "On-Campus",
    language: "English",
    recommended: true,
  },
  // Add more mock programs as needed
];

const mockRelatedFields = [
  "Business Administration", "Business Engineering", "Business Law Studies", 
  "Business Management", "Accounting", "Marketing", "Human Resources"
];

const ProgramList: React.FC = () => {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);

  const handleNextField = () => {
    setCurrentFieldIndex((prev) => (prev + 1) % mockRelatedFields.length);
  };

  const handlePrevField = () => {
    setCurrentFieldIndex((prev) => (prev - 1 + mockRelatedFields.length) % mockRelatedFields.length);
  };

  return (
    <div className="w-3/4 p-4">
      {/* Title with Available Program Count */}
      <h2 className="font-bold text-2xl mb-4">
        {mockPrograms.length} Master Programs in Economic Studies 2024/2025
      </h2>

      {/* Related Fields Section */}
      <div className="relative flex items-center mb-4">
        <button 
          onClick={handlePrevField} 
          className="absolute left-0 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
        >
          {'<'}
        </button>
        <div className="flex gap-2 overflow-x-auto no-scrollbar mx-8">
          {mockRelatedFields.slice(currentFieldIndex, currentFieldIndex + 4).map((field) => (
            <a 
              key={field} 
              href="#" 
              className="flex-shrink-0 text-gray-500 bg-gray-200 px-2 py-1 rounded-full hover:text-red-500"
            >
              {field}
            </a>
          ))}
        </div>
        <button 
          onClick={handleNextField} 
          className="absolute right-0 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
        >
          {'>'}
        </button>
      </div>

      {/* Program Cards */}
      <div className="space-y-4">
        {mockPrograms.map((program) => (
          <ProgramCard
            id={program.id} // Pass id here
            key={program.id} // Still keep key as a unique identifier for rendering
            title={program.title}
            institution={program.institution}
            location={program.location}
            duration={program.duration}
            mode={program.mode}
            language={program.language}
            recommended={program.recommended}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />

      {/* Popular Menu Section */}
      <PopularMenu />
    </div>
  );
};

export default ProgramList;
