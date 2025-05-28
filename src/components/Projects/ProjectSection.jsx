import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection({ project, index }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const buttons = buttonsRef.current;

    gsap.set([title, text, buttons], { opacity: 0, y: 100 });
    gsap.set(image, { opacity: 0, x: 150 });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
      },
    })
      .to(title, { opacity: 1, y: 0, duration: 1 })
      .to(text, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to(image, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "-=0.8")
      .to(buttons, { opacity: 1, duration: 1 }, "-=0.6");
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-10 md:px-32 py-20 gap-16 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
        <div ref={imageRef} className="w-auto h-auto md:ml-20 relative">
  <img
    src={project.image}
    alt={project.title}
    className="max-w-[600px] max-h-[600px] object-contain rounded-xl shadow-xl transition-transform duration-700 hover:scale-105"
  />
</div>


      <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          {project.title}
        </h2>
        <p ref={textRef} className="text-xl md:text-2xl italic text-gray-500 leading-relaxed mb-8">
          {project.language}
        </p>

        {/* Buttons Section */}
        <div ref={buttonsRef} className="flex flex-wrap gap-6 justify-center md:justify-start">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-6 py-3 rounded-xl bg-white text-black font-medium transition duration-300 transform hover:scale-105 shadow-lg"
    >
      <img 
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="GitHub"
        className="w-6 h-6 mr-2"
      />
      GitHub
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-xl bg-blue-800 text-white font-medium transition duration-300 transform hover:scale-105 shadow-lg"
    >
      Demo
    </a>
  )}

  {project.read && (
    <Link
      to={project.read}
      className="px-6 py-3 rounded-xl bg-green-800 text-white font-medium transition duration-300 transform hover:scale-105 shadow-lg"
    >
      Read More
    </Link>
  )}
</div>

      </div>
    </section>
  );
}
