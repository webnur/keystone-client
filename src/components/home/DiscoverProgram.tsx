import React from "react";

interface Program {
  name: string;
  icon: string;
}

interface DiscoverProgramProps {
  programs: Program[];
}

const DiscoverProgram: React.FC<DiscoverProgramProps> = ({ programs }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Discover law programs by discipline
          </h2>
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200">
            View all disciplines
          </button>
        </div>

        {/* Grid of Law Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-8 border-[1px] border-foreground bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-5xl text-blue-500 mb-4">{program.icon}</div>
              {/* Program Name */}
              <h3 className="text-lg font-semibold text-gray-700">
                {program.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverProgram;
