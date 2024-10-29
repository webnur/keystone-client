import React from "react";

const Introduction = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">Introduction</h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Ponce Health Sciences University is dedicated to providing the highest
        quality graduate medical education programs available. This goal, in
        addition to the university’s research and health services programs,
        continues a 40+ year tradition of enhancing our profession and
        contributing to our community.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Recognized both in Puerto Rico and abroad for educational service and
        research achievements, the university continues its focus in the
        disciplines of Medicine, Clinical Psychology, Biomedical Sciences,
        Public Health, and Nursing. To meet future challenges in the healthcare
        industry, the university is launching an innovative selection of masters
        and certificate programs specifically designed to fill service gaps
        within the profession and enhance the healthcare community with highly
        trained practitioners.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Our commitment to educational excellence is an underlying value that
        leads the university to seek and recruit not only outstanding faculty
        but also outstanding students. By combining expanded academic and
        professional educational offerings in a cooperative and intimate
        learning environment, Ponce Health Sciences University continues to
        graduate highly competent healthcare professionals dedicated to their
        community and the expanding future needs of their profession.
      </p>

      {/* Mission Section */}
      <h2 className="text-2xl font-semibold mb-2 mt-6">Mission</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The mission of Ponce Health Sciences University is to provide a
        world-class, culturally-competent, health sciences education to the
        population we serve, through innovative adaptive learning environments
        focused on the success of its students to become ethical practitioners
        and scientists.
      </p>

      {/* Vision Section */}
      <h2 className="text-2xl font-semibold mb-2 mt-6">Vision</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The PHSU vision is to build upon its reputation as a prestigious
        academic and research leader by continuing to educate underrepresented
        diverse populations while focusing research efforts on solving health
        disparities.
      </p>

      {/* Link to institution's website */}
      <a
        href="#"
        className="text-red-500 font-semibold underline hover:text-red-700"
      >
        Read more on the institutions website
      </a>
    </div>
  );
};

export default Introduction;
