import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    title: "Software Engineering Intern",
    company: "Cohere",
    date: "May 2024 - Aug 2024",
    description: "Developed scalable AI-powered applications with cutting-edge NLP models.",
  },
  {
    title: "iOS Tech Support Rep",
    company: "Transcom",
    date: "Jan 2024 - Present",
    description: "Provided technical support for Apple devices, troubleshooting hardware & software issues.",
  },
];

const education = [
  {
    title: "BSc Computer Science",
    company: "Ontario Tech University",
    date: "2022 - 2026",
    description: "Specialized in software development, cybersecurity, and data analytics.",
  },
];

const TimelineCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mb-10 ml-6"
  >
    <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3.5 border-4 border-gray-900" />
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="text-gray-400">{item.company}</p>
      <p className="text-gray-300 text-sm italic">{item.date}</p>
      <p className="text-gray-300 mt-2">{item.description}</p>
    </div>
  </motion.div>
);

export default function Timeline() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-12">
        Experience & Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Timeline */}
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
