"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Program {
  id: string; // Unique ID for routing
  name: string;
  icon: string;
  fields: string[];
}

interface DiscoverProgramProps {
  programs: Program[];
}

const MbaDiscoverProgram: React.FC<DiscoverProgramProps> = ({ programs }) => {
  const t = useTranslations("masterPage");
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            {t("discoverTitle")}
          </h2>
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
            View all disciplines
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center p-8 border border-gray-300 bg-white hover:bg-gray-900 transition-all duration-300 text-center"
            >
              <div className="text-5xl text-blue-500 mb-4">{program.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 hover:text-white">
                {program.name}
              </h3>

              <div className="absolute inset-0 bg-foreground text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="text-left">
                  <ul className="mb-4 space-y-1">
                    {program.fields.length > 0 ? (
                      program.fields.map((field, fieldIndex) => (
                        <li key={fieldIndex} className="text-sm">
                          {field}
                        </li>
                      ))
                    ) : (
                      <li>Loading fields...</li>
                    )}
                  </ul>
                </div>

                <div className="flex justify-center items-center w-full mx-auto">
                  <Link
                    href={`/mba/discover-program/${program.id}`} // Dynamic routing with program ID
                    className="bg-white hover:bg-red-600 text-red-600 hover:text-white w-full rounded-2xl py-1 flex justify-evenly items-center font-bold"
                  >
                    <span>See All Fields</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MbaDiscoverProgram;
