import { motion } from "framer-motion";
import Project3D from "./Project3D";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="project-card relative w-[85vw] max-w-6xl h-[75vh] bg-white/10 backdrop-blur-lg 
                 shadow-2xl rounded-3xl flex items-center gap-12 p-16 text-white 
                 border border-white/30 transition-transform duration-300 hover:scale-105"
    >
      <Project3D image={project.image} />

      <div className="flex flex-col text-left">
        <h3 className="text-5xl font-bold mb-4">{project.title}</h3>
        <p className="text-xl text-gray-300 mb-6">{project.description}</p>
        <div className="mt-5 flex gap-6">
          <a
            href={project.demo}
            target="_blank"
            className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-700 transition text-lg"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-900 transition text-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
