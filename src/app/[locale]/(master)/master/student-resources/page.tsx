import SubBanner from "@/components/common/SubBanner";
import ScholarshipCard from "@/components/resources/ScholarshipCard";
import React from "react";

const scholarshipsData = [
  {
    id: 1,
    title: "Scholarships",
    description:
      "Discover scholarships to support your studies at universities and colleges around the world.",
    imageUrl:
      "https://i.ibb.co.com/LgTtqHb/146631-photo-1543269865-cbf427effbad.jpg",
    link: "/master/scholarships",
  },
  {
    id: 2,
    title: "International Scholarships",
    description:
      "Find financial aid opportunities for international students at prestigious universities.",
    imageUrl:
      "https://i.ibb.co.com/LgTtqHb/146631-photo-1543269865-cbf427effbad.jpg",
    link: "/master/scholarships",
  },
  {
    id: 3,
    title: "Postgraduate Scholarships",
    description:
      "Explore postgraduate scholarship programs available for advanced degrees.",
    imageUrl: "https://i.ibb.co.com/8s8Zj17/126310-shutterstock-206744158.jpg,",
    link: "/master/scholarships",
  },
  {
    id: 4,
    title: "Postgraduate Scholarships",
    description:
      "Explore postgraduate scholarship programs available for advanced degrees.",
    imageUrl: "https://i.ibb.co.com/8s8Zj17/126310-shutterstock-206744158.jpg,",
    link: "/master/scholarships",
  },
  {
    id: 5,
    title: "Postgraduate Scholarships",
    description:
      "Explore postgraduate scholarship programs available for advanced degrees.",
    imageUrl: "https://i.ibb.co.com/8s8Zj17/126310-shutterstock-206744158.jpg,",
    link: "/master/scholarships",
  },
];

const ResourcesPage = () => {
  return (
    <div>
      <SubBanner
        title="Student Resources"
        backgroundImage="https://i.ibb.co.com/LgTtqHb/146631-photo-1543269865-cbf427effbad.jpg"
      />

      <ScholarshipCard scholarships={scholarshipsData} />
    </div>
  );
};

export default ResourcesPage;
