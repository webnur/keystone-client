"use client";
import EducationJourney from "@/components/home/EducationJourney";
import BannerWithDropdown from "@/components/common/Banner";
import MasterAddedProgram from "./components/MasterAddedProgram";
import MasterWhereToStudy from "./components/MasterWhereToStudy";
import MasterArticlesAndGuides from "./components/MasterArticleGuide";
import MasterDiscoverProgram from "./components/MasterDiscoverProgram";

export default function Home() {
  const studyFields = [
    "Accessories Design",
    "Accountancy",
    "Accounting",
    "Administration",
    "Administration Studies",
    "Administration, Business, and Economics",
    "Administrative Law Studies",
    "Adult Education",
    "Advertising",
    "Aeronautical Engineering",
    "Agribusiness",
    "Agricultural Science",
    "Air Traffic Control",
    "Aircraft Maintenance",
    "Allied Healthcare",
    "Alternative Medicine",
    "Ancient Languages",
    "Animal Science",
    "Animation",
    "Anthropology",
    "Applied Arts",
    "Arabic",
    "Archaeology",
    "Architecture",
    "Architecture Studies",
    "Archival Science",
    "Area Studies",
    "Art Studies",
    "Artificial Intelligence",
    "Arts",
    "Arts and Design",
    "Atmospheric Sciences",
    "Audio Engineering",
    "Auditing",
    "Automation",
  ];

  const mockArticles = [
    {
      id: "guide-master-degree",
      title: "The Ultimate Master's Degree Guide for International Students",
      date: "Dec 8, 2023",
      image: "https://i.ibb.co.com/MVNcjND/Master-s-Degree-Guide-rqljxp.jpg",
      description: "A guide for international students pursuing law degrees.",
    },
    {
      id: "scholarships-directory",
      title: "Master's Scholarships Directory for International Students",
      date: "Dec 8, 2023",
      image:
        "https://i.ibb.co.com/XZT42GW/Master-s-in-the-UK-Hero-image-1-naabh7.jpg",
      description: "Essential legal terms every law student should know.",
    },
    {
      id: "guide-master-uk",
      title: "The Ultimate Guide to Getting a Master's Degree in the UK (2024)",
      date: "Oct 20, 2023",
      image:
        "https://i.ibb.co.com/F3N6yv4/The-Cheapest-Countries-to-Study-a-Master-s-In-Europe-vimenh.jpg",
      description: "Understanding the value of a Master of Laws degree.",
    },
    {
      id: "bar-exam-overview",
      title: "What is the Bar Exam?",
      date: "Oct 13, 2023",
      image: "https://i.ibb.co.com/Z6mdF2K/Hero-images-4-gpy7jt.jpg",
      description: "An overview of the Bar Exam and its significance.",
    },
  ];

  const mockLocations = [
    {
      id: "uk",
      name: "United Kingdom",
      image: "https://i.ibb.co.com/txH8qMm/ezgif-3-c99bcf9998.jpg",
    },
    {
      id: "usa",
      name: "USA",
      image: "https://i.ibb.co.com/3FGPY8X/124334-shutterstock-244469683.jpg",
    },
    {
      id: "canada",
      name: "Canada",
      image: "https://i.ibb.co.com/n34cmjB/110845-shutterstock-255015211.jpg",
    },
    {
      id: "germany",
      name: "Germany",
      image: "https://i.ibb.co.com/bRC2BGf/62089-germany.jpg",
    },
    {
      id: "italy",
      name: "Italy",
      image: "https://i.ibb.co.com/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    {
      id: "france",
      name: "France",
      image: "https://i.ibb.co.com/T4J8cfx/61809-france.jpg",
    },
    {
      id: "spain",
      name: "Spain",
      image: "https://i.ibb.co.com/X8nsYJc/110855-shutterstock-377505535.jpg",
    },
    {
      id: "belgium",
      name: "Belgium",
      image: "https://i.ibb.co.com/2tdMcTC/61795-belgium.jpg",
    },
    {
      id: "japan",
      name: "Japan",
      image: "https://i.ibb.co.com/G243xM9/62094-japan.jpg",
    },
  ];

  const mockPrograms = [
    {
      id: "diploma-maritime-law",
      title: "Diploma in Maritime Law",
      institution: "Lloyd's Maritime Academy",
      location: "Online",
      country: "United Kingdom",
      image: "https://i.ibb.co.com/Jk6mfCY/237569-SA-Ordbild-vid-samarbeten-RGB-eng.png",
    },
    {
      id: "llm-technology-ai",
      title: "LLM Technology and Artificial Intelligence",
      institution: "University of Bradford",
      location: "Bradford",
      country: "United Kingdom",
      image: "https://i.ibb.co.com/2Sc2VMH/197877-UHI-Formal-Marque-Keystone.png",
    },
    {
      id: "llm-international-commercial-law",
      title: "LLM International Commercial Law",
      institution: "University College Dublin",
      location: "Dublin",
      country: "Ireland",
      image: "https://i.ibb.co.com/285BZwF/240330-Screenshot2024-09-17170404.png",
    },
    {
      id: "llm-sustainability-law-natural-resources",
      title: "LLM in Sustainability Law and Natural Resources",
      institution: "University of Lapland",
      location: "Rovaniemi",
      country: "Finland",
      image: "https://i.ibb.co.com/285BZwF/240330-Screenshot2024-09-17170404.png",
    },
    {
      id: "llm-human-rights-law",
      title: "LLM in Human Rights Law",
      institution: "London School of Economics",
      location: "London",
      country: "United Kingdom",
      image: "https://i.ibb.co.com/2Sc2VMH/197877-UHI-Formal-Marque-Keystone.png",
    },
    {
      id: "llm-commercial-arbitration",
      title: "LLM in Commercial Arbitration",
      institution: "Stockholm University",
      location: "Stockholm",
      country: "Sweden",
      image: "https://i.ibb.co.com/Jk6mfCY/237569-SA-Ordbild-vid-samarbeten-RGB-eng.png",
    },
  ];

  const programsData = [
    {
      id: "computer-science",
      name: "Computer Science",
      icon: "💻",
      fields: ["AI", "Data Science", "Cybersecurity", "Web Development", "Machine Learning", "Software Engineering"],
    },
    {
      id: "business-administration",
      name: "Business Administration",
      icon: "📊",
      fields: ["Finance", "Marketing", "Operations", "HR", "Business Analytics", "Entrepreneurship"],
    },
    {
      id: "design",
      name: "Design",
      icon: "🎨",
      fields: ["Graphic Design", "UX/UI", "Animation", "Photography", "Interior Design", "Industrial Design"],
    },
    {
      id: "law",
      name: "Law",
      icon: "⚖️",
      fields: ["Corporate Law", "International Law", "Human Rights", "Environmental Law", "Criminal Law"],
    },
    {
      id: "engineering",
      name: "Engineering",
      icon: "🔧",
      fields: ["Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Aerospace Engineering"],
    },
    {
      id: "medicine",
      name: "Medicine",
      icon: "🏥",
      fields: ["General Medicine", "Surgery", "Dentistry", "Pharmacy", "Nursing", "Veterinary Medicine"],
    },
    {
      id: "psychology",
      name: "Psychology",
      icon: "🧠",
      fields: ["Clinical Psychology", "Counseling", "Forensic Psychology", "Educational Psychology"],
    },
    {
      id: "education",
      name: "Education",
      icon: "📚",
      fields: ["Primary Education", "Secondary Education", "Curriculum Development", "Educational Leadership"],
    },
    {
      id: "environmental-studies",
      name: "Environmental Studies",
      icon: "🌍",
      fields: ["Sustainability", "Ecology", "Conservation", "Renewable Energy"],
    },
    {
      id: "social-sciences",
      name: "Social Sciences",
      icon: "🌐",
      fields: ["Sociology", "Anthropology", "Political Science", "International Relations"],
    },
    {
      id: "health-sciences",
      name: "Health Sciences",
      icon: "🏥",
      fields: ["Public Health", "Nutrition", "Physiotherapy", "Occupational Therapy"],
    },
    {
      id: "economics",
      name: "Economics",
      icon: "💰",
      fields: ["Microeconomics", "Macroeconomics", "Econometrics", "Development Economics"],
    },
    {
      id: "philosophy",
      name: "Philosophy",
      icon: "📜",
      fields: ["Ethics", "Metaphysics", "Logic", "Political Philosophy"],
    },
    {
      id: "media-studies",
      name: "Media Studies",
      icon: "🎥",
      fields: ["Journalism", "Film Studies", "Advertising", "Public Relations"],
    },
    {
      id: "art-history",
      name: "Art History",
      icon: "🖼️",
      fields: ["Modern Art", "Renaissance Art", "Photography", "Art Criticism"],
    },
    {
      id: "chemistry",
      name: "Chemistry",
      icon: "🧪",
      fields: ["Organic Chemistry", "Analytical Chemistry", "Biochemistry", "Physical Chemistry"],
    },
    {
      id: "physics",
      name: "Physics",
      icon: "⚛️",
      fields: ["Quantum Physics", "Astrophysics", "Particle Physics", "Nuclear Physics"],
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: "📐",
      fields: ["Algebra", "Calculus", "Statistics", "Applied Mathematics"],
    },
    {
      id: "architecture",
      name: "Architecture",
      icon: "🏛️",
      fields: ["Urban Planning", "Landscape Architecture", "Sustainable Architecture", "Interior Architecture"],
    },
    {
      id: "biotechnology",
      name: "Biotechnology",
      icon: "🧬",
      fields: ["Genetics", "Bioinformatics", "Molecular Biology", "Bioprocess Engineering"],
    },
  ];

  return (
    <div>
      <BannerWithDropdown
        backgroundImage={
          "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        title="Browse thousands of graduate degrees from around the world."
        studyFields={studyFields}
      />
      <EducationJourney />
      <MasterDiscoverProgram programs={programsData} />
      <MasterWhereToStudy title="Where to study" locations={mockLocations} />
      <MasterArticlesAndGuides articles={mockArticles} />
      <MasterAddedProgram programs={mockPrograms} />
    </div>
  );
}
