import React from "react";
import Skills from "./Skills";
import Timeline from "./Timeline";
import SmoothScroll from "./SmoothScroll";
import { motion } from "framer-motion";  // Import motion for animations

export default function AboutMe() {
  return (
    <SmoothScroll>
      <section className="text-white bg-gradient-to-b from-gray-900 to-black">
        {/* About Me Section */}
        <section className="min-h-screen py-16 sm:py-32 text-center font-poppins bg-gradient-to-b from-gray-900 to-black-800 mb-40">
          <motion.h2
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.25 }} // Trigger when 25% of the element is in view
          >
            About Me
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.25 }} // Trigger when 25% of the element is in view
          >
            Hello! My name is <span className="text-blue-400 font-bold">Aryan Ved</span>, and I am a third-year 
            <span className="text-purple-400 font-bold"> Computer Science </span> student at 
            <span className="text-indigo-400 font-bold"> Ontario Tech University.</span>  
            I'm passionate about <span className="text-pink-400 font-semibold">software development</span>, 
            <span className="text-green-400 font-semibold"> cybersecurity</span>, and 
            <span className="text-orange-400 font-semibold"> data analytics.</span>  
            When I'm not coding, you can find me solving <span className="text-yellow-400 font-bold">Rubik's cubes</span> 
            or working on projects that connect <span className="text-cyan-400 font-bold">technology</span> to real-world applications.
          </motion.p>
          
          {/* Add an image to the About Me section with scroll animation */}
          <motion.img
            src="/images/aryan-image.jpg" // Replace with your image URL
            alt="Aryan Ved"
            className="mt-12 mx-auto rounded-full w-48 h-48 object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.25 }} // Trigger when 25% of the element is in view
          />
        </section>

        {/* Skills Section */}
        <section className="py-20 mt-32">
          <div className="container mx-auto max-w-7xl text-center">
            <motion.h2
              className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.25 }}
            >
              Skills
            </motion.h2>
            <Skills />
          </div>
        </section>

        {/* Experience & Education Timeline */}
        <section className="mt-40">
          <Timeline />
        </section>

      </section>
    </SmoothScroll>
  );
}
