/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { setToLocalStorage } from "@/utils/local-storage";

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

  const handleFieldClick = (program: Program) => {
    const data = JSON.stringify({
      field: program.name,
    });
    setToLocalStorage("selectedOption", data);
  };

  // Limit to the first 10 programs
  const displayedPrograms = programs.slice(0, 10);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            {t("discoverTitle")}
          </h2>
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap hidden md:block">
            {t("discoverButton")}
          </button>
        </div>

        {/* Display only 10 programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedPrograms.map((program, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center p-6 border border-gray-300 bg-white hover:bg-gray-900 transition-all duration-300 text-center"
            >
              <div className="text-5xl text-blue-500 mb-4">{program.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 hover:text-white">
                {program.name}
              </h3>

              <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 overflow-hidden">
                <div className="overflow-y-scroll flex-grow hide-scrollbar"> {/* Updated to hide scrollbar */}
                  <ul className="space-y-1">
                    {program.fields.slice(0, 5).map((field, fieldIndex) => ( /* Limit to 5 items */
                      <li key={fieldIndex} className="text-sm">
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex justify-center items-center w-full">
                  <Link
                    href={`/master/discover-program/${program.id}`}
                    className="bg-white hover:bg-red-600 text-red-600 hover:text-white w-full rounded-2xl py-1 flex justify-center items-center font-bold"
                    onClick={() => handleFieldClick(program)}
                  >
                    <span>{t("seeAllButton")}</span>
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discover All Programs button for mobile, visible only on smaller screens */}
        {programs.length > 10 && (
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
