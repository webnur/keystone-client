import React from "react";
import { subjectsData } from "./MockData";

const PopularFields: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white w-full mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left w-11/12 mx-auto">
        Most Popular Fields
      </h2>
      <div className="flex flex-col gap-10 w-11/12 mx-auto">
        {Object.entries(subjectsData).map(([, subject], index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-left">
              {subject.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {subject.fields.map((field, i) => (
                <button
                  key={i}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
                >
                  {field}
                </button>
              ))}
              <button className="text-red-600 hover:text-red-700 border border-red-600 hover:border-red-700 py-2 px-4 rounded-full transition-colors duration-300">
                See all in {subject.name} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularFields;
