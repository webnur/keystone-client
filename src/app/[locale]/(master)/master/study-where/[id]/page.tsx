"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import SubBanner from "@/components/common/SubBanner";
import NewsAndArticles from "@/components/common/NewsAndArticle";
import { articlesData } from "@/app/[locale]/(main)/articles/article";
import Sidebar from "./Sidebar";
import CostOfLiving from "./CostOfLiving";
import ChangeCurrency from "./ChangeCurrency";
import VisaRequirements from "./VisaRequirements";
import AboutCountry from "./AboutCountry";
import Institutions from "./Institutions";
import Programs from "./Programs";

// Define the structure of the location data
interface LocationDataType {
  title: string;
  countryName: string;
  backgroundImage: string;
}

const page = () => {
  const params = useParams(); // Use Next.js 13 useParams to get dynamic route parameters
  const { id } = params; // Extract the 'id' from params

  const [isLoading, setIsLoading] = useState(true);

  // Mock data: In a real case, this data should be fetched from an API based on the "id"
  const locationData: Record<string, LocationDataType> = {
    germany: {
      title: "Study Master in Germany 2024",
      countryName: "Germany",
      backgroundImage: "https://i.ibb.co/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    "united-kingdom": {
      title: "Study Master in United Kingdom 2024",
      countryName: "United Kingdom",
      backgroundImage: "https://i.ibb.co.com/txH8qMm/ezgif-3-c99bcf9998.jpg",
    },
    usa: {
      title: "Study Master in USA 2024",
      countryName: "USA",
      backgroundImage: "https://i.ibb.co/3FGPY8X/124334-shutterstock-244469683.jpg",
    },
    canada: {
      title: "Study Master in Canada 2024",
      countryName: "Canada",
      backgroundImage: "https://i.ibb.co/n34cmjB/110845-shutterstock-255015211.jpg",
    },
    // Add more country data as needed
  };

  // Fetch the country data when the component mounts
  useEffect(() => {
    if (id) {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading until the country data is ready
  }

  const country = locationData[id as string]; // Use the ID to get country data

  if (!country) {
    return <div>Country not found.</div>; // If no data found for the country, show an error message
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
      <NewsAndArticles articles={articlesData.slice(0, 4)} />
    </div>
  );
};

export default page;
