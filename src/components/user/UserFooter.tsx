import Image from "next/image";
import React from "react";
import FooterLogo from "../../../public/images/logo/footer-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const UserFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <Image
              src={FooterLogo}
              width={100}
              height={100}
              alt="Keystone Logo"
              className="w-[200px]"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-gray-400"
              aria-label="Facebook"
            >
              <FaFacebookF size="24" />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-white hover:text-gray-400"
              aria-label="Twitter"
            >
              <FaTwitter size="24" />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-gray-400"
              aria-label="Instagram"
            >
              <FaInstagram size="24" />
            </a>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a href="/about-us" className="text-white hover:text-gray-400">
            About Us
          </a>
          <a href="/contact-us" className="text-white hover:text-gray-400">
            Contact Us
          </a>
          <a
            href="/terms-and-conditions"
            className="text-white hover:text-gray-400"
          >
            Terms and Conditions
          </a>
          <a href="/privacy" className="text-white hover:text-gray-400">
            Privacy
          </a>
        </div>

        {/* Right Section: Language Selector */}
        <div className="flex flex-col items-center md:items-end">
          <label htmlFor="language" className="mb-2 text-sm">
            Select Language
          </label>
          <select
            id="language"
            className="bg-gray-700 text-white border-none p-2 rounded-md"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
