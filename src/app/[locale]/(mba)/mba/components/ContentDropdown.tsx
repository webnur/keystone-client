"use client";
import { useState } from "react";

interface Countries {
  [continent: string]: string[];
}

interface OpenDropdown {
  [continent: string]: boolean;
}

const ContinentDropdown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>({
    africa: false,
    asia: false,
  });

  const toggleDropdown = (continent: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [continent]: !prev[continent],
    }));
  };

  const countries: Countries = {
    africa: [
      "Algeria",
      "Angola",
      "Benin",
      "Botswana",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Comoros",
      "Congo (Congo-Brazzaville)",
      "Democratic Republic of the Congo",
      "Djibouti",
      "Egypt",
      "Equatorial Guinea",
      "Eritrea",
      "Eswatini (Swaziland)",
      "Ethiopia",
      "Gabon",
      "Gambia",
      "Ghana",
      "Guinea",
      "Guinea-Bissau",
      "Ivory Coast",
      "Kenya",
      "Lesotho",
      "Liberia",
      "Libya",
      "Madagascar",
      "Malawi",
      "Mali",
      "Mauritania",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Niger",
      "Nigeria",
      "Rwanda",
      "Sao Tome and Principe",
      "Senegal",
      "Seychelles",
      "Sierra Leone",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Sudan",
      "Tanzania",
      "Togo",
      "Tunisia",
      "Uganda",
      "Zambia",
      "Zimbabwe",
    ],
    asia: [
      "Azerbaijan",
      "Bahrain",
      "China",
      "India",
      "Indonesia",
      "Israel",
      "Japan",
      "Kazakhstan",
      "Kuwait",
      "Lebanon",
      "Malaysia",
      "Myanmar",
      "Oman",
      "Philippines",
      "Qatar",
      "Saudi Arabia",
      "South Korea",
      "Thailand",
      "United Arab Emirates",
    ],

    centralAmericaAndCaribbean: [
      "Belize",
      "Costa Rica",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Nicaragua",
      "Panama",
      "Antigua and Barbuda",
      "Bahamas",
      "Barbados",
      "Cuba",
      "Dominica",
      "Dominican Republic",
      "Grenada",
      "Haiti",
      "Jamaica",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Trinidad and Tobago",
    ],
    europe: [
      "Albania",
      "Andorra",
      "Armenia",
      "Austria",
      "Azerbaijan",
      "Belarus",
      "Belgium",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Kazakhstan",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "North Macedonia",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "Ukraine",
      "United Kingdom",
      "Vatican City",
    ],
    northAmerica: [
      "Canada",
      "Mexico",
      "United States",
      "Antigua and Barbuda",
      "Bahamas",
      "Barbados",
      "Belize",
      "Costa Rica",
      "Cuba",
      "Dominica",
      "Dominican Republic",
      "El Salvador",
      "Grenada",
      "Guatemala",
      "Haiti",
      "Honduras",
      "Jamaica",
      "Nicaragua",
      "Panama",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Trinidad and Tobago",
    ],
    oceania: [
      "Australia",
      "Fiji",
      "Kiribati",
      "Marshall Islands",
      "Micronesia",
      "Nauru",
      "New Zealand",
      "Palau",
      "Papua New Guinea",
      "Samoa",
      "Solomon Islands",
      "Tonga",
      "Tuvalu",
      "Vanuatu",
    ],
    southAmerica: [
      "Argentina",
      "Bolivia",
      "Brazil",
      "Chile",
      "Colombia",
      "Ecuador",
      "Guyana",
      "Paraguay",
      "Peru",
      "Suriname",
      "Uruguay",
      "Venezuela",
    ],
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);

  const allCountries = Object.values(countries).flat();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setFilteredCountries([]);
    } else {
      const filtered = allCountries.filter((country) =>
        country.toLowerCase().includes(value)
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold mb-4">Browse Study Locations</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Start typing to filter the list below"
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 w-full border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Filtered Country List */}
        <div className="mt-4 text-left">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <p
                key={index}
                className="py-1 text-gray-700 border-b border-gray-200"
              >
                {country}
              </p>
            ))
          ) : searchTerm ? (
            <p className="text-gray-500">No countries found</p>
          ) : (
            <p className="text-gray-500">Start typing to filter the list</p>
          )}
        </div>
      </div>

      {/* Africa Dropdown */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown("africa")}
          className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
        >
          Africa
          <span>
            {openDropdown.africa ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdown.africa ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {countries.africa.map((country, index) => (
              <p key={index} className="text-red-600 py-1">
                {country}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Asia Dropdown */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown("asia")}
          className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
        >
          Asia
          <span>
            {openDropdown.asia ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdown.asia ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {countries.asia.map((country, index) => (
              <p key={index} className="text-red-600 py-1">
                {country}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* centralAmericaAndCaribbean */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown("centralAmericaAndCaribbean")}
          className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
        >
          Central America And Caribbean
          <span>
            {openDropdown.centralAmericaAndCaribbean ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdown.centralAmericaAndCaribbean ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {countries.centralAmericaAndCaribbean.map((country, index) => (
              <p key={index} className="text-red-600 py-1">
                {country}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Europe */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown("europe")}
          className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
        >
          Europe
          <span>
            {openDropdown.europe ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdown.europe ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {countries.europe.map((country, index) => (
              <p key={index} className="text-red-600 py-1">
                {country}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* North America */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown("northAmerica")}
          className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
        >
          North America
          <span>
            {openDropdown.northAmerica ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdown.northAmerica ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {countries.northAmerica.map((country, index) => (
              <p key={index} className="text-red-600 py-1">
                {country}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* oceania */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown("oceania")}
          className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
        >
          Oceania
          <span>
            {openDropdown.oceania ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdown.oceania ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {countries.oceania.map((country, index) => (
              <p key={index} className="text-red-600 py-1">
                {country}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={() => toggleDropdown("southAmerica")}
          className="flex justify-between w-full px-4 py-2 text-lg font-semibold text-black bg-white border-b-2 border-gray-300 focus:outline-none"
        >
          South America
          <span>
            {openDropdown.southAmerica ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdown.southAmerica ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {countries.southAmerica.map((country, index) => (
              <p key={index} className="text-red-600 py-1">
                {country}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinentDropdown;
