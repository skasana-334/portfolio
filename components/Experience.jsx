import { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)",
      duration: "June 2024 – Present",
      role: "Software Developer — C++, Java, Spring Boot, Microservices, Linux, Oracle",
      location: "Bangalore, India",
      points: [
        "Contributed as a Backend Developer in building and enhancing an enterprise-grade Anti-Money Laundering (AML) system, driving automation, risk detection, and regulatory compliance across millions of customer records.",
        "Built a watchlist update feature that automated keyword imports from external sources, eliminated batch failures, and improved daily processing speed by 40%.",
        "Integrated AI-generated risk score ingestion by parsing CSV data and mapping scores to existing customer entities. Enabled instant alert generation for high-risk profiles based on thresholds, reducing detection time by 100% compared to previous EOD batch jobs.",
        "Designed and deployed scalable RESTful APIs using Java and Spring Boot to support key AML modules, ensuring secure and maintainable backend services.",
      ],
    },
    {
      company: "Travel Raga Holidays Pvt. Ltd.",
      duration: "Nov 2022 – Dec 2022",
      role: "Frontend Web Developer Intern (React.js)",
      location: "Remote",
      points: [
        "Designed and developed responsive UI components for the company’s website using React.js, transforming Figma mockups into production-ready code.",
        "Implemented lazy loading, dialog modals, and React Hooks (useState, useEffect, useRef) to manage dynamic behaviors, improving performance on slower networks.",
        "Ensured cross-device responsiveness using CSS Grid and Flexbox, contributing to a 30% drop in mobile bounce rate.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
      
      {/* Left Section - Company Info */}
      <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-600 pb-4 md:pb-0 md:pr-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {exp.company}
        </h3>
        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-2">
          {exp.role}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          📍 {exp.location}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ⏳ {exp.duration}
        </p>
      </div>

      {/* Right Section - Points */}
      <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
          {(expanded ? exp.points : exp.points.slice(0, 2)).map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* Show Read More only if more than 2 points */}
        {exp.points.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}
