import React from "react";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Skills from "./Skills";
import Timeline from "./Timeline";

export default function AboutMe() {
  return (
    <Parallax pages={3}>
      {/* Background Parallax Layer */}
      <ParallaxLayer offset={0} speed={0.2} className="bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      </ParallaxLayer>

      {/* Foreground Content */}
      <ParallaxLayer offset={0.1} speed={0.5}>
        <section className="relative text-white text-center font-poppins py-16">
          <motion.h2
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
        </section>
      </ParallaxLayer>

      {/* Skills Section */}
      <ParallaxLayer offset={1} speed={0.3}>
        <section className="py-20 mt-16 text-center">
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>
          <Skills />
        </section>
      </ParallaxLayer>

      {/* Experience & Education Timeline */}
      <ParallaxLayer offset={2} speed={0.5}>
        <Timeline />
      </ParallaxLayer>
    </Parallax>
  );
}
