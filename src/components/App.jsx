import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe";
import Lenis from "@studio-freight/lenis";
import ThreeBackground from "./ThreeBackground"; // Three.js background


AOS.init();

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const navigation = [
    { name: "About Me", section: "aboutme" },
    { name: "Projects", section: "projects" },
    { name: "Resume", href: "/Aryan_Resume.pdf", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/aryan-ved/", external: true },
  ];

  return (
    <div className="relative min-h-screen bg-black font-[Inter]">

      {/* ✅ Improved Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 black/10 backdrop-blur-lg shadow-md">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto flex items-center justify-between px-6 py-3"
        >
          {/* 🔥 Interactive Logo */}
          <motion.button 
            onClick={() => setCurrentSection("home")} 
            whileHover={{ scale: 1.1, color: "#60a5fa" }} 
            className="text-2xl font-bold text-white tracking-wide"
          >
            Aryan Ved
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) =>
              item.external ? (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-300 hover:text-indigo-400 transition relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => setCurrentSection(item.section)}
                  className="text-sm text-gray-300 hover:text-indigo-400 transition relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
            <Bars3Icon className="w-6 h-6 text-gray-300" />
          </button>
        </motion.nav>
      </header>

      {/* 📱 Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/40 z-50">
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: 0 }} 
          exit={{ x: "100%" }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-y-0 right-0 w-64 bg-gray-800/90 backdrop-blur-xl shadow-lg p-6"
        >
          {/* Close Button */}
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4">
            <XMarkIcon className="w-6 h-6 text-gray-300" />
          </button>

          {/* Links */}
          <div className="mt-10 space-y-6">
            {navigation.map((item) =>
              item.external ? (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="block text-lg text-gray-300 hover:text-indigo-400 transition">
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentSection(item.section);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-lg text-gray-300 hover:text-indigo-400 transition"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </motion.div>
      </Dialog>

      {/* 🏠 Main Content */}
      <main className="relative z-10 pt-10"> {/* Adjusted padding-top from pt-20 to pt-16 */}
        
        {currentSection === "home" && (
          <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
            <div className="absolute inset-0 z-0">
        <ThreeBackground /> {/* 3D Background */}
      </div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              className="text-5xl font-extrabold sm:text-7xl text-white drop-shadow-lg"
            >
              <Typewriter 
                options={{ 
                  strings: ["Welcome to My Portfolio", "I'm Aryan Ved", "A Computer Science Student @ Ontario Tech University"], 
                  autoStart: true, 
                  loop: true, 
                  deleteSpeed: 100 
                }} 
              />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.3 }} 
              className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
            >
            </motion.p>
          </section>
        )}

        {currentSection === "aboutme" && <AboutMe />}
        {currentSection === "projects" && <Projects />}

      </main>
    </div>
  );
}
