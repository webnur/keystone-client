'use client';
import React, { useState, useEffect } from "react";
import logo from "/public/images/logo/keystone-logo.png";
import Image from "next/image";
import Button from "../common/Button";
import CustomIcon from "../icons/CustomIcon";
import HeartIcon from "../icons/HeartIcon";
import GlobalIcon from "../icons/GlobalIcon";
import { useRouter } from "next/router";
import LanguageModal from "../common/LanguageModal";
import SearchModal from "../common/SearchModal";
import SearchIcon from "../icons/SearchIcon";
import Link from "next/link";

const Navbar = () => {
  const [heartCount, setHeartCount] = useState(0); // To store heart icon count
  const [showLanguageModal, setShowLanguageModal] = useState(false); // To toggle language modal
  const [showSearchModal, setShowSearchModal] = useState(false); // To toggle search modal
  const [isMounted, setIsMounted] = useState(false); // Ensure client-side rendering

  // Wait until the component is mounted to use `useRouter`
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // Initialize router only after component is mounted
  const router = isMounted ? useRouter() : null;

  

  return (
    <div className="w-full md:w-[90%] mx-auto flex justify-between items-center py-4">
      <div>
    <Link href="/">
    <Image
          className="w-full h-auto"
          src={logo}
          width={120} // Adjusted width for the logo
          height={40}  // Adjusted height for better proportions
          alt="logo"
        />
    </Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Global Icon */}
        <div className="relative cursor-pointer" onClick={() => setShowLanguageModal(true)}>
          <GlobalIcon className="w-5 h-5" />
        </div>

        {/* Search Icon */}
        <div className="relative cursor-pointer" onClick={() => setShowSearchModal(true)}>
          <SearchIcon className="w-5 h-5" />
        </div>

        {/* Heart Icon with count */}
        <div className="relative cursor-pointer" >
          <Link href="/saved-programs">
          <HeartIcon className="w-5 h-5" />
      
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
            {heartCount}
          </span>
          </Link>
        </div>

        {/* Custom Icon */}
        <CustomIcon className="w-5 h-5" />

        {/* Buttons for Sign In and Register */}
        <div className="flex gap-2 ml-6">
          <Button
            text="Sign in"
            className="bg-red-300 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 border-none px-4 py-2 rounded-md"
          />
          <Button
            text="Register"
            className="bg-red-300 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 px-4 py-2 rounded-md"
          />
        </div>
      </div>

      {/* Modals */}
      {showLanguageModal && (
        <LanguageModal onClose={() => setShowLanguageModal(false)} />
      )}
      {showSearchModal && (
        <SearchModal onClose={() => setShowSearchModal(false)} />
      )}
    </div>
  );
};

export default Navbar;
