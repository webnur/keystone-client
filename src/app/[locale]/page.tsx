"use client";

import EducationJourney from "@/components/home/EducationJourney";
import DiscoverProgram from "@/components/home/DiscoverProgram";
import ArticlesAndGuides from "@/components/home/ArticlesAndGuides";
import WhereToStudy from "@/components/home/WhereToStudy";
import NewlyAddedPrograms from "@/components/home/NewlyAddedPrograms";
import BannerWithDropdown from "@/components/common/Banner";
import SubHeaderNav from "@/components/home/SubHeaderNav";

export default function Home() {
  const lawStudyFields = [
    "Administrative Law Studies",
    "Business Law Studies",
    "Civil Law Studies",
    "International Law",
    "Human Rights Law",
    "Corporate Law",
  ];
  const programsData = [
    { name: "Legal Studies", icon: "⚖️" },
    { name: "Business Law Studies", icon: "⚖️" },
    { name: "International Law Studies", icon: "⚖️" },
    { name: "Administrative Law Studies", icon: "⚖️" },
    { name: "Jurisprudence", icon: "⚖️" },
    { name: "National Law Studies", icon: "⚖️" },
    { name: "Economic Law Studies", icon: "⚖️" },
    { name: "Human Rights Law Studies", icon: "⚖️" },
    { name: "Dispute Resolution Studies", icon: "⚖️" },
    { name: "Civil Law Studies", icon: "⚖️" },
  ];

  const mockArticles = [
    {
      title: "The Ultimate Master's Degree Guide for International Students",
      date: "Dec 8, 2023",
      image: "https://i.ibb.co.com/MVNcjND/Master-s-Degree-Guide-rqljxp.jpg", // Placeholder image, replace with real image link
      description: "A guide for international students pursuing law degrees.",
    },
    {
      title: "Master's Scholarships Directory for International Students",
      date: "Dec 8, 2023",
      image:
        "https://i.ibb.co.com/XZT42GW/Master-s-in-the-UK-Hero-image-1-naabh7.jpg",
      description: "Essential legal terms every law student should know.",
    },
    {
      title:
        "The Ultimate Guide to Getting a Master's Degree in the UK (2024))",
      date: "Oct 20, 2023",
      image:
        "https://i.ibb.co.com/F3N6yv4/The-Cheapest-Countries-to-Study-a-Master-s-In-Europe-vimenh.jpg",
      description: "Understanding the value of a Master of Laws degree.",
    },
    {
      title: "What is the Bar Exam?",
      date: "Oct 13, 2023",
      image: "https://i.ibb.co.com/Z6mdF2K/Hero-images-4-gpy7jt.jpg",
      description: "An overview of the Bar Exam and its significance.",
    },
  ];

  const mockLocations = [
    {
      name: "United Kingdom",
      image: "https://i.ibb.co.com/txH8qMm/ezgif-3-c99bcf9998.jpg", // Replace with real image URLs
    },
    {
      name: "USA",
      image: "https://i.ibb.co.com/3FGPY8X/124334-shutterstock-244469683.jpg",
    },
    {
      name: "Canada",
      image: "https://i.ibb.co.com/n34cmjB/110845-shutterstock-255015211.jpg",
    },
    {
      name: "Germany",
      image: "https://i.ibb.co.com/bRC2BGf/62089-germany.jpg",
    },
    {
      name: "Italy",
      image: "https://i.ibb.co.com/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    {
      name: "France",
      image: "https://i.ibb.co.com/T4J8cfx/61809-france.jpg",
    },
    {
      name: "Spain",
      image: "https://i.ibb.co.com/X8nsYJc/110855-shutterstock-377505535.jpg",
    },
    {
      name: "Belgium",
      image: "https://i.ibb.co.com/2tdMcTC/61795-belgium.jpg",
    },
    {
      name: "Japan",
      image: "https://i.ibb.co.com/G243xM9/62094-japan.jpg",
    },
  ];

  // Mock programs for the NewlyAddedPrograms component
  const mockPrograms = [
    {
      title: "Diploma in Maritime Law",
      institution: "Lloyd's Maritime Academy",
      location: "Online",
      country: "United Kingdom",
      image:
        "https://i.ibb.co.com/Jk6mfCY/237569-SA-Ordbild-vid-samarbeten-RGB-eng.png",
    },
    {
      title: "LLM Technology and Artificial Intelligence",
      institution: "University of Bradford",
      location: "Bradford",
      country: "United Kingdom",
      image:
        "https://i.ibb.co.com/2Sc2VMH/197877-UHI-Formal-Marque-Keystone.png",
    },
    {
      title: "LLM International Commercial Law",
      institution: "University College Dublin",
      location: "Dublin",
      country: "Ireland",
      image:
        "https://i.ibb.co.com/285BZwF/240330-Screenshot2024-09-17170404.png",
    },
    {
      title: "LLM in Sustainability Law and Natural Resources",
      institution: "University of Lapland",
      location: "Rovaniemi",
      country: "Finland",
      image:
        "https://i.ibb.co.com/285BZwF/240330-Screenshot2024-09-17170404.png",
    },
    {
      title: "LLM in Human Rights Law",
      institution: "London School of Economics",
      location: "London",
      country: "United Kingdom",
      image:
        "https://i.ibb.co.com/2Sc2VMH/197877-UHI-Formal-Marque-Keystone.png",
    },
    {
      title: "LLM in Commercial Arbitration",
      institution: "Stockholm University",
      location: "Stockholm",
      country: "Sweden",
      image:
        "https://i.ibb.co.com/Jk6mfCY/237569-SA-Ordbild-vid-samarbeten-RGB-eng.png",
    },
  ];

  return (
    <div>
      <SubHeaderNav />
      <BannerWithDropdown
        backgroundImage={
          "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        title="Browse thousands of graduate degrees from around the world."
        studyFields={lawStudyFields}
      />
      <EducationJourney />
      <DiscoverProgram programs={programsData} />
      <WhereToStudy locations={mockLocations} />
      <ArticlesAndGuides articles={mockArticles} />

      <NewlyAddedPrograms programs={mockPrograms} />
    </div>
  );
}
