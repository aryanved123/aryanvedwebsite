import { Parallax } from "react-parallax";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Exotic Car Rental App",
    description: "A sleek app for renting luxury cars with real-time availability.",
    image: "/exotic-car-rental.png",
    link: "#",
  },
  {
    title: "Online Library",
    description: "A digital library platform for borrowing and reading books online.",
    image: "/online-library.png",
    link: "#",
  },
  {
    title: "Rock Paper Scissors Game",
    description: "An interactive game with animations and multiplayer support.",
    image: "/rock-paper-scissors.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Parallax key={index} bgImage={project.image} strength={300} className="rounded-xl shadow-lg">
            <div className="h-96 flex items-center justify-center bg-black/40 rounded-xl">
              <ProjectCard 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                link={project.link} 
              />
            </div>
          </Parallax>
        ))}
      </div>
    </div>
  );
};

export default Projects;
