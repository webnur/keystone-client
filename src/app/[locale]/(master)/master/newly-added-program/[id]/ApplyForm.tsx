"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const countryCodes = [
  { name: "Bangladesh", code: "+880" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "India", code: "+91" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  // Add more country codes as needed
];

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    helpQuery: "Can you send me more information about this program?",
    firstName: "",
    lastName: "",
    gender: "",
    country: "Bangladesh",
    email: "",
    countryCode: "+880",
    phone: "",
    consent: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isCheckbox = (e.target as HTMLInputElement).type === "checkbox";

    setFormData((prevData) => ({
      ...prevData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full mx-auto bg-white p-6 shadow-lg rounded-lg border-t-4 border-red-500">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Complete this form and the school's admissions team will reply to you.
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">
            How can we help you? *
          </label>
          <select
            name="helpQuery"
            value={formData.helpQuery}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option>Can you send me more information about this program?</option>
            <option>I'd like to speak with an admissions representative</option>
            <option>Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Country of Residence *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Bangladesh">Bangladesh</option>
              {/* Add more country options as needed */}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Phone *</label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-24"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} ({country.name})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-grow p-2 border border-gray-300 rounded"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <div className="flex items-start mt-4">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="h-4 w-4 text-red-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-600">
            I consent to receive information about studies, events and discount offers
            of the IU International University of Applied Sciences by e-mail. I have
            the right to revoke this consent at any time without giving reasons by
            sending an email to datenschutz@iu.org.
          </label>
        </div>

        <div className="text-sm text-gray-600 mt-4 space-y-2">
          <p>
            I have read the Privacy Policy according to which the educational institution
            IU International University of Applied Sciences processes the personal data I
            have provided as described in the Privacy Policy in order to process my
            request and send me the requested information material.
          </p>
          <p>
            I give my consent to the processing of my telephone number so that the
            educational institution IU International University, business address
            Juri-Gagarin-Ring 152 · 99084 Erfurt, Germany can contact me by telephone to
            discuss the compilation of the information materials.
          </p>
          <p>
            I have the right to withdraw this consent at any time without giving reasons
            by sending an email to datenschutz@iu.org, without affecting the lawfulness of
            the processing carried out on the basis of my consent until withdrawal.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Submit
        </button>

        <div className="mt-4 text-sm text-gray-500 space-y-2">
          <p>Your contact details will only be used for the admissions process.</p>
          <p>
            Your information will be sent directly to the program provider. If available,
            we will also send you information about the requested and relevant programs
            and a link where you can sign up for the program directly.
          </p>
          <p>
            As part of our free service, we will also create an account for you in our
            platform, StudentHub, where you can communicate with the program and manage
            your preferences.
          </p>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          See Keystone Academic Solutions <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy statement</a>.
        </p>

        <p className="text-center text-xs text-gray-400 mt-2">
          This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
        </p>
      </form>
    </div>
  );
};

export default ApplyForm;
