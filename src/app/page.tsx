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
      title: "The Ultimate Law Degree Guide for International Students",
      date: "Dec 8, 2023",
      image: "https://via.placeholder.com/400x300", // Placeholder image, replace with real image link
      description: "A guide for international students pursuing law degrees.",
    },
    {
      title: "Law Dictionary: Law School Terms 101",
      date: "Dec 8, 2023",
      image: "https://via.placeholder.com/400x300",
      description: "Essential legal terms every law student should know.",
    },
    {
      title: "What is the Value of an LLM Degree?",
      date: "Oct 20, 2023",
      image: "https://via.placeholder.com/400x300",
      description: "Understanding the value of a Master of Laws degree.",
    },
    {
      title: "What is the Bar Exam?",
      date: "Oct 13, 2023",
      image: "https://via.placeholder.com/400x300",
      description: "An overview of the Bar Exam and its significance.",
    },
  ];

  const mockLocations = [
    {
      name: "China",
      image: "https://via.placeholder.com/400x300", // Replace with real image URLs
    },
    {
      name: "Mexico",
      image: "https://via.placeholder.com/400x300",
    },
    {
      name: "Spain",
      image: "https://via.placeholder.com/400x300",
    },
    {
      name: "France",
      image: "https://via.placeholder.com/400x300",
    },
    {
      name: "New Zealand",
      image: "https://via.placeholder.com/400x300",
    },
    {
      name: "Malaysia",
      image: "https://via.placeholder.com/400x300",
    },
    {
      name: "Singapore",
      image: "https://via.placeholder.com/400x300",
    },
    {
      name: "Italy",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  // Mock programs for the NewlyAddedPrograms component
  const mockPrograms = [
    {
      title: "Diploma in Maritime Law",
      institution: "Lloyd's Maritime Academy",
      location: "Online",
      country: "United Kingdom",
      image: "https://via.placeholder.com/150x50",
    },
    {
      title: "LLM Technology and Artificial Intelligence",
      institution: "University of Bradford",
      location: "Bradford",
      country: "United Kingdom",
      image: "https://via.placeholder.com/150x50",
    },
    {
      title: "LLM International Commercial Law",
      institution: "University College Dublin",
      location: "Dublin",
      country: "Ireland",
      image: "https://via.placeholder.com/150x50",
    },
    {
      title: "LLM in Sustainability Law and Natural Resources",
      institution: "University of Lapland",
      location: "Rovaniemi",
      country: "Finland",
      image: "https://via.placeholder.com/150x50",
    },
    {
      title: "LLM in Human Rights Law",
      institution: "London School of Economics",
      location: "London",
      country: "United Kingdom",
      image: "https://via.placeholder.com/150x50",
    },
    {
      title: "LLM in Commercial Arbitration",
      institution: "Stockholm University",
      location: "Stockholm",
      country: "Sweden",
      image: "https://via.placeholder.com/150x50",
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
      <ArticlesAndGuides articles={mockArticles} />
      <WhereToStudy locations={mockLocations} />
      <NewlyAddedPrograms programs={mockPrograms} />
    </div>
  );
}
