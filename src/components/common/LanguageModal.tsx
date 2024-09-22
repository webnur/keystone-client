'use client';
import React from "react";

interface LanguageModalProps {
  onClose: () => void;
}

const languages = [
  "English (US)", "Deutsch", "English (South Africa)", "Español (Colombia)",
  "Français", "Melayu", "Polski", "Português", "Svenska", "Ελληνικά",
  "Bahasa Indonesia", "Dansk", "English (Canada)", "Español (España)", "Magyar",
  "Nederlands", "Suomi", "Русский", "Українська", "Português (Brasil)",
];

const LanguageModal: React.FC<LanguageModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Select Your Language</h2>
        <div className="mb-4">
          <p className="font-bold mb-2">Suggested for you</p>
          <div className="border p-2 rounded bg-red-100 text-red-600">
            English (US)
          </div>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2">All languages</p>
          <div className="grid grid-cols-3 gap-2">
            {languages.map((language, index) => (
              <div key={index} className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                {language}
              </div>
            ))}
          </div>
        </div>
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
