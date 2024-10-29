"use client";

import { useEffect, useState } from "react";
import Banner from "./InstitutionsBanner";
import RightContent from "./RightSideContent";
import LeftSidebar from "./LeftSideBar";
import ProgramTop from "../../program-details/[id]/components/ProgramTop";

interface InstitutionData {
  id: string;
  imageUrl: string;
  institution: string;
  title: string;
  location: string;
  duration: string;
  languages: string;
  pace: string;
  startDate: string;
  tuitionFees: string;
  studyFormat: string;
}

// Mock data for institutions
const mockInstitutions: InstitutionData[] = [
  {
    id: "1",
    imageUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    institution: "Aston University Online",
    title: "Online MSc Business Analytics",
    location: "Online United Kingdom",
    duration: "24 months",
    languages: "English",
    pace: "Part time",
    startDate: "Jan 2025",
    tuitionFees: "GBP 12,500 / per course",
    studyFormat: "Distance Learning",
  },
  {
    id: "2",
    imageUrl: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
    institution: "University of Cambridge",
    title: "MSc Artificial Intelligence",
    location: "Cambridge, United Kingdom",
    duration: "18 months",
    languages: "English",
    pace: "Full time",
    startDate: "Sep 2024",
    tuitionFees: "GBP 25,000 / per course",
    studyFormat: "In-person",
  },
  // Add more mock institutions as needed
];

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  const [institutionData, setInstitutionData] = useState<InstitutionData | null>(null);
  const [activeSection, setActiveSection] = useState("Study in United Kingdom");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInstitutionData = () => {
      setLoading(true);
      const data = mockInstitutions.find((institution) => institution.id === id);

      if (data) {
        setInstitutionData(data);
        setError(null);
      } else {
        setInstitutionData(null);
        setError("Institution data not found.");
      }
      setLoading(false);
    };

    loadInstitutionData();
  }, [id]);

  const handleScroll = () => {
    const sections = [
      { id: "Study in United Kingdom", offsetTop: document.getElementById("Study in United Kingdom")?.offsetTop },
      { id: "Cost of Living", offsetTop: document.getElementById("Cost of Living")?.offsetTop },
      { id: "Visa Requirements", offsetTop: document.getElementById("Visa Requirements")?.offsetTop },
      { id: "About Country", offsetTop: document.getElementById("About Country")?.offsetTop },
      { id: "Institutions", offsetTop: document.getElementById("Institutions")?.offsetTop },
      { id: "Programs", offsetTop: document.getElementById("Programs")?.offsetTop },
    ];

    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= (sections[i].offsetTop || 0)) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!institutionData) return <div>No data available.</div>;

  return (
    <div>
      <Banner />
      <div className="flex">
        <LeftSidebar activeSection={activeSection} />
        <div className="w-full">
          <ProgramTop
            id={institutionData.id}
            imageUrl={institutionData.imageUrl}
            institution={institutionData.institution}
            title={institutionData.title}
            location={institutionData.location}
            duration={institutionData.duration}
            languages={institutionData.languages}
            pace={institutionData.pace}
            startDate={institutionData.startDate}
            tuitionFees={institutionData.tuitionFees}
            studyFormat={institutionData.studyFormat}
          />
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default Page;
