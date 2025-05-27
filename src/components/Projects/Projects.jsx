import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Project3D from "./Project3D";
import ProjectSection from "./ProjectSection";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "AI Car Mod Chatbot",
    language: "Created using Flask, HTML and OpenRouter AI.",
    image: "/images/ai-carbot.png",
    github: "https://github.com/aryanved123/AI-Car-Mod-Bot"
  },
  {
    id: 2,
    title: "Exotic Car Rental App",
    language: "Created using Flutter, Dart, Firebase.",
    image: "/images/rentalappfront.jpg",
    live: "https://www.youtube.com/shorts/OjF_Pw3BkwQ",
  },
  {
    id: 3,
    title: "Financial Calculator Web App",
    language: "Created using Node.js, Express.js and MongoDB.",
    github: "https://github.com/aryanved123/FinancialCalculator",
  },
  {
    id: 3,
    title: "Ultimate Texas Holdem Poker Game",
    language: "Created using Node.js, Express.js and MongoDB.",
    image: "/images/rentalappfront.jpg",
    github: "https://github.com/aryanved123/Ultimate-Texas-Holdem-Game",
    live: "https://ultimate-texas-holdem-game.vercel.app/"
  },

  {
    id: 4,
    title: "Online Library",
    language: "Created using HTML, CSS, JavaScript, GlassFish",
    image: "/images/libraryimg2.png",
    github: "https://github.com/aryanved123/library.github.io",
    live: "https://aryanved123.github.io/library.github.io/catalogue.html",
  },
  
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
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black w-full h-full z-[-1]" />

      <Canvas camera={{ position: [0, 0, 5] }} className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Environment preset="city" />
        <Project3D />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="relative flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white text-center mt-140 mb-10">My Projects</h1>
        
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
