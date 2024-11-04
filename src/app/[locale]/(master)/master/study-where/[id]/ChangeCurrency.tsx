import React from "react";
import {
  FaBed,
  FaPlug,
  FaWifi,
  FaBusAlt,
  FaHamburger,
  FaFilm,
  FaBeer,
} from "react-icons/fa";

const ChangeCurrency: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-white max-w-6xl mx-auto">
      {/* Currency Selector */}
      <div className="w-full flex justify-start mb-6">
        <div className="flex flex-col items-start">
          <label
            htmlFor="currency"
            className="text-sm sm:text-base font-medium mb-2 text-gray-700 ml-6 lg:ml-14"
          >
            Change currency
          </label>
          <select
            id="currency"
            name="currency"
            className="p-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-400 ml-6 lg:ml-14"
            defaultValue="EUR"
          >
            <option value="EUR">EUR (Euro)</option>
            <option value="USD">USD (US Dollar)</option>
            <option value="GBP">GBP (British Pound)</option>
            <option value="JPY">JPY (Japanese Yen)</option>
          </select>
        </div>
      </div>

      {/* Basic Monthly Living Cost */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Basic monthly living cost</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div className="flex flex-col items-center">
          <FaBed className="text-2xl sm:text-3xl text-gray-700 mb-2" />
          <p className="font-semibold text-xs sm:text-sm">Rent in a shared flat</p>
          <p className="text-lg sm:text-xl">507</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPlug className="text-2xl sm:text-3xl text-gray-700 mb-2" />
          <p className="font-semibold text-xs sm:text-sm">Share of utilities</p>
          <p className="text-lg sm:text-xl">91</p>
        </div>
        <div className="flex flex-col items-center">
          <FaWifi className="text-2xl sm:text-3xl text-gray-700 mb-2" />
          <p className="font-semibold text-xs sm:text-sm">Internet subscription</p>
          <p className="text-lg sm:text-xl">43</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBusAlt className="text-2xl sm:text-3xl text-gray-700 mb-2" />
          <p className="font-semibold text-xs sm:text-sm">Local transportation</p>
          <p className="text-lg sm:text-xl">60</p>
        </div>
      </div>

      {/* Sample Lifestyle Cost */}
      <div className="text-center mt-8 mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Sample lifestyle cost</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div className="flex flex-col items-center">
          <FaHamburger className="text-2xl sm:text-3xl text-gray-700 mb-2" />
          <p className="font-semibold text-xs sm:text-sm">Fast food combo</p>
          <p className="text-lg sm:text-xl">9</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFilm className="text-2xl sm:text-3xl text-gray-700 mb-2" />
          <p className="font-semibold text-xs sm:text-sm">Cinema ticket</p>
          <p className="text-lg sm:text-xl">12</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBeer className="text-2xl sm:text-3xl text-gray-700 mb-2" />
          <p className="font-semibold text-xs sm:text-sm">Pint of local beer</p>
          <p className="text-lg sm:text-xl">4</p>
        </div>
      </div>
    </section>
  );
};

export default ChangeCurrency;
