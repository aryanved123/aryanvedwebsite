import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project3D from "./Project3D";
import ProjectSection from "./ProjectSection";
import Footer from "../Footer";
import { useSmoothScroll } from "./useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "AI Car Mod Chatbot", language: "Created using Flask, HTML and OpenRouter AI.", image: "/images/ai-carbot.png", github: "https://github.com/aryanved123/AI-Car-Mod-Bot" },
  { id: 2, title: "Exotic Car Rental App", language: "Created using Flutter, Dart, Firebase.", image: "/images/rentalappfront.jpg", live: "https://www.youtube.com/shorts/OjF_Pw3BkwQ" },
  { id: 3, title: "Ultimate Texas Holdem Poker Game", language: "Created using Node.js, Express.js and MongoDB.", image: "/images/Poker-Game-Pic.png", github: "https://github.com/aryanved123/Ultimate-Texas-Holdem-Game", live: "https://ultimate-texas-holdem-game.vercel.app/" },
  { id: 4, title: "Online Library", language: "Created using HTML, CSS, JavaScript, GlassFish", image: "/images/libraryimg2.png", github: "https://github.com/aryanved123/library.github.io", live: "https://aryanved123.github.io/library.github.io/catalogue.html" },
  { id: 5, title: "ViB Digital Vision Board App (via Riipen Future Path)", language: "Created using Flutterflow and Firebase.", image: "/images/Vib.PNG" },
  { id: 6, title: "Blue Marble Academy Voice Memos (via Riipen LevelUp)", language: "Created using React.js, Tailwind CSS, CosmosDB" },
];

export default function Projects() {
  useSmoothScroll();

  useEffect(() => {
    // Hero text entrance
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 24, filter: "blur(4px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power3.out", delay: 0.1 }
    );
    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.25 }
    );
    gsap.fromTo(
      ".hero-accent",
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power2.out", delay: 0.35, transformOrigin: "left" }
    );
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* keep your background colors exactly as-is */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black w-full h-full z-[-1]" />

      {/* subtle film grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.06] mix-blend-soft-light"
           style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "4px 4px" }} />

      {/* 3D background */}
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 6, 4]} intensity={1.2} />
        <Environment preset="city" />
        <Project3D />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Hero */}
      <header className="relative w-full pt-28 md:pt-36 pb-10 flex flex-col items-center text-center">
        <h1 className="hero-title text-5xl md:text-6xl font-extrabold tracking-tight text-white mt-40">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-white">
            My Projects
          </span>
        </h1>
        <div className="hero-accent mt-4 h-[3px] w-40 md:w-76 rounded-full bg-gradient-to-r from-white/70 via-white to-white/70 mb-40" />
        <div className="relative mt-6 mb-32 flex flex-col items-center">
        {/* vertical line */}
        <div className="h-24 w-[3px] bg-gradient-to-b from-white/70 via-white to-white/70 rounded-full"></div>
        {/* arrowhead */}
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white mt-[2px]"></div>
      </div>
        <p className="hero-subtitle mt-4 max-w-2xl text-gray-300/90 text-lg md:text-xl">
        </p>
      </header>

      {/* Projects list */}
      <main className="relative flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
