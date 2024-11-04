import React from "react";
import Discover from "../icons/Discover";
import { useTranslations } from "next-intl";

const EducationJourney = () => {
  const t = useTranslations("masterPage");
  return (
    <section className="py-8 bg-white text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl text-left md:text-center md:px-0 px-0 md:text-3xl font-bold mb-6 md:mb-8 text-neutral-600">
        {t("jurnyTitle")}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        {/* Discover */}
        <div className="flex flex-col items-center w-full">
          <div className="rounded-full p-4 border border-gray-300 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-10 md:w-10 h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className="mt-3 text-lg md:text-xl font-semibold">
            {t("discover")}
          </h3>
          <p className="text-gray-500 mt-1 text-sm md:text-base w-4/5 md:w-3/5 mx-auto">
            {t("discoverDetails")}
          </p>
        </div>

        {/* Compare */}
        <div className="flex flex-col items-center w-full">
          <div className="rounded-full p-4 border border-gray-300 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-10 md:w-10 h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="13" rx="1" />
              <rect x="14" y="3" width="7" height="13" rx="1" />
              <line x1="3" y1="18" x2="10" y2="18" />
              <line x1="14" y1="18" x2="21" y2="18" />
              <line x1="3" y1="21" x2="10" y2="21" />
              <line x1="14" y1="21" x2="21" y2="21" />
            </svg>
          </div>
          <h3 className="mt-3 text-lg md:text-xl font-semibold">
            {t("compare")}
          </h3>
          <p className="text-gray-500 mt-1 text-sm md:text-base w-4/5 md:w-3/5 mx-auto">
            {t("compareDetails")}
          </p>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-center w-full">
          <div className="rounded-full p-4 border border-gray-300 bg-white">
            <Discover className="md:h-10 md:w-10 h-8 w-8 text-gray-600" />
          </div>
          <h3 className="mt-3 text-lg md:text-xl font-semibold">
            {t("connect")}
          </h3>
          <p className="text-gray-500 mt-1 text-sm md:text-base w-4/5 md:w-3/5 mx-auto">
            {t("contentDetails")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;
