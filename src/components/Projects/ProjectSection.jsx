import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    gsap.set([title, image, text, buttons], { opacity: 0, y: 50 });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
    })
      .to(title, { opacity: 1, y: 0, duration: 1 })
      .to(image, { opacity: 1, x: index % 2 === 0 ? -50 : 50, duration: 1 }, "-=0.5")
      .to(text, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
      .to(buttons, { opacity: 1, duration: 0.8 }, "-=0.4");
  }, [index]);

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center min-h-screen justify-center">
      {/* Image */}
      <div ref={imageRef} className="w-3/4 md:w-1/2 mb-6 transform transition-transform duration-700">
        <img src={project.image} alt={project.title} className="rounded-lg shadow-lg" />
      </div>

      {/* Text & Buttons */}
      <div className="text-center w-3/4 md:w-1/2">
        <h2 ref={titleRef} className="text-4xl font-bold mb-4">{project.title}</h2>
        <p ref={textRef} className="text-lg text-gray-300 mb-6">{project.description}</p>
        <div ref={buttonsRef} className="flex gap-4 justify-center">
          <a href={project.github} className="px-5 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600">GitHub</a>
          <a href={project.live} className="px-5 py-3 bg-green-500 rounded-lg text-white hover:bg-green-600">Live Demo</a>
        </div>
      </div>
    </section>
  );
}
