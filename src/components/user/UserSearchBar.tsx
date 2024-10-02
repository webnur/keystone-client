import React from "react";

const UserSearchBar = () => {
  return (
    <div className="container mx-auto flex items-center justify-center bg-gray-100">
      <div className="w-full  px-4">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12a4 4 0 118 0 4 4 0 01-8 0zM21 21l-4.35-4.35"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="What do you want to study?"
            className="px-3 py-4 w-full focus:outline-none"
          />
          <button className="bg-red-500 px-6 py-2 text-white flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12a4 4 0 118 0 4 4 0 01-8 0zM21 21l-4.35-4.35"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSearchBar;
