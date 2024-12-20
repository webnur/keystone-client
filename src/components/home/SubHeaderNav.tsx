"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type NavData = {
  name: string;
  link: string;
};

type SubHeaderNavProps = {
  navData?: NavData[];
  activeCategory: string;
};

const SubHeaderNav: React.FC<SubHeaderNavProps> = ({
  navData = [],
  activeCategory,
}) => {
  const router = useRouter();
  const t = useTranslations("subHeaderNav");

  return (
    <div className="subheader-container">
      <nav
        className="flex justify-left md:py-3 py-1 text-sm md:text-base border-b border-gray-200 container mx-auto overflow-x-auto whitespace-nowrap scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <Link
          href="/master"
          className={` py-2 ${
            activeCategory === "master" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("master")}
        </Link>

        <Link
          href="/phd"
          className={`px-4 py-2 ${
            activeCategory === "phd" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("phd")}
        </Link>

        <Link
          href="/law"
          className={`px-4 py-2 ${
            activeCategory === "law" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("law")}
        </Link>

        <Link
          href="/bachelor"
          className={`px-4 py-2 ${
            activeCategory === "bachelor" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("bachelor")}
        </Link>

        <Link
          href="/mba"
          className={`px-4 py-2 ${
            activeCategory === "mba" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("mba")}
        </Link>

        <Link
          href="/healthcare"
          className={`px-4 py-2 ${
            activeCategory === "healthcare" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("healthcare")}
        </Link>

        <Link
          href="/courses"
          className={`px-4 py-2 ${
            activeCategory === "courses" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("courses")}
        </Link>

        <Link
          href="/online"
          className={`px-4 py-2 ${
            activeCategory === "online" ? "text-red-600 font-bold" : ""
          }`}
        >
          {t("online")}
        </Link>
      </nav>

      <div className="bg-foreground">
        <div
          className="container mx-auto subnav w-full py-2 text-sm md:text-base md:py-3 overflow-x-auto whitespace-nowrap scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex justify-left space-x-4">
            {navData.length > 0 ? (
              navData.map((subNavItem, index) => (
                <Link
                  key={index}
                  href={subNavItem.link}
                  className="text-white hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(subNavItem.link);
                  }}
                >
                  {subNavItem.name}
                </Link>
              ))
            ) : (
              <p>No sub-navigation available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderNav;
