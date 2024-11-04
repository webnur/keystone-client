import React from "react";

const Programs: React.FC = () => {
  const programs = [
    { title: "MSc in United Kingdom" },
    { title: "MA in United Kingdom" },
    { title: "Master in United Kingdom" },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white container mx-auto px-6 lg:ml-12 shadow-md rounded-sm">
      <h2 className="md:text-3xl text-2xl font-semibold mb-6">Programs</h2>
      <ul className="text-left">
        {programs.map((program, index) => (
          <li key={index} className="mb-3 text-sm sm:text-base text-gray-800 underline hover:text-red-600 transition-colors">
            {program.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Programs;
