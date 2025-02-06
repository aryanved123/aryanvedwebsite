import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    title: "Software Engineering Intern",
    company: "Cohere",
    date: "May 2024 - Aug 2024",
    description: "Developed scalable AI-powered applications with cutting-edge NLP models.",
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

const TimelineCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mb-16 ml-6"
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
  useEffect(() => {
    // Apply scroll trigger animations for both up and down scrolls
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 75%",  // Trigger earlier for more room
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-40">
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
