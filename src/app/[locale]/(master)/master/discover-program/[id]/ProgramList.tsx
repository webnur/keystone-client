"use client";
import React, { useState, useRef } from 'react';
import ProgramCard from './ProgramCard';
import Pagination from './Pagination';
import PopularMenu from './PopularMenu';
import BestProgramsForYou from './BestPrograms';

const ITEMS_PER_PAGE = 3;

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
    imageUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The MSc Business Analytics programme will equip you with a broad range of analytical skills...",
    logo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Master Management in IT Management",
    institution: "IU International University of Applied Sciences",
    location: "Berlin, Germany",
    duration: "12 months",
    mode: "Blended, On-Campus",
    language: "English",
    imageUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "IU's on-campus Master’s in IT Management programme will prepare you...",
    logo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    imageUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The MBA programme at Harvard will provide you with an unparalleled education...",
    logo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "MA in Product Management",
    institution: "IU International University of Applied Sciences",
    location: "Online",
    duration: "24 months",
    mode: "Distance Learning",
    language: "English",
    description: "Enroll in IU's online master's program in product management...",
    imageUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    logo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    recommended: true,
  },
  // Add more entries as needed for testing
];

const mockRelatedFields = [
  "Business Administration", "Business Engineering", "Business Law Studies", 
  "Business Management", "Accounting", "Marketing", "Human Resources", "Economics", "Finance", "Taxation"
];

const ProgramList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const slideLeft = () => {
    sliderRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = mockPrograms.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full md:w-3/4 p-4 mx-auto">
      <h2 className="font-bold text-2xl mb-6">
        {mockPrograms.length} Master Programs in Economic Studies 2024/2025
      </h2>

      <div className="relative flex items-center mb-6">
        <button onClick={slideLeft} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-300">
          {'<'}
        </button>
        <div ref={sliderRef} className="flex items-center gap-3 overflow-x-auto no-scrollbar mx-4 hide-scrollbar">
          {mockRelatedFields.map((field) => (
            <a key={field} href="#" className="flex-shrink-0 text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full shadow-md hover:text-red-600 hover:bg-gray-200 transition border border-gray-300">
              {field}
            </a>
          ))}
        </div>
        <button onClick={slideRight} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-300">
          {'>'}
        </button>
      </div>

      <div className="space-y-4">
        {currentItems.map((program) => (
          <ProgramCard
            key={program.id}
            id={program.id}
            title={program.title}
            institution={program.institution}
            location={program.location}
            duration={program.duration}
            mode={program.mode}
            language={program.language}
            recommended={program.recommended}
            imageUrl={program.imageUrl}
            description={program.description}
            logo={program.logo}
          />
        ))}
      </div>

      <BestProgramsForYou />


     <div className="space-y-4">
        {currentItems.map((program) => (
          <ProgramCard
            key={program.id}
            id={program.id}
            title={program.title}
            institution={program.institution}
            location={program.location}
            duration={program.duration}
            mode={program.mode}
            language={program.language}
            recommended={program.recommended}
            imageUrl={program.imageUrl}
            description={program.description}
            logo={program.logo}
          />
        ))}
      </div>
      <Pagination
        totalItems={mockPrograms.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <PopularMenu />
      
    </div>
  );
};

export default ProgramList;
