import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramList: React.FC = () => {
  return (
    <div className="w-3/4 p-4">
      <h2 className="font-bold text-2xl mb-4">3020 Master Programs in Technology Studies 2024</h2>

      {/* Related Fields Section */}
      <div className="mb-4">
        <span className="font-semibold">Related:</span>
        <a href="#" className="text-gray-500 ml-2">Accountancy</a>
        <a href="#" className="text-gray-500 ml-2">Accounting</a>
        {/* Add more related fields */}
      </div>

      {/* Program Cards */}
      <ProgramCard
        title="M.Sc. in Data Science"
        institution="IU International University of Applied Sciences"
        location="Berlin, Germany"
        duration="24 months"
        mode="Blended, On-Campus"
      />
      <ProgramCard
        title="Master in DevOps and Cloud Computing"
        institution="IU International University of Applied Sciences"
        location="Online"
        duration="24 months"
        mode="Distance Learning"
      />
      {/* Add more programs similarly */}

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <button className="px-4 py-2 border mr-2">1</button>
        <button className="px-4 py-2 border mr-2">2</button>
        <button className="px-4 py-2 border">Next</button>
      </div>
    </div>
  );
};

export default ProgramList;
