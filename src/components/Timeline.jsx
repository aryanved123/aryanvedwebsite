import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    title: "Web Developer (Part-Time)",
    company: "Gross Innovations",
    date: "Jan 2025 - Present",
    description: "Developed and deployed advanced financial calculators, including Burn Rate, Runway, Customer Acquisition Cost (CAC), and Lifetime Value (LTV), to support data-driven decision-making for startups and businesses. Engineered a dynamic web application with React.js for an intuitive and responsive front-end, while leveraging MongoDB for a scalable and efficient back-end database.Worked within an Agile development team to enhance UI/UX workflows, optimize front-end performance, and integrate APIs for seamless data exchange and user interaction.",
  },
  {
    title: "iOS Tech Support Representative",
    company: "Transcom",
    date: "June 2024 - Sept 2024",
    description: "Resolved complex software and hardware issues for Apple devices, including iPhones, iPads, and MacBooks, leveraging diagnostic tools and technical expertise to optimize system performance."
  }
];

const education = [
  {
    title: "Bachelor's of Science in Computer Science",
    company: "Ontario Tech University",
    date: "2022 - 2026",
    description: "Relevant Courses: Artificial Intelligence, Data Structures, Mobile Development, Databases & Concepts",
  },
];

const skills = [
  "JavaScript", "Python", "React", "Flutter", "Node.js", "GSAP", "Tailwind CSS", "DaisyUI", "SQL", "Git",
];

const TimelineCard = ({ item, index }) => (
  <div className="mb-16 ml-6 timeline-card">
    <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3.5 border-4 border-gray-900" />
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="text-gray-400">{item.company}</p>
      <p className="text-gray-300 text-sm italic">{item.date}</p>
      <p className="text-gray-300 mt-2">{item.description}</p>
    </div>
  </div>
);

const SkillCard = ({ skill }) => (
  <div className="mb-4 mx-6">
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white">{skill}</h3>
    </div>
  </div>
);

export default function Timeline() {
  useEffect(() => {
    // Apply scroll-trigger animations for both up and down scrolls with new effects
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,  // Reduced offset to ensure smoother animation
          scale: 0.8,
        },
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

      {/* Adjusted Grid Layout to stack vertically on smaller screens */}
      <div className="grid grid-cols-1 gap-8">
        {/* Work Experience Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-blue-400 mb-6">Work Experience</h3>
          <div className="relative border-l-4 border-blue-500">
            {experience.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-purple-400 mb-6">Education</h3>
          <div className="relative border-l-4 border-purple-500">
            {education.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
