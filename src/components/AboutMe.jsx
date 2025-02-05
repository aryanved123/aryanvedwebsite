import React from "react";
import Skills from "./Skills";
import Timeline from "./Timeline";
import SmoothScroll from "./SmoothScroll";

export default function AboutMe() {
  return (
    <SmoothScroll>
      <section className="text-white">
        {/* About Me Section */}
        <section className="py-16 text-center font-poppins bg-gradient-to-b from-gray-900 to-black">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hello! My name is <span className="text-blue-400 font-bold">Aryan Ved</span>, and I am a third-year 
            <span className="text-purple-400 font-bold"> Computer Science </span> student at 
            <span className="text-indigo-400 font-bold"> Ontario Tech University.</span>  
            I'm passionate about <span className="text-pink-400 font-semibold">software development</span>, 
            <span className="text-green-400 font-semibold"> cybersecurity</span>, and 
            <span className="text-orange-400 font-semibold"> data analytics.</span>  
            When I'm not coding, you can find me solving <span className="text-yellow-400 font-bold">Rubik's cubes</span> 
            or working on projects that connect <span className="text-cyan-400 font-bold">technology</span> to real-world applications.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-20 mt-16">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-10">
              Skills
            </h2>
            <Skills />
          </div>
        </section>

        {/* Experience & Education Timeline */}
        <Timeline />
      </section>
    </SmoothScroll>
  );
}
