"use client";
import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const FilterComponent: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFieldsOpen, setIsFieldsOpen] = useState(true);
  const [isLocationOpen, setIsLocationOpen] = useState(true);
  const [isDegreeOpen, setIsDegreeOpen] = useState(true);
  const [isDurationOpen, setIsDurationOpen] = useState(true);
  const [isPaceOpen, setIsPaceOpen] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(true);
  const [isFormatOpen, setIsFormatOpen] = useState(true);
  const [isDeadlineOpen, setIsDeadlineOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Predefined list of European countries, USA, and Canada
  const countryList = [
<<<<<<< HEAD
    'USA', 'Canada', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands',
    'Belgium', 'Switzerland', 'United Kingdom', 'Sweden', 'Norway',
=======
    'USA', 'Canada', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 
    'Belgium', 'Switzerland', 'United Kingdom', 'Sweden', 'Norway', 
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
    'Denmark', 'Finland', 'Poland', 'Portugal', 'Ireland', 'Austria', 'Greece'
  ];

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  const handleResetFilters = () => {
    setSelectedFilters([]);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Show suggestions based on the search query
    if (query.length > 0) {
      const filteredSuggestions = countryList.filter((country) =>
        country.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleFilterToggle(suggestion); // Add the country as a filter
    setSearchQuery(''); // Clear the search input
    setSuggestions([]); // Clear the suggestions list
  };

  const toggleAccordion = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prevState) => !prevState);
  };

<<<<<<< HEAD
  const isFilterSelected = (filter: string) => selectedFilters.includes(filter);

=======
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
  return (
    <aside className="w-1/4 p-4 bg-gray-100">
      {/* Breadcrumb or Route Path */}
      <nav className="mb-4 text-sm">
        <a href="#" className="text-gray-500 hover:underline">
          Master
        </a>{' '}
        &gt;{' '}
        <a href="#" className="text-gray-500 hover:underline">
          Economic Studies
        </a>
      </nav>

      {/* Filter Title and Reset Button */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Filters</h2>
        <button
          className="text-red-500 hover:text-red-700 text-sm"
          onClick={handleResetFilters}
        >
          Reset
        </button>
      </div>

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
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsFieldsOpen)}>
          <h3 className="font-semibold mb-2">Fields of Study</h3>
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>
        </div>
        {isFieldsOpen && (
          <ul className="space-y-2">
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('Artificial Intelligence')}
                  onChange={() => handleFilterToggle('Artificial Intelligence')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('Artificial Intelligence')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                Artificial Intelligence (272)
              </label>
            </li>
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('Automation')}
                  onChange={() => handleFilterToggle('Automation')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('Automation')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                Automation (153)
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Location */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsLocationOpen)}>
          <h3 className="font-semibold mb-2">Location</h3>
<<<<<<< HEAD
          <span>{isLocationOpen ? <IoClose /> : <FaArrowDown />}</span>
=======
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>

