import SubBanner from "@/components/common/SubBanner";
import CustomIcon from "@/components/icons/Compare";
import React from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const ComparePrograms = ({ params: { locale } }: Props) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = useTranslations("hopePageContent");

  return (
    <div>
      <SubBanner
        backgroundImage="https://i.ibb.co.com/hLRLbdr/compare-program.jpg"
        icon={<CustomIcon width="60" height="50" fill="#fff" />}
        title="Compare Programs"
        slogan="Compare programs side by side to find the right one for you. Add up to"
        className="h-[400px]"
        titleClass="py-6"
        slogalClass=""
      />

      <div>
        <div className="text-center">
          Hello Bangladesh
          <p>Hello {t("title")}</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-center h-[400px] text-center">
          <p className="text-[1.5rem] text-gray-700 mb-4">
            You have not yet added any programs to your compared programs.
          </p>
          <p className=" text-gray-600 mb-8 text-[1.5rem]">
            Please have a look at our program listings and click the compare
            icon to add them to this list.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Find programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparePrograms;
