import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Project3D from "./Project3D";
import ProjectSection from "./ProjectSection";
import Footer from "../Footer"; // Import Footer here

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Exotic Car Rental App", language: "Created using Flutter, Dart, Firebase.", image: "/images/rentalappfront.jpg", github: "#", live: "https://www.youtube.com/shorts/OjF_Pw3BkwQ", read: "#" },
  { id: 2, title: "Online Library", language: "Created using HTML, CSS, JavaScript, GlassFish", image: "/images/libraryimg2.png", github: "#", live: "#" },
  { id: 3, title: "Domino Game", language: "Created using Python and Tkinter.", image: "/images/domino-game.png", github: "https://github.com/aryanved123/domino-game"},
];

export default function Projects() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient (Fixed) */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black w-full h-full z-[-1]" />

      {/* 3D Background */}
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Environment preset="city" />
        <Project3D />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Projects Section */}
      <div className="relative flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white text-center mt-140 mb-150">My Projects</h1>
        
        {/* Loop Through Projects */}
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Add Footer Below Projects */}
      <Footer /> {/* This is where the Footer is added */}
    </div>
  );
}
