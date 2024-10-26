import React from "react";
import BaseText from "@/components/degree/BaseText";
import PopularFields from "@/components/common/PopularFields";
import NewsAndArticles from "@/components/common/NewsAndArticle";
import { articlesData } from "@/app/[locale]/(main)/articles/article";
import MScSection from "@/components/common/MScSection";
import CommonBanner from "@/components/common/CommonBanner";
import MbaAddedProgram from "../components/MbaAddedProgram";

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

  // Mock data for MasterAddedProgram
  const mockPrograms = [
    {
      id: "diploma-maritime-law", // Unique ID for routing
      title: "Diploma in Maritime Law",
      institution: "Lloyd's Maritime Academy",
      location: "Online",
      country: "United Kingdom",
      image:
        "https://i.ibb.co.com/Jk6mfCY/237569-SA-Ordbild-vid-samarbeten-RGB-eng.png",
    },
    {
      id: "llm-technology-ai", // Unique ID for routing
      title: "LLM Technology and Artificial Intelligence",
      institution: "University of Bradford",
      location: "Bradford",
      country: "United Kingdom",
      image:
        "https://i.ibb.co.com/2Sc2VMH/197877-UHI-Formal-Marque-Keystone.png",
    },
    {
      id: "llm-international-commercial-law", // Unique ID for routing
      title: "LLM International Commercial Law",
      institution: "University College Dublin",
      location: "Dublin",
      country: "Ireland",
      image:
        "https://i.ibb.co.com/285BZwF/240330-Screenshot2024-09-17170404.png",
    },
    {
      id: "llm-sustainability-law-natural-resources", // Unique ID for routing
      title: "LLM in Sustainability Law and Natural Resources",
      institution: "University of Lapland",
      location: "Rovaniemi",
      country: "Finland",
      image:
        "https://i.ibb.co.com/285BZwF/240330-Screenshot2024-09-17170404.png",
    },
    {
      id: "llm-human-rights-law", // Unique ID for routing
      title: "LLM in Human Rights Law",
      institution: "London School of Economics",
      location: "London",
      country: "United Kingdom",
      image:
        "https://i.ibb.co.com/2Sc2VMH/197877-UHI-Formal-Marque-Keystone.png",
    },
    {
      id: "llm-commercial-arbitration", // Unique ID for routing
      title: "LLM in Commercial Arbitration",
      institution: "Stockholm University",
      location: "Stockholm",
      country: "Sweden",
      image:
        "https://i.ibb.co.com/Jk6mfCY/237569-SA-Ordbild-vid-samarbeten-RGB-eng.png",
    },
  ];

  const programs = [
    { name: "MSc in Technology Studies", link: "#" },
    { name: "MSc in Computer Science", link: "#" },
    { name: "MSc in Information Technology", link: "#" },
    { name: "MSc in Data Science", link: "#" },
  ];

  const countries = [
    { name: "MSc in USA", link: "#" },
    { name: "MSc in United Kingdom", link: "#" },
    { name: "MSc in France", link: "#" },
    { name: "MSc in Germany", link: "#" },
  ];

  const cities = [
    { name: "MSc in New York", link: "#" },
    { name: "MSc in London", link: "#" },
    { name: "MSc in Paris", link: "#" },
    { name: "MSc in Berlin", link: "#" },
  ];

  return (
    <div>
      <CommonBanner
        title="Mba Degree common banner"
        backgroundImage={
          "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        studyFields={lawStudyFields}
      ></CommonBanner>
      <BaseText content={masterDegreeContent} />
      <PopularFields />
      <div className="bg-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <MScSection
            title="Top MSc programs"
            description="MSc programs are offered in a number of various fields. Have a look at some of the most popular MSc programs below!"
            items={programs}
          />

          <MScSection
            title="Top MSc countries"
            description="MSc programs are available at universities around the world. Consider taking your MSc in one of these most popular countries!"
            items={countries}
          />

          <MScSection
            title="Top MSc cities"
            description="There are many popular MSc programs offered by some of the highest ranking universities in the cities listed below!"
            items={cities}
          />
        </div>
      </div>
      <MbaAddedProgram programs={mockPrograms} />
      <NewsAndArticles articles={articlesData.slice(0, 4)} />
    </div>
  );
};

export default page;
