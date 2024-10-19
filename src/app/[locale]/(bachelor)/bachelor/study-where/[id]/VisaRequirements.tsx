import Link from "next/link";
import React from "react";

const VisaRequirements: React.FC = () => {
  return (
    <section className="py-16 bg-white container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">Visa Requirements</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          1. Language Course Visa (Visa for Language Learning)
        </h3>
        <p className="text-gray-700">
          The perfect option for those that want to learn the German language in
          Germany.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          2. Student Applicant Visa (Visum Zur Studienbewerbung)
        </h3>
        <p className="text-gray-700">
          If you want to study in Germany but are still trying to find the right
          program or you still havent got the confirmation letter from your
          University.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          3. Student Visa (Visum Zu Studienzwecken)
        </h3>
        <p className="text-gray-700">
          If you have already been accepted to a German university.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          What type of Visa do you need?
        </h3>
        <p className="text-gray-700">
          <strong>Visa name:</strong> Language Course Visa; Student Applicant
          Visa; Student Visa
        </p>
        <p className="text-gray-700">
          <strong>Price and currency:</strong> EUR 60
        </p>
        <p className="text-gray-700 mt-4">
          You should expect to pay €60 (~US$74) for your student visa to
          Germany.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Who can apply for the visa?</h3>
        <p className="text-gray-700">
          For citizens from the EU or from Iceland, Norway, Switzerland, or
          Liechtenstein, it is only necessary to have an identity card to enter
          Germany. It is not necessary to have a visa.
        </p>
        <p className="text-gray-700">
          Citizens from Australia, Israel, Japan, Canada, New Zealand, South
          Korea, and the USA can apply for their visa even after they arrived in
          Germany.
        </p>
        <p className="text-gray-700">
          For citizens from other countries, it is necessary to apply for a visa
          before coming to Germany.
        </p>
        <p className="text-gray-700">
          If staying less than 90 days in Germany, citizens from certain
          countries can enter Germany without a visa. These countries include
          Venezuela, Vatican City, Uruguay, Singapore, Seychelles, and many
          more.
        </p>
        <p className="text-gray-700">
          Visit the website of the German Federal Foreign Office for the latest
          visa requirements for all countries:{" "}
          <Link href="https://auswaertiges-amt.de" className="text-blue-600">
            Visa information - Federal Foreign Office
          </Link>
          .
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Where can you make the application?
        </h3>
        <p className="text-gray-700">
          Youll need to apply for a visa from the German embassy or consulate in
          your home country.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">How to make the application?</h3>
        <p className="text-gray-700">
          First, you need to schedule an appointment for a visa interview. On
          the day of the interview, you should bring the following visa
          application documents:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Completed application form</li>
          <li>Valid passport</li>
          <li>Two photographs</li>
          <li>Letter showing youve been accepted by a German university</li>
          <li>Transcript of academic record</li>
          <li>
            Certificate of German language proficiency or proof that you intend
            on attending a language course in Germany
          </li>
          <li>
            Proof that you have sufficient funds to support yourself while
            living in Germany (€8,700 per year)
          </li>
          <li>Certificate showing you’ve purchased health insurance</li>
          <li>Declaration of the authenticity of documents submitted</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Dependent on the embassy, you may also need to show proof that you
          don’t have a criminal record.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">When should you apply?</h3>
        <p className="text-gray-700">
          Examination of the visa application usually takes about 6 to 8 weeks
          for a language course. However, if the language course is longer than
          three months, processing can extend up to 8 to 10 weeks.
        </p>
        <p className="text-gray-700">
          You should apply as soon as possible, and at least three months before
          your move to the country.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Processing time</h3>
        <p className="text-gray-700">8 Weeks</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Work opportunities</h3>
        <p className="text-gray-700">
          Citizens of EU/EEA countries and Switzerland can work freely in
          Germany but for no more than 20 hours a week during term time.
          Non-EU/EEA citizens can work up to 120 full or 240 half days a year.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Why do you need this type of visa?
        </h3>
        <p className="text-gray-700">
          These are the main reasons why your visa application for a German
          student visa may be rejected:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Poor financial status</li>
          <li>Poor academic profile</li>
          <li>Lack of preparation for your interview</li>
          <li>Insufficient language level (German or English)</li>
          <li>Inconsistency with your choice of study program</li>
        </ul>
      </div>
    </section>
  );
};

export default VisaRequirements;
