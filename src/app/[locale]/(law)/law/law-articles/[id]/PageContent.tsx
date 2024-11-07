"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Using a star icon similar to the image

const PageContent = () => {
  const contentLinks = [
    "What universities expect from students",
    "The do's and don'ts of your application",
    "Common student pitfalls",
    "Demand for shorter programs is growing",
    "Modern students are consumer-savvy",
    "Other trends in graduate recruitment",
  ];

  return (
    <div className="sticky top-20 p-4 bg-white shadow-md rounded-lg border border-gray-300 max-w-sm">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full text-red-500 mr-2">
          <FaStar />
        </div>
        <h3 className="text-lg font-semibold">Page Content</h3>
      </div>
      <ul className="space-y-2">
        {contentLinks.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageContent;
