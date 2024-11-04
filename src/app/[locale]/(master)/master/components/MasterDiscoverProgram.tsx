/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { setToLocalStorage } from "@/utils/local-storage";
import { useState } from "react";

interface Program {
  id: string;
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
  const [showAll, setShowAll] = useState(false);
  const [showDiscoverButton, setShowDiscoverButton] = useState(false);

  const handleFieldClick = (program: Program) => {
    const data = JSON.stringify({
      field: program.name,
    });
    setToLocalStorage("selectedOption", data);
  };

  const handleViewMore = () => {
    setShowAll(true);
    setShowDiscoverButton(true);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <h2 className="text-[1.4rem] md:text-3xl font-bold text-left md:text-left text-neutral-700">
            {t("discoverTitle")}
          </h2>
          <div className="hidden md:flex space-x-4">
            {!showAll && programs.length > 6 && (
              <button
                onClick={handleViewMore}
                className="bg-red-100 text-red-500 hover:bg-red-600 hover:text-white px-6 py-2 rounded-lg transition duration-200 font-semibold"
              >
                {t("viewMoreDisciplines")}
              </button>
            )}
            {showDiscoverButton && (
              <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
                {t("discoverButton")}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-center items-center md:p-6 p-3 border border-gray-300 bg-white hover:bg-gray-900 transition-all duration-300 text-center
                ${!showAll && `
                  ${index >= 6 ? 'hidden md:hidden lg:block' : ''} 
                  ${index >= 10 ? 'lg:hidden' : ''}
                `}`}
              style={{ minHeight: "200px" }}
            >
              <div className="md:text-5xl text-3xl text-blue-500 mb-4">{program.icon}</div>
              <h3 className="md:text-lg text-sm font-semibold text-gray-700 hover:text-white">
                {program.name}
              </h3>

              <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between md:p-4 p-3 overflow-hidden">
                <div className="overflow-y-auto flex-grow">
                  <ul className="space-y-1">
                    {program.fields.length > 0 ? (
                      program.fields.map((field, fieldIndex) => (
                        <li key={fieldIndex} className="md:text-sm text-xs">
                          {field}
                        </li>
                      ))
                    ) : (
                      <li>{t("loadingFields")}</li>
                    )}
                  </ul>
                </div>

                <div className="md:mt-4 mt-2 flex justify-center items-center w-full">
                  <Link
                    href={`/master/discover-program/${program.id}`}
                    className="bg-white hover:bg-red-600 text-red-600 md:text-sm text-xs hover:text-white w-full rounded-2xl py-1 flex justify-center items-center font-bold"
                    onClick={() => handleFieldClick(program)}
                  >
                    {t("seeAllButton")} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && programs.length > 6 && (
          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={handleViewMore}
              className="bg-red-100 text-red-500 hover:bg-red-600 hover:text-white px-6 py-2 rounded-lg transition duration-200 font-semibold"
            >
              {t("viewMoreDisciplines")}
            </button>
          </div>
        )}

        {showDiscoverButton && (
          <div className="flex justify-center mt-4 md:hidden">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200">
              {t("discoverButton")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MasterDiscoverProgram;
