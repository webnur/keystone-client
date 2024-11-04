import Link from 'next/link';
import React from 'react';

const PopularMenu: React.FC = () => {
  return (
    <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Popular Degree Type */}
        <div>
          <h4 className="font-bold mb-4">Popular Degree Type</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-red-500 hover:underline">Masters of Arts</Link></li>
            <li><Link href="#" className="text-red-500 hover:underline">Master Degrees</Link></li>
            <li><Link href="#" className="text-red-500 hover:underline">Masters of Science</Link></li>
          </ul>
        </div>

        {/* Popular Study Format */}
        <div>
          <h4 className="font-bold mb-4">Popular Study Format</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-red-500 hover:underline">On-Campus</Link></li>
            <li><Link href="#" className="text-red-500 hover:underline">Distance Learning</Link></li>
            <li><Link href="#" className="text-red-500 hover:underline">Blended</Link></li>
          </ul>
        </div>

        {/* Popular Locations */}
        <div>
          <h4 className="font-bold mb-4">Popular Locations</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-red-500 hover:underline">USA</Link></li>
            <li><Link href="#" className="text-red-500 hover:underline">United Kingdom</Link></li>
            <li><Link href="#" className="text-red-500 hover:underline">Germany</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
