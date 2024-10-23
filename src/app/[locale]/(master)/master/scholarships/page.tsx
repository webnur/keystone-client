import SubBanner from "@/components/common/SubBanner";
import ScholarShipsCard from "@/components/scholarShip/ScholarShip";
import React from "react";

const scholarshipsData = [
  {
    id: 1,
    title: "Graduate Study in the USA Scholarships 2024",
    description: `Are you an international graduate student looking for scholarships to study in the USA?
                  We believe that students who study abroad become the next generation of globally-minded leaders and want to help you achieve your study abroad dreams with this $5,000 graduate degree scholarship!`,
    deadline: "22 September 2024",
    imageUrl: "https://i.ibb.co.com/jJRpsgM/4-ahhsql.png", // Replace with an actual image URL
    buttonText: "Apply here",
    buttonLink: "/master/apply",
  },
  {
    id: 2,
    title: "UK Study Scholarship 2024",
    description: `Are you a student looking to study in the UK? We offer scholarships for postgraduate degrees in various fields.`,
    deadline: "15 October 2024",
    imageUrl: "https://i.ibb.co.com/jJRpsgM/4-ahhsql.png", // Replace with an actual image URL
    buttonText: "Learn More",
    buttonLink: "/master/apply",
  },
  {
    id: 3,
    title: "Canada Study Abroad Scholarship 2024",
    description: `Explore study opportunities in Canada with this fully funded scholarship for international students.`,
    deadline: "1 November 2024",
    imageUrl: "https://i.ibb.co.com/jJRpsgM/4-ahhsql.png", // Replace with an actual image URL
    buttonText: "Apply now",
    buttonLink: "/master/apply",
  },
];
const page = () => {
  return (
    <div>
      <SubBanner
        title="Scholarships"
        slogan="Scholarships are financial awards offered by universities or other educational organizations to support students financially in their studies. Scholarships are awarded on financial need, academic ability, the public good, athletic or artistic ability, or a combination of the above."
        backgroundImage="https://i.ibb.co.com/LgTtqHb/146631-photo-1543269865-cbf427effbad.jpg"
        slogalClass="pt-4 container mx-auto"
      />
      <ScholarShipsCard scholarships={scholarshipsData} />
    </div>
  );
};

export default page;
