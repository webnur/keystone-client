import React from 'react';

const PopularMenu: React.FC = () => {
  return (
    <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow">
      <div className="grid grid-cols-3 gap-8">
        {/* Popular Degree Type */}
        <div>
          <h4 className="font-bold mb-4">Popular Degree Type</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-red-500 hover:underline">Masters of Arts</a></li>
            <li><a href="#" className="text-red-500 hover:underline">Master Degrees</a></li>
            <li><a href="#" className="text-red-500 hover:underline">Masters of Science</a></li>
          </ul>
        </div>

        {/* Popular Study Format */}
        <div>
          <h4 className="font-bold mb-4">Popular Study Format</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-red-500 hover:underline">On-Campus</a></li>
            <li><a href="#" className="text-red-500 hover:underline">Distance Learning</a></li>
            <li><a href="#" className="text-red-500 hover:underline">Blended</a></li>
          </ul>
        </div>

        {/* Popular Locations */}
        <div>
          <h4 className="font-bold mb-4">Popular Locations</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-red-500 hover:underline">USA</a></li>
            <li><a href="#" className="text-red-500 hover:underline">United Kingdom</a></li>
            <li><a href="#" className="text-red-500 hover:underline">Germany</a></li>
            {/* Add more popular locations */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
