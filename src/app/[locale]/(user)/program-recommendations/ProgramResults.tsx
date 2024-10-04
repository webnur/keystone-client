import React from 'react';

const ProgramResults = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <h2 className="font-bold text-2xl mb-6">
        3020 Master Programs in Technology Studies 2024
      </h2>
      <div className="mb-6 flex space-x-2">
        <span className="font-semibold">Related:</span>
        <a href="#" className="text-gray-500 ml-2">Accounting</a>
        <a href="#" className="text-gray-500 ml-2">Administration</a>
        {/* Add more related fields */}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 shadow rounded-lg flex">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">M.Sc. in Data Science</h3>
            <p className="text-gray-500">IU International University of Applied Sciences</p>
            <p className="text-gray-500">Berlin, Germany | 24 months | Blended</p>
          </div>
          <a href="#" className="text-red-500">View Details</a>
        </div>
        {/* Add more program cards */}
      </div>
    </div>
  );
};

export default ProgramResults;
