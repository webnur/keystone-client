"use client";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import LocaleSwitcherSelect from "../LocaleSwitcherSelect";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
// import { XIcon } from "@heroicons/react/outline"; // Assuming you're using heroicons for the close icon

interface LanguageModalProps {
  onClose: () => void;
}

// const languages = [
//   "English (US)", "Deutsch", "English (South Africa)", "Español (Colombia)",
//   "Français", "Melayu", "Polski", "Português (Portugal)", "Svenska", "Ελληνικά",
//   "Bahasa Indonesia", "Dansk", "English (Canada)", "Español (España)", "Magyar",
//   "Nederlands", "Suomi", "Русский", "Українська", "Português (Brasil)",
// ];

const LanguageModal: React.FC<LanguageModalProps> = ({ onClose }) => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
            {/* {languages.map((language, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              >
                {language}
              </div>
            ))} */}
            <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
              {routing.locales.map((cur) => (
                <option key={cur} value={cur}>
                  {t("locale", { locale: cur })}
                </option>
              ))}
            </LocaleSwitcherSelect>
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
