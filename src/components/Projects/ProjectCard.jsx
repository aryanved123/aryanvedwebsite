import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-transparent border-2 border-gray-700 p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Project Image */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-lg mb-6"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-300 mb-4">{project.description}</p>

      {/* Project Links */}
      <div className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Project
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
