/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/logo/keystone-logo.png";
import Image from "next/image";
import Button from "../common/Button";
import CustomIcon from "../icons/Compare";
import HeartIcon from "../icons/HeartIcon";
import GlobalIcon from "../icons/GlobalIcon";
import { useRouter } from "next/router";
import LanguageModal from "../common/LanguageModal";
import SearchModal from "../common/SearchModal";
import Link from "next/link";
import SearchIcon from "../icons/searchIcon";

const Navbar = () => {
  const [heartCount, setHeartCount] = useState(0);
  const [customCount, setCustomCount] = useState(0);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = isMounted ? useRouter() : null;

  // Close menu when clicking outside or on a menu item
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".mobile-menu") && !target.closest(".hamburger")) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white w-full md:w-[90%] mx-auto flex justify-between items-center md:py-4 py-2 relative">
      <div className="flex justify-between w-full">
        {/* Logo with left margin and responsive size */}
        <div className="ml-4 md:ml-0 mt-2">
          <Link href="/">
            <Image
              className="w-32 h-auto md:w-[160px]" // Reduced logo size for mobile, regular size for larger screens
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        {/* Hamburger Menu with right margin */}
        <div className="md:hidden flex items-center mr-4">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Main Menu */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowLanguageModal(true)}
          >
            <GlobalIcon className="w-4 h-4" />
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => setShowSearchModal(true)}
          >
            <SearchIcon className="w-4 h-4" />
          </div>

          <div className="relative cursor-pointer">
            <Link href="/saved-programs">
              <div className="relative cursor-pointer">
                <HeartIcon className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                  {heartCount}
                </span>
              </div>
            </Link>
          </div>

          <div className="relative cursor-pointer">
            <Link href="/compare-programes">
              <div className="relative cursor-pointer">
                <CustomIcon className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                  {customCount}
                </span>
              </div>
            </Link>
          </div>

          <div className="flex gap-2 ml-4">
            <Link href="/login">
              <Button
                text="Sign in"
                className="bg-red-100 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 border-none px-3 py-1.5 rounded-md"
              />
            </Link>
            <Link href="/signup">
              <Button
                text="Register"
                className="bg-red-100 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 px-3 py-1.5 rounded-md"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full right-0 w-[70%] bg-white shadow-lg mobile-menu transition-transform p-4`}
      >
        <div className="flex flex-col gap-6">
          {/* Language Button */}
          <button
            className="flex items-center gap-2 text-gray-700 hover:text-red-500"
            onClick={() => {
              setShowLanguageModal(true);
              setIsMobileMenuOpen(false);
            }}
          >
            <GlobalIcon className="w-5 h-5" />
            <span>Language</span>
          </button>

          <Link
            href="/saved-programs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative cursor-pointer flex items-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>Saved Programs</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                {heartCount}
              </span>
            </div>
          </Link>

          <Link
            href="/compare-programes"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative cursor-pointer flex items-center gap-2">
              <CustomIcon className="w-4 h-4" />
              <span>Compare Programs</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                {customCount}
              </span>
            </div>
          </Link>

          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              text="Sign in"
              className="bg-red-100 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 border-none px-4 py-2 rounded-md w-full"
            />
          </Link>

          <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              text="Register"
              className="bg-red-100 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 px-4 py-2 rounded-md w-full"
            />
          </Link>
        </div>
      </div>

      {showLanguageModal && (
        <LanguageModal onClose={() => setShowLanguageModal(false)} />
      )}
      {showSearchModal && (
        <SearchModal onClose={() => setShowSearchModal(false)} />
      )}
    </nav>
  );
};

export default Navbar;
