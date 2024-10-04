"use client";
import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaHeart,
  FaChartBar,
  FaLightbulb,
  FaBook,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center space-x-8 text-white text-sm">
          <a
            href="/dashboard"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaHome className="mr-2" /> Dashboard
          </a>
          <a
            href="/browse-programs"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaBook className="mr-2" /> Browse Programs
          </a>
          <a
            href="/messages"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaEnvelope className="mr-2" /> Messages
          </a>
          <a
            href="/bookmarks"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaHeart className="mr-2" /> Saved Programs
          </a>
          <a
            href="/compare"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaChartBar className="mr-2" /> Compare Programs
          </a>
          <a
            href="/resources"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaLightbulb className="mr-2" /> Program Recommendations
          </a>
          <a
            href="/student-resources"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaBook className="mr-2" /> Student Resources
          </a>
        </nav>
        <a
          href="/my-account"
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
        >
          My Account
        </a>
      </div>
    </header>
  );
};

export default Header;
