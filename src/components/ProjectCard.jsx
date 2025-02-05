import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="w-[80vw] h-[70vh] bg-gradient-to-r from-indigo-700 to-purple-800 
                 shadow-2xl rounded-xl flex items-center justify-center text-white 
                 text-4xl font-bold tracking-wide border border-white/30"
    >
      {project.title}
    </motion.div>
  );
}
