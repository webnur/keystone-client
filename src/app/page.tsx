"use client"
import Banner from "@/components/common/Banner";
import backgroundImage from "/public/images/banner/banner.png";

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
      <Banner backgroundImage={"https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800"} title="Browse thousands of graduate degrees from around the world." studyFields={lawStudyFields}  />
    </div>
  );
}
