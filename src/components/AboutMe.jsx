import React from "react";
import Skills from "./Skills";
import Timeline from "./Timeline";
import SmoothScroll from "./SmoothScroll";
import { motion } from "framer-motion";  // Import motion for animations

export default function AboutMe() {
  return (
    <SmoothScroll>
      <section className="text-white bg-gradient-to-b from-black to-black">
        {/* About Me Section */}
        <section className="py-8 sm:py-16 text-center font-poppins black-to-bg-gradient from-black to-grey-800 mb-0">
          <motion.h2
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.25 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.25 }}
          >
            I am a third-year <span className="text-purple-400 font-bold">Computer Science</span> student at{" "}
        <span className="text-indigo-400 font-bold">Ontario Tech University</span> with a strong foundation in programming languages such as{" "}
        <span className="text-green-400 font-semibold">C++, C, Python, Java, and JavaScript</span>. My academic journey, combined with professional
        experiences, has allowed me to develop expertise in <span className="text-pink-400 font-semibold">software development</span>,
        <span className="text-orange-400 font-semibold"> web technologies</span>, and <span className="text-cyan-400 font-semibold">technical problem-solving</span>.
        Currently, I am working part-time as a <span className="text-blue-400 font-bold">Web Developer at Gross Innovations</span>, where I build intuitive web applications,
        leverage frameworks like <span className="text-yellow-400 font-bold">React.js</span>, and create scalable back-end solutions with{" "}
        <span className="text-green-400 font-bold">MongoDB</span>. My time as an <span className="text-orange-400 font-bold">iOS Tech Support Representative at Transcom </span> 
        further enriched my technical acumen, enabling me to resolve complex software and hardware issues while collaborating with cross-functional teams.
        Passionate about <span className="text-pink-400 font-semibold">coding</span> and creating <span className="text-cyan-400 font-semibold">impactful software</span>,
        I am eager to apply my skills to develop innovative solutions and enhance user experiences. When I'm not coding, you can find me solving{" "}
        <span className="text-yellow-400 font-bold">Rubik's cubes</span> or working on projects that connect <span className="text-cyan-400 font-bold">technology </span> 
        to real-world applications.
        </motion.p>

          <motion.img
            src="/images/IMG_5604.jpg" 
            alt="Aryan Ved"
            className="mt-12 mx-auto rounded-full w-48 h-48 object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.25 }}
          />
        </section>

        {/* Skills Section */}
        <section className="py-16 mt-8">
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
        <section className="py-16 min-h-screen">
          <Timeline />
        </section>
      </section>
    </SmoothScroll>
  );
}
