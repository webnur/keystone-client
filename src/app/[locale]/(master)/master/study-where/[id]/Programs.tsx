import React from "react";

const Programs: React.FC = () => {
  const programs = [
    { title: "MSc in United Kingdom" },
    { title: "MA in United Kingdom" },
    { title: "Master in United Kingdom" },
  ];

  return (
    <section className="py-16 bg-white mx-auto">
      <h2 className="text-3xl font-bold mb-8">Programs</h2>
      <ul>
        {programs.map((program, index) => (
          <li key={index} className="mb-4 text-md underline ">
            {program.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Programs;
