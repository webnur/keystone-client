"use client";
import React from "react";
import Image from "next/image";
import CustomAccordion, { AccordionItem } from "./CustomAccordion";
import ApplyForm from "./ApplyForm";

const MiddleContent = () => {
  const accordionItems: AccordionItem[] = [
    {
      title: "Introduction",
      content: [
        {
          type: "paragraph",
          value: `
            Embark on your Product Management Journey!
            Enroll in IU's online master's program in product management to acquire the skills and knowledge essential for success in today's competitive business landscape. Through a comprehensive curriculum, you'll develop the expertise to create and manage successful products from inception to launch, leveraging market insights, strategic planning, and effective communication.
          `,
        },
        // Additional paragraphs omitted for brevity
        {
          type: "button",
          value: "Read more on the institution's website",
        },
      ],
    },
    {
      title: "Gallery",
      content: [
        {
          type: "slider",
          value: [
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
          ],
        },
      ],
    },
    {
      title: "Admissions",
      content: [
        {
          type: "paragraph",
          value: `
            **Academic Requirements**
            - Completed degree from a public or officially recognized university/higher education institution in a relevant field.
            - At least a “satisfactory” or Grade C equivalent earned in your previous degree.
            - Your undergraduate degree should be worth 180 ECTS credits.
          `,
        },
        // English requirements omitted for brevity
      ],
    },
    {
      title: "Scholarships and Funding",
      content: [
        {
          type: "paragraph",
          value: `
            **Secure Your Dream Career – Enjoy Up to 50% Savings!**
          `,
        },
        // Additional content omitted for brevity
        {
          type: "button",
          value: "View Scholarships",
        },
      ],
    },
    {
      title: "Free Upcoming IU Webinars and Q&A",
      content: [
        {
          type: "paragraph",
          value: `
            **Secure Your Dream Career – Enjoy Up to 50% Savings!**
          `,
        },
        {
          type: "paragraph",
          value: `
            Join IU's accredited online program and save up to 50% on your tuition fees. With IU's cutting-edge online campus and digital learning resources, you'll access affordable, high-quality education.
          `,
        },
        {
          type: "paragraph",
          value: `
            The best part? You decide when to begin!
          `,
        },
        {
          type: "paragraph",
          value: `
            *Note: This exceptional discount applies exclusively to the online study model. For insights on On-Campus study discounts, reach out to IU's Study Advisory Team.
          `,
        },
        {
          type: "button",
          value: "View Scholarships",
        },
      ],
    },
    {
      title: "Curriculum",
      content: [
        {
          type: "paragraph",
          value: `
            Your educational journey begins with a deep dive into the fundamentals of project management, encompassing industry best practices, essential project management requisites, strategic decision-making, and core leadership principles. Progressing through the program, attention shifts to mastering change management, embracing agile methodologies, innovating through creative work systems, and polishing soft skills crucial for effective interpersonal communication. Anchored by a commitment to practical application, you will bring your newly acquired expertise to life through a dynamic project simulation designed to provide an authentic, workplace-ready experience.
          `,
        },
        // Additional semesters and electives content omitted for brevity
      ],
    },
    {
      title: "Rankings",
      content: [
        {
          type: "paragraph",
          value: `
            **Accreditations, Rankings, and Memberships**
          `,
        },
        {
          type: "paragraph",
          value: `
            Accreditation: IU International University of Applied Sciences has received system accreditation from EQAR, FIBAA, the German Accreditation Council, the German Council of Science and Humanities, and WES Canada. This means their courses, faculty, and teaching material meet rigorous standards, allowing IU to accredit their own programs.
          `,
        },
        // Additional global recognition and memberships content omitted for brevity
      ],
    },
    {
      title: "Program Tuition Fee",
      content: [
        {
          type: "paragraph",
          value: `
            **Duration | Time Model | Monthly payments | Yearly payments | Total fees**
          `,
        },
        {
          type: "paragraph",
          value: `
            - **36 months** | Full-time | 295 € | 3536 € | 7072 €
            - **48 months** | Part-time I | 220 € | 2635 € | 7906 €
            - **72 months** | Part-time II | 214 € | 2568 € | 8296 €
          `,
        },
        {
          type: "paragraph",
          value: `
            *Note: Prices start from. Prices include the graduation fee of 799 €. Limited Offer: prices include up to 35% discount. Discounts and promotions are available on a seasonal basis; for a personalized offer, contact the University.
          `,
        },
      ],
    },
  ];

  return (
    <div className="mb-8">
      <div className="w-full rounded-lg shadow-md mb-4">
        <div className="rounded-t-lg overflow-hidden mb-4">
          <Image
            src="https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="University Building"
            width={800}
            height={300}
            className="w-full object-cover h-48 sm:h-64"
          />
        </div>

        <div className="px-4 py-2 space-y-1 sm:space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500">
            University of Bordeaux
          </h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Master in Economic Affairs
          </h1>
          <p className="text-sm sm:text-md text-gray-600">Bordeaux, France</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 border-t px-4 py-4">
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold">Duration</h3>
              <p className="text-xs sm:text-sm">1 Year</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🌐</span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold">Languages</h3>
              <p className="text-xs sm:text-sm">French, English</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">⚡</span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold">Pace</h3>
              <p className="text-xs sm:text-sm">Full time</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold">Application Deadline</h3>
              <p className="text-xs sm:text-sm">
                <a href="#" className="text-red-500 underline">
                  Request application deadline
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold">Earliest Start Date</h3>
              <p className="text-xs sm:text-sm">Sep 2025</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">💸</span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold">Tuition Fees</h3>
              <p className="text-xs sm:text-sm">
                <a href="#" className="text-red-500 underline">
                  Request tuition fees
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🏫</span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold">Study Format</h3>
              <p className="text-xs sm:text-sm">On-Campus</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-4">
        <CustomAccordion items={accordionItems} />
      </div>
      <div className="container mx-auto md:px-4">
        <ApplyForm />
      </div>
    </div>
  );
};

export default MiddleContent;
