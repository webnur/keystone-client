"use client"
import React, { useState } from 'react';

const FilterComponent: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  return (
    <aside className="w-1/4 p-4 bg-gray-100">
      {/* Selected Filters */}
      <div className="mb-4">
        {selectedFilters.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Selected Filters</h3>
            {selectedFilters.map((filter, index) => (
              <span key={index} className="inline-block bg-red-100 text-red-500 px-2 py-1 rounded-full mr-2 mb-2">
                {filter}
                <button
                  onClick={() => handleFilterToggle(filter)}
                  className="ml-2 text-sm text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Fields of Study */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Fields of Study</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('Artificial Intelligence')} className="mr-2" />
              Artificial Intelligence (272)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('Automation')} className="mr-2" />
              Automation (153)
            </label>
          </li>
          {/* Add more fields as necessary */}
        </ul>
      </div>

      {/* Location */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Location</h3>
        <input
          type="text"
          placeholder="Search location"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <ul className="space-y-2">
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('USA')} className="mr-2" />
              USA (492)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('Germany')} className="mr-2" />
              Germany (329)
            </label>
          </li>
          {/* Add more locations */}
        </ul>
      </div>

      {/* Degree Type */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Degree Type</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('MSc')} className="mr-2" />
              MSc (86)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('MA')} className="mr-2" />
              MA (852)
            </label>
          </li>
          {/* Add more degree types */}
        </ul>
      </div>

      {/* Course Duration */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Course Duration</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('1 year')} className="mr-2" />
              1 year (498)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('2 years')} className="mr-2" />
              2 years (446)
            </label>
          </li>
          {/* Add more durations */}
        </ul>
      </div>

      {/* Study Pace */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Study Pace</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('Full-time')} className="mr-2" />
              Full-time (1085)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('Part-time')} className="mr-2" />
              Part-time (447)
            </label>
          </li>
        </ul>
      </div>

      {/* Language */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Language</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('English')} className="mr-2" />
              English (1400)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('Spanish')} className="mr-2" />
              Spanish (95)
            </label>
          </li>
          {/* Add more languages */}
        </ul>
      </div>

      {/* Study Format */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Study Format</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('On-Campus')} className="mr-2" />
              On-Campus (1293)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={() => handleFilterToggle('Distance Learning')} className="mr-2" />
              Distance Learning (273)
            </label>
          </li>
          {/* Add more formats */}
        </ul>
      </div>

      {/* Application Deadline */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Application Deadline</h3>
        <input type="month" className="w-full p-2 border border-gray-300 rounded mb-2" />
      </div>

      {/* Apply Button */}
      <div className="mb-4">
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterComponent;
