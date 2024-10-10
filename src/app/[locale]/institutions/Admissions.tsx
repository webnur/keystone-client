import React from 'react';

const Admissions = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Admissions</h2>
      <p className="text-gray-700">
        Applicants to <strong>Ponce Health Sciences University</strong> are selected on the basis of scholastic achievement, fitness, and aptitude for study along with other personal qualifications. The Admissions Committees also give consideration to the use of language, special aptitudes, mechanical skills, stamina, perseverance, and motivation. Students are admitted on the basis of individual qualifications, regardless of handicap, sex, race, religion, age, national origin, marital status, or sexual or political orientation.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800">Americans with Disabilities Act (ADA)</h3>
      <p className="text-gray-700">
        PHSU Admissions Office and the Admissions Committees act by the <strong>“Americans with Disabilities Act of 1990”</strong> which includes changes made by the ADA Amendments Act of 2008. Once the candidate is accepted, if he/she needs special accommodations, they are responsible for contacting the Academic Affairs Office for further information. It is the student’s responsibility to make his/her condition known to PHSU Administrators and seek assistance.
      </p>
      
      <p className="text-gray-700">
        Applicants with disabilities will be evaluated on a case-by-case basis in accordance with the medical technical standard guidelines suggested by the Association of American Medical Colleges. All students must possess the physical and emotional capabilities required to independently undertake the full curriculum and to achieve the levels of competence required by the faculty.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800">International Application Requirements</h3>
      <p className="text-gray-700">
        Each academic program has its own set of admissions requirements. International students will need to meet those requirements in addition to the following.
      </p>
      
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>
          <strong>Transcripts:</strong> Applicants who completed coursework outside the U.S. must submit their transcript(s) for evaluation to the service listed below. The evaluation will indicate whether each course is considered undergraduate, graduate, or professional. All foreign transcripts must be evaluated course-by-course with letter grades, pass/fail, or credit/no credit. The completed evaluation must be sent directly to Ponce Health Sciences University Admissions Office from the evaluation service.
        </li>
      </ul>
      
      <div className="bg-gray-100 p-4 rounded-md space-y-2">
        <p><strong>World Education Services (WES)</strong></p>
        <p>P.O. Box 5087, Bowling Green Station</p>
        <p>New York, NY 10274-5087</p>
        <p>(212) 966-6311</p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-md space-y-2">
        <p><strong>Educational Credential Evaluators (ECE)</strong></p>
        <p>101 W. Pleasant St. Suite 200</p>
        <p>Milwaukee, WI 53212-3963</p>
        <p>(414) 289-3400</p>
      </div>

      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>
          <strong>Language Proficiency:</strong> Applicants to PHSU locations in St. Louis or BVI must demonstrate English language proficiency. International students whose principal language is not English must submit scores from the Test of English as a Foreign Language (TOEFL). The minimum scores accepted are:
        </li>
      </ul>

      <div className="bg-gray-100 p-4 rounded-md space-y-2">
        <ul className="list-disc pl-4">
          <li>600 on the paper-based test</li>
          <li>250 on the computer-based test</li>
          <li>100 on the internet-based test</li>
        </ul>
        <p>For more details about the exam, visit our website.</p>
      </div>

      <p className="text-gray-700">
        Applicants to PHSU locations in Puerto Rico must be bilingual in English and Spanish to be eligible for admission to the MD Program, given that PHSU’s partner hospitals and clinics in Ponce serve a predominantly Spanish-speaking population. A Language Assessment Evaluation may be required.
      </p>
    </div>
  );
};

export default Admissions;
