import React from "react";

interface Program {
  name: string;
  icon: string;
  fields: string[];
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
            Discover technology programs by discipline
          </h2>
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200">
            View all disciplines
          </button>
        </div>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center p-8 border border-gray-300 bg-white hover:bg-gray-900 transition-all duration-300 text-center"
            >
              {/* Icon and Default View */}
              <div className="text-5xl text-blue-500 mb-4">{program.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 hover:text-white">
                {program.name}
              </h3>

              {/* Hover effect with details */}
              <div className="absolute inset-0 bg-gray-600 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8">
                {/* Top-centered content */}
                <div className="flex flex-col justify-start items-center">
                  <ul className="text-center mb-4">
                    {/* {program.fields.map((field, fieldIndex) => (
                      <li key={fieldIndex} className="text-sm">
                        {field}
                      </li>
                    ))} */}
                    <li className="text-sm">option 1</li>
                    <li className="text-sm">option 1</li>
                    <li className="text-sm">option 1</li>
                    <li className="text-sm">option 1</li>
                  </ul>
                </div>

                {/* Bottom-centered button */}
                <div className="flex justify-center items-center">
                  <button className="bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-600 hover:text-white  transition duration-200">
                    See all fields{" "}
                    <span className="inline-block transform ">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverProgram;
