"use client"
import Banner from "@/components/common/Banner";
import BannerImage from "../images/banner/banner.png";

export default function Home() {
  const lawStudyFields = [
    "Administrative Law Studies",
    "Business Law Studies",
    "Civil Law Studies",
    "International Law",
    "Human Rights Law",
    "Corporate Law"
  ];


  return (
    <div>
      <Banner backgroundImage={BannerImage.toString()} title="Browse thousands of graduate degrees from around the world." studyFields={lawStudyFields}  />
    </div>
  );
}
