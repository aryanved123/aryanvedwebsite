import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    image: "/images/project1.jpg",
    github: "https://github.com/project1",
    live: "https://project1.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    image: "/images/project2.jpg",
    github: "https://github.com/project2",
    live: "https://project2.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 150, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center py-40 bg-gray-900 text-gray-200"
    >
      <motion.h2
        className="text-6xl font-extrabold text-white mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        My Projects
      </motion.h2>

      <div className="w-full max-w-7xl space-y-20">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card relative bg-transparent border-2 border-gray-500 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 150, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 text-center space-y-4">
              <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
              <p className="text-lg text-gray-300">{project.description}</p>
              <div className="space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-600 transition"
                >
                  Live Site
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
