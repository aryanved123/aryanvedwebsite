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
];

// Scroll animation for each project card
const fadeInUp = {
  hidden: { opacity: 0, y: 150, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

// Animation variants for horizontal, vertical, and diagonal
const horizontalAnimation = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const verticalAnimation = {
  hidden: { opacity: 0, y: -150 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const diagonalAnimation = {
  hidden: { opacity: 0, x: -100, y: -100 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center py-0 bg-gray-900 text-gray-200"
    >
      <motion.h2
        className="text-6xl font-extrabold text-white mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        My Projects
      </motion.h2>

      <div className="w-full flex flex-col space-y-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card relative flex justify-center items-center bg-transparent shadow-lg overflow-hidden h-screen w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={
              index % 3 === 0
                ? diagonalAnimation // Diagonal for odd index
                : index % 2 === 0
                ? horizontalAnimation // Horizontal for even index
                : verticalAnimation // Vertical for others
            }
          >
            <div className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="relative z-10 p-8 text-center space-y-4 max-w-4xl mx-auto">
              <h3 className="text-5xl font-semibold text-white">{project.title}</h3>
              <p className="text-lg text-gray-300">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-600 transition"
                  aria-label={`Visit live site for ${project.title}`}
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
