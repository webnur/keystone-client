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

const MasterDiscoverProgram: React.FC<DiscoverProgramProps> = ({
  programs,
}) => {
  const t = useTranslations("masterPage");
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            {t("discoverTitle")}
          </h2>
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
            {t("discoverButton")}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center p-6 border border-gray-300 bg-white hover:bg-gray-900 transition-all duration-300 text-center"
            >
              <div className="text-5xl text-blue-500 mb-4">{program.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 hover:text-white">
                {program.name}
              </h3>

              <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 overflow-hidden">
                <div className="overflow-y-auto flex-grow">
                  <ul className="space-y-1">
                    {program.fields.length > 0 ? (
                      program.fields.map((field, fieldIndex) => (
                        <li key={fieldIndex} className="text-sm">
                          {field}
                        </li>
                      ))
                    ) : (
                      <li>{t("loadingFields")}</li>
                    )}
                  </ul>
                </div>

                <div className="mt-4 flex justify-center items-center w-full">
                  <Link
                    href={`/master/discover-program/${program.id}`}
                    className="bg-white hover:bg-red-600 text-red-600 hover:text-white w-full rounded-2xl py-1 flex justify-center items-center font-bold"
                  >
                    <span>{t("seeAllButton")}</span>
                    <span className="ml-2">→</span>
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

export default MasterDiscoverProgram;
