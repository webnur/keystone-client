/* eslint-disable react-hooks/rules-of-hooks */
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
      title: "Study Master in Germany",
      countryName: "Germany",
      backgroundImage: "https://i.ibb.co/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    uk: {
      title: "Study Master in United Kingdom",
      countryName: "United Kingdom",
      backgroundImage: "https://i.ibb.co/txH8qMm/ezgif-3-c99bcf9998.jpg",
    },
    usa: {
      title: "Study Master in USA",
      countryName: "USA",
      backgroundImage:
        "https://i.ibb.co/3FGPY8X/124334-shutterstock-244469683.jpg",
    },
    canada: {
      title: "Study Master in Canada ",
      countryName: "Canada",
      backgroundImage:
        "https://i.ibb.co/n34cmjB/110845-shutterstock-255015211.jpg",
    },
    italy: {
      title: "Study Master in Italy ",
      countryName: "Italy",
      backgroundImage: "https://i.ibb.co/MkrJN0s/ezgif-1-8476095b38.jpg",
    },
    france: {
      title: "Study Master in France ",
      countryName: "France",
      backgroundImage: "https://i.ibb.co/T4J8cfx/61809-france.jpg",
    },
    spain: {
      title: "Study Master in Spain ",
      countryName: "Spain",
      backgroundImage:
        "https://i.ibb.co/X8nsYJc/110855-shutterstock-377505535.jpg",
    },
    belgium: {
      title: "Study Master in Belgium ",
      countryName: "Belgium",
      backgroundImage: "https://i.ibb.co/2tdMcTC/61795-belgium.jpg",
    },
    japan: {
      title: "Study Master in Japan ",
      countryName: "Japan",
      backgroundImage: "https://i.ibb.co/G243xM9/62094-japan.jpg",
    },
  };

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

        <div className="w-[95%] mx-auto flex flex-col lg:flex-row my-8">
          <div className="w-full lg:w-1/6 hidden lg:block">
            <div className="sticky top-16">
              <Sidebar activeSection={country.title} />
            </div>
          </div>

          <div className="w-full lg:w-5/6 md:ml-4">
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
