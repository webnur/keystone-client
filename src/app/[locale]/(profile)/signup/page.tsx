import Image from "next/image";

import singUpLogo from "../../../../../public/images/logo/sign-in-logo.jpg";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SignUpPage() {
  const t = useTranslations("signUpPage");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="bg-[#293a48] p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-8">
          {/* Add your logo here */}
          <Image
            src={singUpLogo}
            alt="Keystone StudentHub"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-2xl text-white font-semibold text-center mb-6">
          {t("title")}
        </h2>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm mb-2">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t("emailPlaceholder")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Given Name Field */}
          <div className="mb-4">
            <label
              htmlFor="givenName"
              className="block text-white text-sm mb-2"
            >
              {t("name")}
            </label>
            <input
              type="text"
              id="givenName"
              name={t("namePlaceholder")}
              required
              placeholder="Enter your first name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Family Name Field */}
          <div className="mb-4">
            <label
              htmlFor="familyName"
              className="block text-white text-sm mb-2"
            >
              {t("familyName")}
            </label>
            <input
              type="text"
              id="familyName"
              name="familyName"
              required
              placeholder={t("familyPlaceholder")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm mb-2">
              {t("password")}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder={t("passwordPlaceholder")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            {t("signUp")}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-white text-sm">
            {t("alreadyHave")}{" "}
            <Link href="/login" className="text-pink-500 hover:underline">
              {t("signIn")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
