"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaHome,
  FaEnvelope,
  FaHeart,
  FaChartBar,
  FaLightbulb,
  FaBook,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 py-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo or Branding */}
        <nav className="hidden md:flex items-center space-x-8 text-white text-sm">
          <Link
            href="/student-hub"
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
            href="/bookmarks"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaHeart className="mr-2" /> Saved Programs
          </Link>
          <Link
            href="/compare"
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
            href="/resources"
            className="flex items-center hover:text-red-500 transition"
          >
            <FaBook className="mr-2" /> Student Resources
          </Link>
        </nav>

        {/* Right Side - My Account */}
        <Link
          href="/my-account"
          className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
        >
          My Account
        </Link>

        {/* Mobile & Tablet Menu Toggle Button */}
        <div className="flex items-center md:hidden absolute top right-4 z-50">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 text-white px-4 py-4 space-y-4 absolute top-12 right-0 w-3/4 shadow-lg z-50">
          <Link
            href="/student-hub"
            className="block hover:text-red-500 transition"
            onClick={toggleMenu}
          >
            <FaHome className="inline-block mr-2" /> Dashboard
          </Link>
          <Link
            href="/browse-programs"
            className="block hover:text-red-500 transition"
            onClick={toggleMenu}
          >
            <FaBook className="inline-block mr-2" /> Browse Programs
          </Link>
          <Link
            href="/messages"
            className="block hover:text-red-500 transition"
            onClick={toggleMenu}
          >
            <FaEnvelope className="inline-block mr-2" /> Messages
          </Link>
          <Link
            href="/bookmarks"
            className="block hover:text-red-500 transition"
            onClick={toggleMenu}
          >
            <FaHeart className="inline-block mr-2" /> Saved Programs
          </Link>
          <Link
            href="/compare"
            className="block hover:text-red-500 transition"
            onClick={toggleMenu}
          >
            <FaChartBar className="inline-block mr-2" /> Compare Programs
          </Link>
          <Link
            href="/program-recommendations"
            className="block hover:text-red-500 transition"
            onClick={toggleMenu}
          >
            <FaLightbulb className="inline-block mr-2" /> Program
            Recommendations
          </Link>
          <Link
            href="/resources"
            className="block hover:text-red-500 transition"
            onClick={toggleMenu}
          >
            <FaBook className="inline-block mr-2" /> Student Resources
          </Link>
          <Link
            href="/my-account"
            className="block bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
            onClick={toggleMenu}
          >
            My Account
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
