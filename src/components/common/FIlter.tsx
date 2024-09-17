import React from 'react';

const Filters: React.FC = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="font-bold text-lg mb-4">Filters</h2>
      <button className="text-red-500 mb-2 block">Reset</button>

      <h3 className="font-semibold mb-2">Fields of Study</h3>
      <ul className="space-y-2">
        <li>
          <label>
            <input type="checkbox" className="mr-2" />
            Artificial Intelligence (272)
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" className="mr-2" />
            Automation (153)
          </label>
        </li>
        {/* Add more filter fields */}
      </ul>
    </div>
  );
};

export default Filters;
