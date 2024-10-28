import React, { useState } from 'react';
import ProgramTop from './components/ProgramTop';

// Mock data for different universities
const mockData = [
  {
    id: "1",
    institution: "Aston University Online",
    title: "Online MSc Business Analytics",
    imageUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    institution: "University of Cambridge",
    title: "MSc Artificial Intelligence",
    imageUrl: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Cambridge, United Kingdom",
    duration: "18 months",
    languages: "English",
    pace: "Full time",
    startDate: "Sep 2024",
    tuitionFees: "GBP 25,000 / per course",
    studyFormat: "In-person",
  },
  {
    id: "3",
    institution: "Stanford University",
    title: "MSc Data Science",
    imageUrl: "https://images.pexels.com/photos/159775/college-stanford-university-students-campus-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Stanford, California",
    duration: "2 years",
    languages: "English",
    pace: "Full time",
    startDate: "Aug 2024",
    tuitionFees: "USD 50,000 / per year",
    studyFormat: "In-person",
  },
];

// Sections for program details
const sectionsContent: Record<string, { title: string, content: string }> = {
  introduction: { title: 'Introduction', content: "Introduction content here..." },
  gallery: { title: 'Gallery', content: "[Embed media or image gallery here]" },
  // Add other sections as needed...
};

const MidContent = ({ programId }: { programId: string }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Fetch the relevant mock data by id
  const programData = mockData.find((data) => data.id === programId);

  if (!programData) return <div>Program not found</div>;

  const toggleSection = (sectionKey: string) => {
    setOpenSection(openSection === sectionKey ? null : sectionKey);
  };

  return (
    <div className="w-[90%] mx-auto space-y-6">
      <ProgramTop
        id={programData.id}
        imageUrl={programData.imageUrl}
        institution={programData.institution}
        title={programData.title}
        location={programData.location}
        duration={programData.duration}
        languages={programData.languages}
        pace={programData.pace}
        startDate={programData.startDate}
        tuitionFees={programData.tuitionFees}
        studyFormat={programData.studyFormat}
      />

      {Object.keys(sectionsContent).map((sectionKey, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleSection(sectionKey)}
            className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
          >
            <h2 className="text-xl font-semibold">{sectionsContent[sectionKey].title}</h2>
            <span className="text-xl font-bold">
              {openSection === sectionKey ? '−' : '+'}
            </span>
          </button>
          {openSection === sectionKey && (
            <div className="px-4 pb-4 text-gray-700">
              <p>{sectionsContent[sectionKey].content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MidContent;
