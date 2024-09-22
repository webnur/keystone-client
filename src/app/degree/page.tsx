"use client";
import Banner from "@/components/common/Banner";
import ProgramPageLayout from "@/components/common/MainLayout";
import NewsAndArticles from "@/components/common/NewsAndArticle";
import PopularFields from "@/components/common/PopularFields";
import BaseText from "@/components/degree/BaseText";
import React from "react";
import { articlesData } from "../articles/article";

const page = () => {
  const lawStudyFields = [
    "Administrative Law Studies",
    "Business Law Studies",
    "Civil Law Studies",
    "International Law",
    "Human Rights Law",
    "Corporate Law",
  ];
  const masterDegreeContent = `
  A Master is an advanced degree conferred by universities around the world for completion of graduate study in a specific discipline. 
  Masters degree programs typically take one to two years to complete and further prepare graduates for a career in their chosen field. 
  Obtaining a Masters degree offers numerous professional, personal and academic benefits to students who have graduated from a Bachelor program. 
  Masters degrees are available across various fields of study, including the Arts, Business, Engineering and Technology, Law, Humanities, 
  Social Sciences, Biological and Life Sciences, and the Natural Sciences. Within each of those fields of study, numerous practical specializations 
  are available within particular disciplines. The variety of different Master programs can be overwhelming – don't let it stop you! 
  Start your search by looking at the most popular Master degrees listed below.
`;
  return (
    <div>
      <Banner
        backgroundImage={
          "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        title="Browse thousands of graduate degrees from around the world."
        studyFields={lawStudyFields}
      />

      <BaseText content={masterDegreeContent} />
      {/* this will remove from here */}
      <ProgramPageLayout />
      <PopularFields />
      <NewsAndArticles articles={articlesData.slice(0, 4)} />
    </div>
  );
};

export default page;
