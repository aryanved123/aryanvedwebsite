import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mt-4 block"
      >
        View Project
      </a>
    </motion.div>
  );
}
