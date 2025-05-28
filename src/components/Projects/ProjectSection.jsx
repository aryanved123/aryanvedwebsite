import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection({ project, index }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    gsap.set([title, content], { opacity: 0, y: 100 });
    gsap.set(image, { opacity: 0, x: 150 });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
    })
      .to(title, { opacity: 1, y: 0, duration: 1 })
      .to(content, { opacity: 1, y: 0, duration: 1 }, "-=0.6")
      .to(image, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "-=1");
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] w-full px-6 md:px-24 py-20 gap-14 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      {project.image && (
        <div
          ref={imageRef}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-[500px] rounded-2xl shadow-2xl hover:scale-[1.03] transition duration-500 ease-in-out"
          />
        </div>
      )}

      {/* Text & Button Section */}
      <div
        ref={contentRef}
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-lg"
      >
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {project.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 italic mb-6">
          {project.language}
        </p>

        {/* Conditionally Rendered Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-md"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-5 h-5 mr-2"
              />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md"
            >
              Demo
            </a>
          )}

          {project.read && (
            <Link
              to={project.read}
              className="px-5 py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md"
            >
              Read More
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
