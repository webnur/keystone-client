"use client";
import React from "react";
import { FaHeart, FaAngleRight } from "react-icons/fa"; // Import icons from react-icons

const BestProgramsForYou: React.FC = () => {
  return (
    <div className="my-4 flex items-center justify-between p-4 bg-white border-l-4 border-l-red-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Icon Container */}
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full text-red-500 mr-4">
          <FaHeart size={16} />
        </div>

        {/* Text Content */}
        <div>
          <h3 className="text-base font-semibold text-gray-800">
            Best programs for you
          </h3>
          <p className="text-sm text-gray-600">
            Answer a few questions and well match you with programs!
          </p>
        </div>
      </div>

      {/* Arrow for more options */}
      <button className="text-xl hover:text-red-600 transition-colors duration-300">
        <FaAngleRight />
      </button>
    </div>
  );
};

export default BestProgramsForYou;