>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
        </div>
        {isLocationOpen && (
          <>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search location"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            {suggestions.length > 0 && (
              <ul className="border border-gray-300 rounded mb-2 max-h-40 overflow-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            <ul className="space-y-2">
              <li>
                <label>
<<<<<<< HEAD
                  <input
                    type="checkbox"
                    checked={isFilterSelected('USA')}
                    onChange={() => handleFilterToggle('USA')}
                    className="mr-2"
                  />
=======
                  <input type="checkbox" onChange={() => handleFilterToggle('USA')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                  USA (492)
                </label>
              </li>
              <li>
                <label>
<<<<<<< HEAD
                  <input
                    type="checkbox"
                    checked={isFilterSelected('Germany')}
                    onChange={() => handleFilterToggle('Germany')}
                    className="mr-2"
                  />
=======
                  <input type="checkbox" onChange={() => handleFilterToggle('Germany')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                  Germany (329)
                </label>
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Degree Type */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsDegreeOpen)}>
          <h3 className="font-semibold mb-2">Degree Type</h3>
<<<<<<< HEAD
          <span>{isDegreeOpen ? <IoClose /> : <FaArrowDown />}</span>
=======
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>

>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
        </div>
        {isDegreeOpen && (
          <ul className="space-y-2">
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('MSc')}
                  onChange={() => handleFilterToggle('MSc')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('MSc')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                MSc (86)
              </label>
            </li>
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('MA')}
                  onChange={() => handleFilterToggle('MA')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('MA')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                MA (852)
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Course Duration */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsDurationOpen)}>
          <h3 className="font-semibold mb-2">Course Duration</h3>
<<<<<<< HEAD
          <span>{isDurationOpen ? <IoClose /> : <FaArrowDown />}</span>
=======
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>

>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
        </div>
        {isDurationOpen && (
          <ul className="space-y-2">
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('1 year')}
                  onChange={() => handleFilterToggle('1 year')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('1 year')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                1 year (498)
              </label>
            </li>
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('2 years')}
                  onChange={() => handleFilterToggle('2 years')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('2 years')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                2 years (446)
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Study Pace */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsPaceOpen)}>
          <h3 className="font-semibold mb-2">Study Pace</h3>
<<<<<<< HEAD
          <span>{isPaceOpen ? <IoClose /> : <FaArrowDown />}</span>
=======
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>

>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
        </div>
        {isPaceOpen && (
          <ul className="space-y-2">
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('Full-time')}
                  onChange={() => handleFilterToggle('Full-time')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('Full-time')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                Full-time (1085)
              </label>
            </li>
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('Part-time')}
                  onChange={() => handleFilterToggle('Part-time')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('Part-time')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                Part-time (447)
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Language */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsLanguageOpen)}>
          <h3 className="font-semibold mb-2">Language</h3>
<<<<<<< HEAD
          <span>{isLanguageOpen ? <IoClose /> : <FaArrowDown />}</span>
=======
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>

>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
        </div>
        {isLanguageOpen && (
          <ul className="space-y-2">
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('English')}
                  onChange={() => handleFilterToggle('English')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('English')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                English (1400)
              </label>
            </li>
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('Spanish')}
                  onChange={() => handleFilterToggle('Spanish')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('Spanish')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                Spanish (95)
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Study Format */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsFormatOpen)}>
          <h3 className="font-semibold mb-2">Study Format</h3>
<<<<<<< HEAD
          <span>{isFormatOpen ? <IoClose /> : <FaArrowDown />}</span>
=======
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>

>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
        </div>
        {isFormatOpen && (
          <ul className="space-y-2">
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('On-Campus')}
                  onChange={() => handleFilterToggle('On-Campus')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('On-Campus')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                On-Campus (1293)
              </label>
            </li>
            <li>
              <label>
<<<<<<< HEAD
                <input
                  type="checkbox"
                  checked={isFilterSelected('Distance Learning')}
                  onChange={() => handleFilterToggle('Distance Learning')}
                  className="mr-2"
                />
=======
                <input type="checkbox" onChange={() => handleFilterToggle('Distance Learning')} className="mr-2" />
>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
                Distance Learning (273)
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Application Deadline */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(setIsDeadlineOpen)}>
          <h3 className="font-semibold mb-2">Application Deadline</h3>
<<<<<<< HEAD
          <span>{isDeadlineOpen ? <IoClose /> : <FaArrowDown />}</span>
=======
          <span>{isFieldsOpen ? <IoClose /> : <FaArrowDown />}</span>

>>>>>>> e19162b (updated filter page saved program has been saved in localhost now)
        </div>
        {isDeadlineOpen && (
          <ul className="space-y-2">
            <li>
              <label>
                <input type="radio" name="deadline" value="Anytime from now" className="mr-2" />
                Anytime from now
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="deadline" value="October 2024" className="mr-2" />
                October 2024
              </label>
            </li>
            {/* Add more deadline options */}
          </ul>
        )}
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
