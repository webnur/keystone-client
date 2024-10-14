import React from 'react';

const ArticleCard = () => {
  return (
    <div className="w-full md:w-2/3">
      <h1 className="text-3xl font-bold mb-4">
        Graduate School Application Trends - Insights From Boston University
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Perfect your graduate school application with these tips from an industry expert.
      </p>
      <p className="text-sm text-red-500 mb-4">Apr 10, 2024 • Student Tips • Education • Study Abroad</p>
      
      <img
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
        src="https://via.placeholder.com/800x400.png?text=Boston+University" // Replace with your image URL
        alt="Boston University"
      />
      <div>
        <p className="text-lg leading-relaxed mb-4">
          This article provides tips from experts to perfect your graduate school applications. Learn about what universities expect, common pitfalls, and modern trends in the education space...
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
