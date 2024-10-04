// pages/fields.tsx
import Link from "next/link";

// Define a type for fields of study
type FieldOfStudy = {
  name: string;
  link: string;
};

// Fields data with names and links
const fieldsOfStudy: FieldOfStudy[] = [
  { name: "Accountancy (121)", link: "/accountancy" },
  { name: "Accounting (1179)", link: "/accounting" },
  { name: "Administration Studies (1201)", link: "/administration-studies" },
  { name: "Allied Healthcare (172)", link: "/allied-healthcare" },
  { name: "Accountancy (121)", link: "/accountancy" },
  { name: "Accounting (1179)", link: "/accounting" },
  { name: "Administration Studies (1201)", link: "/administration-studies" },
  { name: "Allied Healthcare (172)", link: "/allied-healthcare" },
  { name: "Accountancy (121)", link: "/accountancy" },
  { name: "Accounting (1179)", link: "/accounting" },
  { name: "Administration Studies (1201)", link: "/administration-studies" },
  { name: "Allied Healthcare (172)", link: "/allied-healthcare" },
  { name: "Accountancy (121)", link: "/accountancy" },
  { name: "Accounting (1179)", link: "/accounting" },
  { name: "Administration Studies (1201)", link: "/administration-studies" },
  { name: "Allied Healthcare (172)", link: "/allied-healthcare" },
  { name: "Accountancy (121)", link: "/accountancy" },
  { name: "Accounting (1179)", link: "/accounting" },
  { name: "Administration Studies (1201)", link: "/administration-studies" },
  { name: "Allied Healthcare (172)", link: "/allied-healthcare" },
  { name: "Accountancy (121)", link: "/accountancy" },
  { name: "Accounting (1179)", link: "/accounting" },
  { name: "Administration Studies (1201)", link: "/administration-studies" },
  { name: "Allied Healthcare (172)", link: "/allied-healthcare" },
  { name: "Allied Healthcare (172)", link: "/allied-healthcare" },
  // Add more fields with links here...
];

const BookMarksPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Content */}
      <div className="flex flex-col items-center py-10">
        <h2 className="text-2xl font-semibold mb-6">
          Fields of study that may interest you:
        </h2>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {fieldsOfStudy.map((field, index) => (
            <Link
              key={index}
              href={field.link}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
            >
              {field.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMarksPage;
