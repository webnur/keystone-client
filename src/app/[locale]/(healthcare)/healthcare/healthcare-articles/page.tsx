import React from "react";
import TopSection from "./TopSection";
import ArticleCardGrid from "./ArticleCard";

const page = () => {
  return (
    <div>
      <TopSection />
      <ArticleCardGrid />
      {/* <Pagination /> */}
    </div>
  );
};

export default page;
