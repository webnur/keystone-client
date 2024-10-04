import React from 'react';

const SearchPreferences: React.FC<{ onSearchSubmit: () => void }> = ({ onSearchSubmit }) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Study Preferences</h2>
        <button className="text-red-500 text-lg">Skip</button>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-semibold mb-2">
            Which Fields Interest You Most?
          </label>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-2 bg-gray-200 rounded-lg cursor-pointer">Architecture Studies</span>
            <span className="px-3 py-2 bg-gray-200 rounded-lg cursor-pointer">Business Studies</span>
            {/* Add other fields here */}
          </div>
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">
            Where Do You Want to Study?
          </label>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-2 bg-gray-200 rounded-lg cursor-pointer">France</span>
            <span className="px-3 py-2 bg-gray-200 rounded-lg cursor-pointer">Germany</span>
            {/* Add other countries here */}
          </div>
        </div>
        <button
          className="w-full bg-red-500 text-white py-3 rounded-lg mt-6 hover:bg-red-600 transition"
          onClick={onSearchSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPreferences;
