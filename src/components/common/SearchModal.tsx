'use client';
import React, { useState } from "react";

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(`Searching for ${searchText}`);
    onClose(); // Close the modal after searching
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Search Program</h2>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter program name..."
        />
        <div className="flex justify-between">
          <button
            onClick={handleSearch}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Search
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
