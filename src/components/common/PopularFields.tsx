import React from "react";
import { subjectsData } from "./MockData";
import { setToLocalStorage } from "@/utils/local-storage";
import Link from "next/link";

const PopularFields: React.FC = () => {
  const handleFieldClick = (subjectName: string, fields: string | string[]) => {
    const data = JSON.stringify({ subject: subjectName, fields });
    setToLocalStorage("selectedField", data);
  };

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
                <Link
                  key={i}
                  href="/master/discover-program/computer-science"
                  onClick={() => handleFieldClick(subject.name, field)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition-colors duration-300 inline-block"
                >
                  {field}
                </Link>
              ))}
              <Link
                href="/master/discover-program/computer-science"
                onClick={() => handleFieldClick(subject.name, subject.fields)} // Pass all fields to handleFieldClick
                className="text-red-600 hover:text-red-700 border border-red-600 hover:border-red-700 py-2 px-4 rounded-full transition-colors duration-300 inline-block"
              >
                See all in {subject.name} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularFields;
