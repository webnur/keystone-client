import React from 'react';
import ProgramCard from './ProgramCard';
import Pagination from './Pagination';
import PopularMenu from './PopularMenu';


const ProgramList: React.FC = () => {
  return (
    <div className="w-3/4 p-4">
      {/* Title with Available Program Count */}
      <h2 className="font-bold text-2xl mb-4">
        1665 Master Programs in Humanities Studies 2024/2025
      </h2>
      
      {/* Related Fields Section */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="font-semibold">Related:</span>
        {['Accounting', 'Administration', 'Alternative Medicine', 'Adult Education'].map((field) => (
          <a key={field} href="#" className="text-gray-500 bg-gray-200 px-2 py-1 rounded-full hover:text-red-500">
            {field}
          </a>
        ))}
      </div>
      
      {/* Program Cards */}
      <div className="space-y-4">
        <ProgramCard
          title="Master's degree in Linguistics"
          institution="University of Verona"
          location="Verona, Italy"
          duration="2 years"
          mode="On-Campus"
          language="English"
          recommended
        />
        <ProgramCard
          title="MA in Translation"
          institution="Open University"
          location="Online United Kingdom"
          duration="2 years"
          mode="Distance Learning"
          language="English"
        />
        {/* Add more program cards */}
      </div>

      {/* Pagination */}
      <Pagination />

      {/* Popular Menu Section */}
      <PopularMenu />
    </div>
  );
};

export default ProgramList;
