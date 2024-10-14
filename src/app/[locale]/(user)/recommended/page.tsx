import Image from "next/image";
import React from "react";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaClock,
  FaRegCalendarAlt,
  FaLanguage,
  FaBuilding,
  FaPhone,
} from "react-icons/fa";

const RecommendedPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Personalized Program Recommendations */}
        <h2 className="text-xl font-bold mb-4">
          Personalized Program Recommendations
        </h2>
        <p className="text-sm mb-6">
          Based on your interests, we recommend the programs below.
        </p>

        {/* Selection buttons */}
        <div className="flex items-center mb-6">
          <button className="flex items-center border border-gray-300 px-4 py-2 rounded-lg mr-4">
            <input type="checkbox" className="mr-2" /> Select all programs (1)
          </button>
          <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg">
            Connect with all 1 schools
          </button>
        </div>

        {/* Program card */}
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 border">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-red-600 font-bold text-lg">
                  Canadian Integrated Airline Transport Pilot Licence
                </h3>
                <p className="text-gray-600">Centennial College</p>
              </div>
              <div className="flex items-center">
                <p className="text-green-500 font-bold text-right">
                  100% match
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between items-center">
                {/* Location Icon */}
                <div className="whitespace-nowrap">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <p>Toronto, Canada</p>
                </div>

                <div>
                  <Image
                    src="https://i.ibb.co.com/LgTtqHb/146631-photo-1543269865-cbf427effbad.jpg"
                    alt="Centennial College"
                    className="w-[150px] h-auto"
                    width={170}
                    height={70}
                  />
                </div>
              </div>

              <div className="flex justify-between py-5">
                {/* Graduate Certificate Icon */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 whitespace-nowrap">
                  <FaGraduationCap className="text-gray-500" />
                  <p>Graduate Certificate</p>
                </div>

                {/* Full-time Icon */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 whitespace-nowrap">
                  <FaClock className="text-gray-500" />
                  <p>Full time</p>
                </div>

                {/* Semesters Icon */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 whitespace-nowrap">
                  <FaRegCalendarAlt className="text-gray-500" />
                  <p>2 - 3 Semesters</p>
                </div>

                {/* Campus Icon */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 whitespace-nowrap">
                  <FaBuilding className="text-gray-500" />
                  <p>Campus</p>
                </div>

                {/* Language Icon */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 whitespace-nowrap">
                  <FaLanguage className="text-gray-500" />
                  <p>English</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Have you always wanted to soar through the open skies? Then this
              is the program for you! The Canadian Integrated Airline Transport
              Pilot Licence program is the choice for those who ...
            </p>

            <a href="#" className="text-red-600 text-sm mb-6 inline-block">
              Read a more detailed description
            </a>

            {/* Connect button aligned right */}
            <div className="flex justify-end mt-4">
              <button className="bg-red-50 text-red-600 py-2 px-6 rounded-lg flex items-center">
                <FaPhone className="mr-2" />
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Browse more programs button */}
        <div className="text-center">
          <button className="bg-red-600 text-white py-3 px-6 rounded-lg">
            Browse more programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedPage;
