import React from "react";
import { FaBed, FaPlug, FaWifi, FaBusAlt, FaHamburger, FaFilm, FaBeer } from "react-icons/fa";

const ChangeCurrency: React.FC = () => {
  return (
    <section className="py-16 bg-white container mx-auto">
      {/* Currency Selector */}
      <div className="w-full flex justify-start mb-8">
        <div className="flex flex-col items-start">
          <label htmlFor="currency" className="text-lg font-medium mb-2 text-gray-700">
            Change currency
          </label>
          <select
            id="currency"
            name="currency"
            className="p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Basic monthly living cost</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaBed className="text-5xl text-gray-700 mb-4" />
          <p className="font-semibold">Rent in a shared flat</p>
          <p className="text-2xl">507</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPlug className="text-5xl text-gray-700 mb-4" />
          <p className="font-semibold">Share of utilities</p>
          <p className="text-2xl">91</p>
        </div>
        <div className="flex flex-col items-center">
          <FaWifi className="text-5xl text-gray-700 mb-4" />
          <p className="font-semibold">Internet subscription</p>
          <p className="text-2xl">43</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBusAlt className="text-5xl text-gray-700 mb-4" />
          <p className="font-semibold">Local transportation</p>
          <p className="text-2xl">60</p>
        </div>
      </div>

      {/* Sample Lifestyle Cost */}
      <div className="text-center mt-12 mb-8">
        <h2 className="text-3xl font-bold">Sample lifestyle cost</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaHamburger className="text-5xl text-gray-700 mb-4" />
          <p className="font-semibold">Fast food combo</p>
          <p className="text-2xl">9</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFilm className="text-5xl text-gray-700 mb-4" />
          <p className="font-semibold">Cinema ticket</p>
          <p className="text-2xl">12</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBeer className="text-5xl text-gray-700 mb-4" />
          <p className="font-semibold">Pint of local beer</p>
          <p className="text-2xl">4</p>
        </div>
      </div>
    </section>
  );
};

export default ChangeCurrency;
