/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import SubBanner from "@/components/common/SubBanner";
import Sidebar from "./Sidebar";
import CostOfLiving from "./CostOfLiving";
import ChangeCurrency from "./ChangeCurrency";
import VisaRequirements from "./VisaRequirements";
import AboutCountry from "./AboutCountry";
import Institutions from "./Institutions";
import Programs from "./Programs";
import BachelorArticlesAndGuides from "../../components/BachelorArticleGuide";

// Define the structure of the location data
interface LocationDataType {
  title: string;
  countryName: string;
  backgroundImage: string;
}

const page = () => {
  const params = useParams();
  const { id } = params;

  const [isLoading, setIsLoading] = useState(true);

  const locationData: Record<string, LocationDataType> = {
    germany: {
      title: "Study Master in Germany 2024",
      countryName: "Germany",
      backgroundImage: "https://i.ibb.co/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    uk: {
      title: "Study Master in United Kingdom 2024",
      countryName: "United Kingdom",
      backgroundImage: "https://i.ibb.co/txH8qMm/ezgif-3-c99bcf9998.jpg",
    },
    usa: {
      title: "Study Master in USA 2024",
      countryName: "USA",
      backgroundImage:
        "https://i.ibb.co/3FGPY8X/124334-shutterstock-244469683.jpg",
    },
    canada: {
      title: "Study Master in Canada 2024",
      countryName: "Canada",
      backgroundImage:
        "https://i.ibb.co/n34cmjB/110845-shutterstock-255015211.jpg",
    },
    italy: {
      title: "Study Master in Italy 2024",
      countryName: "Italy",
      backgroundImage: "https://i.ibb.co/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    france: {
      title: "Study Master in France 2024",
      countryName: "France",
      backgroundImage: "https://i.ibb.co/T4J8cfx/61809-france.jpg",
    },
    spain: {
      title: "Study Master in Spain 2024",
      countryName: "Spain",
      backgroundImage:
        "https://i.ibb.co/X8nsYJc/110855-shutterstock-377505535.jpg",
    },
    belgium: {
      title: "Study Master in Belgium 2024",
      countryName: "Belgium",
      backgroundImage: "https://i.ibb.co/2tdMcTC/61795-belgium.jpg",
    },
    japan: {
      title: "Study Master in Japan 2024",
      countryName: "Japan",
      backgroundImage: "https://i.ibb.co/G243xM9/62094-japan.jpg",
    },
  };
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

  useEffect(() => {
    if (id) {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const country = locationData[id as string];

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div>
      <div className="flex-1">
        <SubBanner
          title={country.title}
          backgroundImage={country.backgroundImage}
        />

        <div className="w-[90%] mx-auto flex mt-8">
          <div className="w-1/4">
            <div className="sticky top-16">
              <Sidebar activeSection={country.title} />
            </div>
          </div>

          <div className="w-3/4 ml-8">
            <section id="Cost of Living">
              <CostOfLiving />
            </section>
            <ChangeCurrency />
            <section id="Visa Requirements">
              <VisaRequirements />
            </section>
            <section id="About Country">
              <AboutCountry countryName={country.countryName} />
            </section>
            <section id="Institutions">
              <Institutions />
            </section>
            <section id="Programs">
              <Programs />
            </section>
          </div>
        </div>
      </div>
      <div>
        <BachelorArticlesAndGuides articles={mockArticles} />
      </div>
    </div>
  );
};

export default page;
