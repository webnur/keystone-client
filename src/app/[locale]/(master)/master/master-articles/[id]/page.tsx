import React from "react";
import Scholarship from "./Scholarship";
import PageContent from "./PageContent";
import GraduateSchoolInsights from "./Graduate";
import FiveSecondSummary from "./Summary";

const Page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Positioned Background Color */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ height: "80vh", backgroundColor: "#f5f4eb", zIndex: "-1" }}
      ></div>

      {/* Main Container */}
      <div className="relative container mx-auto flex gap-8 pt-6">
        {/* Main Content */}
        <div className="w-full lg:w-4/6 space-y-8">
          <GraduateSchoolInsights />
          <FiveSecondSummary />

          {/* Section 1 */}
          <section
            id="section1"
            className="bg-white p-6 text-gray-700 text-lg text-semibold"
          >
            <p>
              Are you wondering how to stand out in college applications? If
              you're one of many students that are trying to figure out how to
              get into college, this article is for you!
            </p>
            <br />
            <p>
              We interviewed Mr Mark Khan, the Director of Marketing and
              Enrollment at Boston University Graduate School of Arts and
              Sciences, and asked him about the current graduate school
              application trends, and what advice he can offer to prospective
              students.
            </p>
            <br />
            <p>
              Here all of the helpful application tips we talked about in the
              interview.
            </p>
          </section>

          <section
            id="section2"
            className="bg-white p-6 text-gray-700 text-lg text-semibold"
          >
            <h2 className="text-2xl font-bold mb-4">
              What universities expect from students
            </h2>
            <p>
              <ol>
                <li>
                  Universities actively engage with students to encourage them
                  to submit applications.
                </li>
                <li>
                  Students then make efforts to persuade the universities to
                  accept their applications.
                </li>
                <li>
                  Once accepted, universities continue their engagement efforts
                  to retain the students in their programs.
                </li>
              </ol>
            </p>
            <p>
              The university-student relationship during the recruitment phase
              can be seen as a continuous cycle of mutual persuasion and
              engagement. Both parties actively participate in this process,
              with universities trying to attract potential students and
              students working hard to secure their place.
            </p>
          </section>
          <section
            id="section2"
            className="bg-white p-6 text-gray-700 text-lg text-semibold"
          >
            <h2 className="text-2xl font-bold mb-4">
              Competition for limited program spots means students have to put
              more effort in standing out
            </h2>
            <p>
              As a student, youre no longer just competing with a neighbor down
              the street – you're competing with students from all over the
              world.
            </p>
            <br />
            <p>
              What's more, as students have gotten savvier: they know what
              answers schools are looking for in order to get those acceptance
              letters, and they’re applying to way more schools (3-5 before, and
              7-10 on average today) to increase their chances of getting
              accepted.
            </p>
            <br />
            <p>
            This all means that as a student, it’s very important to differentiate yourself in some way.


            </p>
            <p>The next section will focus on what universities look for in candidates, and what red flags can cause your application to be disregarded.</p>
          </section>

          {/* Section 3 */}
          <section
            id="section3"
            className="bg-white p-6 text-gray-700 text-lg text-semibold"
          >
            <h2 className="text-2xl font-bold mb-4">Common student pitfalls</h2>
            <p>Content for this section...</p>
          </section>

          {/* Section 4 */}
          <section
            id="section4"
            className="bg-white p-6 text-gray-700 text-lg text-semibold"
          >
            <h2 className="text-2xl font-bold mb-4">
              Demand for shorter programs is growing
            </h2>
            <p>Content for this section...</p>
          </section>

          {/* Section 5 */}
          <section id="section5" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              Modern students are consumer-savvy
            </h2>
            <p>Content for this section...</p>
          </section>

          {/* Section 6 */}
          <section id="section6" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              Other trends in graduate recruitment
            </h2>
            <p>Content for this section...</p>
          </section>
          <FiveSecondSummary
            title="As a student:"
            icon="🎓"
            points={[
              "Remember that universities, especially graduate schools, expect their prospective students to actively engage and put in the effort to earn their spot. Many universities, including Boston University, have dedicated program admission boards - this means that your application will be seen by many different faculty members. Its important to use this opportunity to show why youre a good fit for the program, as well as what youd be contributing to the university once admitted.",
            ]}
          />
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block w-1/4 ml-10">
          <PageContent />
        </aside>
      </div>
    </div>
  );
};

export default Page;
