import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    title: "Business Systems Analyst Co-op",
    company: "CIBC",
    date: "Sept 2025 - April 2026",
    description: [
      "Collaborate with business partners to gather and document requirements in Confluence and translate them into actionable Jira user stories and tasks.",
      "Support strategic technology projects by analyzing business needs, designing Salesforce-based solutions, and ensuring alignment with enterprise architecture standards.",
      "Utilize Salesforce dashboards and reports to provide insights that inform project decisions and validate requirements."
    ]

  },
  {
    title: "User Experience Researcher (Riipen LevelUP)",
    company: "COOCO",
    date: "Mar 2025 - April 2025",
    description: [
      "Led a user experience research project for COOCO, focusing on identifying usability issues and improving the overall user interface and experience.",
      "Conducted user testing sessions, gathered qualitative and quantitative feedback, and performed heuristic evaluations based on Nielsen’s 10 usability principles.",
      "Utilized Figma to design wireframes and high-fidelity prototypes, implementing user-centered design solutions based on research findings.",
      "Developed and presented design recommendations to stakeholders, directly influencing the redesign of key web pages to be more intuitive and accessible"
    ]

  },
  {
    title: "Apple iOS Tech Support Specialist",
    company: "Transcom",
    date: "June 2024 - Sept 2024",
    description: [
      "Resolved complex software and hardware issues for Apple devices, including iPhones, iPads, and MacBooks, leveraging diagnostic tools and technical expertise to optimize system performance.",
      "Troubleshot and resolved iCloud and Apple ID authentication issues, ensuring seamless data synchronization and account functionality across devices.",
      "Collaborated with cross-functional teams to escalate unresolved cases, contributing to backend support improvements and enhancing issue resolution processes."
    ]
  }
];

const education = [
  {
    title: "Bachelor's of Science in Computer Science (Honours) - Co-op",
    company: "Ontario Tech University",
    date: "2022 - 2026",
    description: "Relevant Courses: Analysis and Design of Algorithms, Data Structures, Object Oriented Programming, Databases & Concepts",
  },
  {
    title: "Ontario Secondary School Diploma",
    company: "Milliken Mills High School",
    date: "2018 - 2022",
  },
  
];

const TimelineCard = ({ item }) => (
  <div className="mb-16 ml-6 timeline-card">
    <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3.5 border-4 border-gray-900" />
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="text-gray-400">{item.company}</p>
      <p className="text-gray-300 text-sm italic">{item.date}</p>

      {/* Check if description is an array and render appropriately */}
      {Array.isArray(item.description) ? (
        <ul className="list-disc list-inside text-gray-300 mt-2">
          {item.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 mt-2">{item.description}</p>
      )}
    </div>
  </div>
);

export default function Timeline() {
  useEffect(() => {
    // Apply scroll-trigger animations for both up and down scrolls with new effects
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            end: "top 10%",
            scrub: true,
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-40 min-h-screen overflow-y-auto">
      <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-50">
        {/* Title or additional content */}
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {/* Work Experience Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-blue-400 mb-6">Work Experience</h3>
          <div className="relative border-l-4 border-blue-500">
            {experience.map((item, index) => (
              <TimelineCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-purple-400 mb-6">Education</h3>
          <div className="relative border-l-4 border-purple-500">
            {education.map((item, index) => (
              <TimelineCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
