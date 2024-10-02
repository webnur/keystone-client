import React from "react";

const MessagesAndSavedPrograms = () => {
  return (
    <div className="container mx-auto min-h-screen bg-gray-100 flex items-start justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Messages Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold">Messages</h2>
            <a href="#" className="text-red-500 text-sm hover:underline">
              See All &rarr;
            </a>
          </div>
          <p className="text-gray-600">
            You don’t have any messages yet. To start your communication with
            institutions, visit the Browse Programs or Program Recommendations
            sections and request information for the programs that interest you.
            Your details will be immediately sent to the institutions and their
            admissions teams will follow up with you directly.
          </p>
        </div>

        {/* Saved Programs Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold">Saved Programs</h2>
            <a href="#" className="text-red-500 text-sm hover:underline">
              See All &rarr;
            </a>
          </div>
          <ul>
            <li className="mb-4">
              <h3 className="text-red-500 font-medium">
                Japanese Management Style Summer Course
              </h3>
              <p className="text-sm text-gray-500">
                J.F. Oberlin University Summer Session
              </p>
              <p className="text-sm text-gray-500 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2c2.485 0 4.768 1.007 6.364 2.636A8.958 8.958 0 0121 12c0 2.485-1.007 4.768-2.636 6.364A8.958 8.958 0 0112 21a8.958 8.958 0 01-6.364-2.636A8.958 8.958 0 013 12c0-2.485 1.007-4.768 2.636-6.364A8.958 8.958 0 0112 2z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10l-3 3m0 0l3 3m0-6l3 3m0 0l-3 3"
                  ></path>
                </svg>
                Tokyo, Japan
              </p>
            </li>
            <li className="mb-4">
              <h3 className="text-red-500 font-medium">
                Asian Business Cases Summer Course
              </h3>
              <p className="text-sm text-gray-500">
                J.F. Oberlin University Summer Session
              </p>
              <p className="text-sm text-gray-500 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2c2.485 0 4.768 1.007 6.364 2.636A8.958 8.958 0 0121 12c0 2.485-1.007 4.768-2.636 6.364A8.958 8.958 0 0112 21a8.958 8.958 0 01-6.364-2.636A8.958 8.958 0 013 12c0-2.485 1.007-4.768 2.636-6.364A8.958 8.958 0 0112 2z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10l-3 3m0 0l3 3m0-6l3 3m0 0l-3 3"
                  ></path>
                </svg>
                Tokyo, Japan
              </p>
            </li>
            <li>
              <h3 className="text-red-500 font-medium">
                Japanese Culture Summer Course
              </h3>
              <p className="text-sm text-gray-500">
                J.F. Oberlin University Summer Session
              </p>
              <p className="text-sm text-gray-500 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2c2.485 0 4.768 1.007 6.364 2.636A8.958 8.958 0 0121 12c0 2.485-1.007 4.768-2.636 6.364A8.958 8.958 0 0112 21a8.958 8.958 0 01-6.364-2.636A8.958 8.958 0 013 12c0-2.485 1.007-4.768 2.636-6.364A8.958 8.958 0 0112 2z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10l-3 3m0 0l3 3m0-6l3 3m0 0l-3 3"
                  ></path>
                </svg>
                Tokyo, Japan
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessagesAndSavedPrograms;
