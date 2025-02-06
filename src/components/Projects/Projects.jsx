import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import { projects } from "./data"; // Import your project data

export default function Projects() {
  const sectionRef = useRef(null);

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const scrollTop = window.scrollY;

      // Add a scroll effect when scrolling down
      if (scrollTop > 0) {
        section.classList.add("scrolled");
      } else {
        section.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-40 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      {/* Parallax Background Animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent)]"
        animate={{ y: [-20, 20] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Projects Title */}
      <motion.h2
        className="text-6xl font-extrabold mb-16 relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 150, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: index * 0.3,
              ease: "easeOut",
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
