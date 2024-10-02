import React from "react";

// This is a prop to pass the dynamic country name and content
interface AboutCountryProps {
  countryName: string;
}

const AboutCountry: React.FC<AboutCountryProps> = ({ countryName }) => {
  return (
    <section className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About {countryName}</h1>
      <h2 className="text-2xl font-semibold mb-4">Higher Education in {countryName}</h2>
      <p className="text-lg mb-6">
        Several of the top universities in the world are found in {countryName}, such as Heidelberg University
        (Ruprecht-Karls-Universitat Heidelberg, founded in 1386); Freiburg University (founded in 1457);
        Munich Technical University (Technische Universitat München); and the Max Planck Institute for
        Evolutionary Anthropology in Leipzig. The majority of {countryName}'s universities are public and
        currently charge tuition fees of approximately 60 euros or $80 U.S. dollars per semester.
      </p>
      <p className="text-lg mb-6">
        Teaching is emphasized in {countryName}'s universities over research, with research being the focus of
        independent institutes known for their traditional approach to the social sciences. For students who wish
        to pursue a degree in psychology, anthropology, philosophy, or sociology, acceptance into one of these
        research universities is extremely competitive and geared toward students who have shown exceptional
        talent and brilliance in a particular field.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Attending a {countryName} University</h2>
      <p className="text-lg mb-6">
        All students wanting to attend a university in {countryName} will need to provide a copy of their Abitur,
        a document also used in Estonia and Finland to designate the successful completion of final exams given
        in their final year of secondary education. 
      </p>
      <p className="text-lg mb-6">
        German Visas for International Students: For short stays of up to three months (students taking summer
        courses, for example), a Schengen Visa is required to remain in the country. Students should be aware
        that they must leave {countryName} at the end of the three months if they choose to obtain a Schengen Visa
        and should plan accordingly before applying for this type of visa.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Why Study in {countryName}?</h2>
      <p className="text-lg">
        {countryName} has been named by several international educational groups as one of the most supportive
        countries for students wishing to earn degrees in a country other than their own. Complementing this
        recognition is the fact that tuition charged by many {countryName} universities is minimal to none,
        further making studying in {countryName} an attractive and exciting prospect for students wishing to
        attend school in a country different from their own.
      </p>
    </section>
  );
};

export default AboutCountry;
