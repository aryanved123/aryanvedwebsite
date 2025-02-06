import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", img: "/images/java.png" },
  { name: "React", img: "/images/react.webp" },
  { name: "C++", img: "/images/C++.png" },
  { name: "C", img: "/images/C.png" },
  { name: "Python", img: "/images/python.png" },
  { name: "Flutter", img: "/images/flutter.png" },
  { name: "MongoDB", img: "/images/mongodb.webp" },
  { name: "Dart", img: "/images/dart.png" },
  { name: "SQL", img: "/images/SQL.png" },
  { name: "NumPy", img: "/images/numpy.svg" },
  { name: "HTML", img: "/images/html.png" },
  { name: "CSS", img: "/images/css.svg" },
  { name: "Pandas", img: "/images/pandas.png" },
];

const SkillCard = ({ skill }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className={`relative w-40 h-40 flex flex-col items-center justify-center
      bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl rounded-full transition-all duration-300
      ${hover ? "scale-110 shadow-2xl" : "scale-100"}`}
      style={{
        transform: hover
          ? "perspective(1000px) rotateX(10deg) rotateY(10deg)"
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <img src={skill.img} alt={skill.name} className="w-16 h-16 object-contain" />
      {/* Text */}
      <p className="text-white text-lg font-semibold mt-2">{skill.name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-24 mb-40">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // Move skill card left for even, right for odd index
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Final position when in view
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.1, // Stagger delay for smooth line-by-line effect
          }}
          viewport={{ once: true }}
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
