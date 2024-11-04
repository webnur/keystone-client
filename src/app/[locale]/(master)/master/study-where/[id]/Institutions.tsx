import Link from "next/link";
import React from "react";

const Institutions: React.FC = () => {
  const institutions = [
    "Hochschule München University of Applied Sciences",
    "University of Applied Sciences Wedel",
    "EIT RawMaterials Academy - ENTER",
    "Pädagogische Hochschule Freiburg",
    "University of Hamburg",
    "University of Hamburg, Faculty of Business, Economics and Social Sciences",
    "Hochschule Worms University of Applied Sciences",
    "XU Exponential University of Applied Sciences",
    "EIT RawMaterials Academy - RaVeN",
    "University of Oldenburg - Department of Computing Science",
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white container mx-auto lg:ml-12 px-6 shadow-md rounded-sm">
      <h2 className="md:text-3xl text-2xl font-semibold mb-6">Institutions</h2>
      <ul className="text-left">
        {institutions.map((institution, index) => (
          <li key={index} className="mb-3 text-sm sm:text-base">
            <Link
              href="#"
              className="text-gray-800 hover:text-red-600 transition-colors underline"
            >
              {institution}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-center mt-10">
        <button className="bg-red-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-medium hover:bg-red-600 transition-all">
          All Institutions in Germany
        </button>
      </div>
    </section>
  );
};

export default Institutions;
