"use client";
import Link from "next/link";
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
          <Link
            href="/dashboard"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaHome className="mr-2" /> Dashboard
          </Link>
          <Link
            href="/browse-programs"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaBook className="mr-2" /> Browse Programs
          </Link>
          <Link
            href="/messages"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaEnvelope className="mr-2" /> Messages
          </Link>
          <Link
            href="/saved-programs"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaHeart className="mr-2" /> Saved Programs
          </Link>
          <Link
            href="/compare-programs"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaChartBar className="mr-2" /> Compare Programs
          </Link>
          <Link
            href="/program-recommendations"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaLightbulb className="mr-2" /> Program Recommendations
          </Link>
          <Link
            href="/student-resources"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaBook className="mr-2" /> Student Resources
          </Link>
        </nav>
        <Link
          href="/my-account"
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
        >
          My Account
        </Link>
      </div>
    </header>
  );
};

export default Header;
