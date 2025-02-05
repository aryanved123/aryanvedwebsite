import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 overflow-hidden">
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <h1 className="text-5xl font-extrabold sm:text-7xl drop-shadow-lg">
          <Typewriter
            options={{
              strings: [
                "Welcome to My Portfolio",
                "My name is Aryan Ved",
                "I am a 3rd Year Computer Science Student at Ontario Tech University",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-lg sm:text-xl max-w-2xl"
      >
        Discover my journey, projects, and professional experience.
      </motion.p>
    </section>
  );
}
