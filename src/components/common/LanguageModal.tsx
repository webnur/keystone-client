"use client";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import LocaleSwitcherSelect from "../LocaleSwitcherSelect";

interface LanguageModalProps {
  onClose: () => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <IoCloseSharp className="w-6 h-6 text-gray-600 hover:text-gray-800" />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Select Your Language
        </h2>

        {/* Suggested language */}
        <div className="mb-4">
          <p className="font-bold mb-2">Suggested for you</p>
          <div className="border p-2 rounded bg-red-100 text-red-600">
            English (US)
          </div>
        </div>

        {/* Scrollable language list */}
        <div className="mb-4 h-64 overflow-y-auto">
          <p className="font-bold mb-2">All languages</p>
          <div className="grid grid-cols-3 gap-2">
            <LocaleSwitcherSelect></LocaleSwitcherSelect>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
