import React, { useState } from 'react';

interface Program {
  title: string;
  institution: string;
  location: string;
  country: string;
  image: string;
}

interface NewlyAddedProgramsProps {
  programs: Program[];
}

const NewlyAddedPrograms: React.FC<NewlyAddedProgramsProps> = ({ programs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const programsToShow = 4; // Number of programs to show at a time

  // Navigate to the next set of programs
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + programsToShow >= programs.length ? 0 : prevIndex + programsToShow
    );
  };

  // Navigate to the previous set of programs
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? programs.length - programsToShow : prevIndex - programsToShow
    );
  };

  return (
    <section className="py-16 bg-white text-center w-4/5 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Newly added law programs</h2>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs
            .slice(currentIndex, currentIndex + programsToShow)
            .map((program, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg p-4 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >
                {/* Program Institution Logo */}
                <img
                  src={program.image}
                  alt={program.institution}
                  className="w-full h-24 object-contain mb-4"
                />
                {/* Program Details */}
                <h3 className="text-lg font-semibold text-gray-800">{program.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{program.institution}</p>
                <p className="text-sm text-gray-500 flex items-center mt-2">
                  <span className="material-icons-outlined mr-1">location_on</span>
                  {program.location}, {program.country}
                </p>
                {/* More Information Button */}
                <p className="mt-4 text-red-500 font-semibold text-right">
                  More information <span className="inline-block transform rotate-45">→</span>
                </p>
              </div>
            ))}
        </div>

        {/* Carousel Buttons (Below the cards) */}
        <div className="flex justify-center mt-4">
          <button
            onClick={prev}
            className="bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100 mx-2"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100 mx-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewlyAddedPrograms;
