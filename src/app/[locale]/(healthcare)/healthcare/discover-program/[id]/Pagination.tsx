import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center space-x-2">
      <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">1</button>
      <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">2</button>
      <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">3</button>
      <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">4</button>
      <span className="px-3 py-2">...</span>
      <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">111</button>
    </div>
  );
};

export default Pagination;
