import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden w-80 cursor-pointer"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <span className="mt-4 inline-block text-indigo-600 font-medium hover:underline">
            View Project →
          </span>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
