import React from "react";

const FiveSecondSummary = ({
  title = "5-second summary",
  icon = "✨",
  points = [
    "It’s important to come across as authentic in your application - show your individuality.",
    "Universities generally consider three criteria: academic performance, student’s fit for the program, and community engagement potential.",
    "Research the institution properly and dedicate enough time to craft a compelling application.",
  ],
}) => {
  return (
    <div className="bg-[#f5f4eb] border-l-4 border-yellow-500 p-6 rounded-lg shadow-md mb-8">
      {/* Title with Icon */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h2>

      {/* Summary Points */}
      <ul className="text-gray-700 space-y-2 list-disc pl-4">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiveSecondSummary;
