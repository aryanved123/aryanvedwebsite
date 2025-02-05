import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 150, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center gap-40 py-40 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Parallax Background integrated directly in Projects.jsx */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent)]"
        animate={{ y: [-50, 50] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <h2 className="text-6xl font-extrabold text-white relative z-10 mb-20">
        My Projects
      </h2>

      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.section>
  );
}
