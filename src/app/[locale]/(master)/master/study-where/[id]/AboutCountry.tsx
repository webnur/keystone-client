import React, { useState, useEffect } from "react";

interface AboutCountryProps {
  countryName?: string;
  countryContent?: string;
}

const AboutCountry: React.FC<AboutCountryProps> = () => {
  const [countryName, setCountryName] = useState<string | undefined>(undefined);
  const [countryContent, setCountryContent] = useState<string | undefined>(undefined);

  useEffect(() => {
    const mockApiData = {
      countryName: "Germany",
      countryContent: `
        <h2 class="text-2xl font-semibold mb-4">Higher Education in Germany</h2>
        <p class="text-lg mb-6">Several of the top universities in the world are found in Germany, such as Heidelberg University...</p>
        <p class="text-lg mb-6">Teaching is emphasized in Germany's universities over research, with research being the focus of independent institutes...</p>
        <h2 class="text-2xl font-semibold mb-4">Attending a German University</h2>
        <p class="text-lg mb-6">All students wanting to attend a university in Germany will need to provide a copy of their Abitur...</p>
        <h2 class="text-2xl font-semibold mb-4">Why Study in Germany?</h2>
        <p class="text-lg mb-6">Germany has been named by several international educational groups as one of the most supportive countries for students...</p>
      `,
    };

    setCountryName(mockApiData.countryName);
    setCountryContent(mockApiData.countryContent);
  }, []);

  if (!countryName || !countryContent) {
    return null;
  }

  return (
    <section className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About {countryName}</h1>
      <div dangerouslySetInnerHTML={{ __html: countryContent }} />
    </section>
  );
};

export default AboutCountry;
