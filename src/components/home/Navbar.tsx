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

  const router = isMounted ? useRouter() : null;

  return (
    <div className="bg-white w-full md:w-[90%] mx-auto flex justify-between items-center py-4">
      <div>
        <Link href="/">
          <Image
            className="w-full h-auto"
            src={logo}
            width={160}
            height={50}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center gap-3">
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
              <span className="absolute bottom-2 left-3 text-[12px] text-red-600 font-semibold">
                {heartCount}
              </span>
            </div>
          </Link>
        </div>

        <div className="relative cursor-pointer">
          <Link href="/compare-programes">
            <div className="relative cursor-pointer">
              <CustomIcon className="w-4 h-4" />
              <span className="absolute bottom-2 left-3 text-[12px] text-red-600 font-semibold">
                {customCount}
              </span>
            </div>
          </Link>
        </div>

        <div className="flex gap-2 ml-4">
          <Button
            text="Sign in"
            className="bg-red-100 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 border-none px-3 py-1.5 rounded-md"
          />
          <Button
            text="Register"
            className="bg-red-100 text-red-500 hover:text-red-100 font-semibold hover:bg-red-700 px-3 py-1.5 rounded-md"
          />
        </div>
      </div>

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
