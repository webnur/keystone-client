"use client";
import React from "react";
import Discover from "../icons/Discover";
import { useTranslations } from "next-intl";

const EducationJourney = () => {
  const t = useTranslations("masterPage");
  return (
    <section className="py-8 bg-white text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
        {t("jurnyTitle")}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        {/* Discover */}
        <div className="flex flex-col items-center w-full">
          <div className="rounded-full p-4 border border-gray-300 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 11a4 4 0 118 0 4 4 0 01-8 0zM8 11V8m4 11a7 7 0 100-14 7 7 0 000 14zm-5.2-7h.01M17.2 11h-.01M12 18h-.01M12 6h.01"
              />
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
              className="h-10 w-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18m-6 5h6"
              />
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
            <Discover width="32" height="32" />
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
