import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// GSAP Scroll Animation for Project Cards
export function animateProjects() {
  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 150, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

// Framer Motion Animation Variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

export const parallaxEffect = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 50, opacity: 1, transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
};
