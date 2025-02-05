import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Project One" },
  { id: 2, title: "Project Two" },
  { id: 3, title: "Project Three" },
  { id: 4, title: "Project Four" },
];

export default function Projects() {
  useEffect(() => {
    projects.forEach((_, index) => {
      const randomDirection = [
        { x: -200, y: 0 }, // Left
        { x: 200, y: 0 },  // Right
        { x: 0, y: -200 }, // Top
        { x: 0, y: 200 },  // Bottom
        { x: -150, y: -150 }, // Top-left
        { x: 150, y: -150 },  // Top-right
        { x: -150, y: 150 },  // Bottom-left
        { x: 150, y: 150 },   // Bottom-right
      ][Math.floor(Math.random() * 8)]; // Randomize

      gsap.fromTo(
        `.project-card-${index}`,
        { opacity: 0, x: randomDirection.x, y: randomDirection.y, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: `.project-card-${index}`,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center gap-40 py-40 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-6xl font-extrabold text-white">My Projects</h2>
      {projects.map((project, index) => (
        <div key={project.id} className={`project-card-${index}`}>
          <ProjectCard project={project} />
        </div>
      ))}
    </section>
  );
}
