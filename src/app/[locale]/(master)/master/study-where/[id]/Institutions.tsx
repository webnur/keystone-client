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
    <section className="py-16 bg-white container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Institutions</h2>
      <ul className="text-left">
        {institutions.map((institution, index) => (
          <li key={index} className="mb-4 text-md">
            <Link
              href="#"
              className="text-gray-800 hover:text-red-800 transition-colors underline"
            >
              {institution}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600">
          All Institutions in Germany
        </button>
      </div>
    </section>
  );
};

export default Institutions;
