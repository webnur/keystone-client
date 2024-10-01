// Mark the entire file as a Client Component
"use client";

import { useEffect, useState } from "react";
import SubBanner from "@/components/common/SubBanner";
import CostOfLiving from "./CostOfLiving";
import Institutions from "./Institutions";
import Programs from "./Programs";
import Sidebar from "./Sidebar";
import ChangeCurrency from "./ChangeCurrency";
import AboutCountry from "./AboutCountry";
import VisaRequirements from "./VisaRequirements";
import NewsAndArticles from "@/components/common/NewsAndArticle";
import { articlesData } from "../articles/article";

export default function StudyPage() {
  const [activeSection, setActiveSection] = useState<string>("Study in United Kingdom");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold to fine-tune when the section is considered "active"
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="">
      <div className="flex-1">
        <SubBanner
          title="Study Master in United Kingdom 2024"
          backgroundImage="url('/path-to-background-image')"
        />
      

        <div className="w-[90%] mx-auto flex mt-8">
          <div className="w-1/4">
            <div className="sticky top-16">
              <Sidebar activeSection={activeSection} />
            </div>
          </div>

          {/* Right-side content scrollable */}
          <div className="w-3/4 ml-8">
            <section id="Cost of Living">
              <CostOfLiving />
            </section>
            <ChangeCurrency />
            <section id="Visa Requirements">
              {/* <VisaRequirements /> */}
              <VisaRequirements />
            </section>
            <section id="About Country">
              <AboutCountry countryName="Germany" />
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
}
