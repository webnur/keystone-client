"use client";
import SubBanner from "@/components/common/SubBanner";
import React from "react";

import ContinentDropdown from "../components/ContentDropdown";
import OnlineWhereToStudy from "../components/OnlineWhereToStudy";

const page = () => {
  // Mock data for WhereToStudy locations (now with id)
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
  return (
    <div className="">
      <SubBanner
        backgroundImage="https://i.ibb.co.com/hLRLbdr/compare-program.jpg"
        title="Study Locations"
        slogan="We have more than a thousand universities from around the world in our database."
        className="h-[300px]"
        titleClass="py-8"
        slogalClass=""
      />
      <OnlineWhereToStudy locations={mockLocations} />
      <ContinentDropdown></ContinentDropdown>
    </div>
  );
};

export default page;
