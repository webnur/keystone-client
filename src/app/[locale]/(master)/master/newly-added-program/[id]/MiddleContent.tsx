"use client";
import React from 'react';
import Image from 'next/image';
import CustomAccordion from './CustomAccordion';

const MiddleContent = () => {
  const accordionItems = [
    {
      title: "Introduction",
      content: [
        {
          type: "paragraph",
          value: `
            The Master 2 in Economic Affairs is one of the postgraduate master's programs offered by the College of Law, Political Science, Economics, and Management of the University of Bordeaux.
            It is a full-time international degree taught in English, designed for recently graduated students and adult students of all ages with a professional background.
          `,
        },
        {
          type: "image",
          value: "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "slider",
          value: [
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
          ],
        },
        {
          type: "paragraph",
          value: `
            The program allows students to develop a broad understanding of key economic issues in international affairs and an in-depth knowledge of practical European and international business skills.
          `,
        },
        {
          type: "button",
          value: "Learn More",
        },
      ],
    },
    {
      title: "Admissions",
      content: [
        {
          type: "paragraph",
          value: `
            The Master 2 in Economic Affairs is one of the postgraduate master's programs offered by the College of Law, Political Science, Economics, and Management of the University of Bordeaux.
            It is a full-time international degree taught in English, designed for recently graduated students and adult students of all ages with a professional background.
          `,
        },
        {
          type: "image",
          value: "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "slider",
          value: [
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
          ],
        },
        {
          type: "paragraph",
          value: `
            The program allows students to develop a broad understanding of key economic issues in international affairs and an in-depth knowledge of practical European and international business skills.
          `,
        },
        {
          type: "button",
          value: "Learn More",
        },
      ],
    },
    {
      title: "Scholarship & Funds",
      content: [
        {
          type: "paragraph",
          value: `
            The Master 2 in Economic Affairs is one of the postgraduate master's programs offered by the College of Law, Political Science, Economics, and Management of the University of Bordeaux.
            It is a full-time international degree taught in English, designed for recently graduated students and adult students of all ages with a professional background.
          `,
        },
        {
          type: "image",
          value: "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "slider",
          value: [
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
          ],
        },
        {
          type: "paragraph",
          value: `
            The program allows students to develop a broad understanding of key economic issues in international affairs and an in-depth knowledge of practical European and international business skills.
          `,
        },
        {
          type: "button",
          value: "Learn More",
        },
      ],
    },
    {
      title: "Introduction",
      content: [
        {
          type: "paragraph",
          value: `
            The Master 2 in Economic Affairs is one of the postgraduate master's programs offered by the College of Law, Political Science, Economics, and Management of the University of Bordeaux.
            It is a full-time international degree taught in English, designed for recently graduated students and adult students of all ages with a professional background.
          `,
        },
        {
          type: "image",
          value: "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "slider",
          value: [
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=800",
          ],
        },
        {
          type: "paragraph",
          value: `
            The program allows students to develop a broad understanding of key economic issues in international affairs and an in-depth knowledge of practical European and international business skills.
          `,
        },
        {
          type: "button",
          value: "Learn More",
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
            className="w-full object-cover h-64"
          />
        </div>

        <div className="px-4 py-2 space-y-2">
          <h2 className="text-sm font-semibold text-gray-500">University of Bordeaux</h2>
          <h1 className="text-3xl font-bold text-gray-800">Master in Economic Affairs</h1>
          <p className="text-md text-gray-600">Bordeaux, France</p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-gray-700 border-t px-4 py-4">
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <div>
              <h3 className="text-sm font-semibold">Duration</h3>
              <p>1 Year</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🌐</span>
            <div>
              <h3 className="text-sm font-semibold">Languages</h3>
              <p>French, English</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">⚡</span>
            <div>
              <h3 className="text-sm font-semibold">Pace</h3>
              <p>Full time</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <div>
              <h3 className="text-sm font-semibold">Application Deadline</h3>
              <p><a href="#" className="text-red-500 underline">Request application deadline</a></p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <div>
              <h3 className="text-sm font-semibold">Earliest Start Date</h3>
              <p>Sep 2025</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">💸</span>
            <div>
              <h3 className="text-sm font-semibold">Tuition Fees</h3>
              <p><a href="#" className="text-red-500 underline">Request tuition fees</a></p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🏫</span>
            <div>
              <h3 className="text-sm font-semibold">Study Format</h3>
              <p>On-Campus</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <CustomAccordion items={accordionItems} />
      </div>
    </div>
  );
};

export default MiddleContent;
