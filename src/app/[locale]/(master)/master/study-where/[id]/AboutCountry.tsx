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
        <h2 class="text-xl font-semibold mb-4">Higher Education in Germany</h2>
        <p class="text-base mb-4 leading-relaxed">Several of the top universities in the world are found in Germany, such as Heidelberg University...</p>
        <p class="text-base mb-4 leading-relaxed">Teaching is emphasized in Germany's universities over research, with research being the focus of independent institutes...</p>
        <h2 class="text-xl font-semibold mb-4">Attending a German University</h2>
        <p class="text-base mb-4 leading-relaxed">All students wanting to attend a university in Germany will need to provide a copy of their Abitur...</p>
        <h2 class="text-xl font-semibold mb-4">Why Study in Germany?</h2>
        <p class="text-base mb-4 leading-relaxed">Germany has been named by several international educational groups as one of the most supportive countries for students...</p>
      `,
    };

    setCountryName(mockApiData.countryName);
    setCountryContent(mockApiData.countryContent);
  }, []);

  if (!countryName || !countryContent) {
    return null;
  }

  return (
    <section className="container mx-auto px-6 py-12 lg:ml-8">
      <h1 className="text-3xl font-bold mb-6">About {countryName}</h1>
      <div
        className="text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: countryContent }}
      />
    </section>
  );
};

export default AboutCountry;
