import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";



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
    <div className="bg-gray-900 text-gray-200 min-h-screen font-[Inter]">
      <header className="">
        <nav className="container mx-auto flex items-center justify-between p-5">
          <button onClick={() => setCurrentSection("home")} className="text-2xl font-semibold text-white">
            Aryan Ved
          </button>
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) =>
              item.external ? (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition">
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => setCurrentSection(item.section)}
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
            <Bars3Icon className="w-6 h-6 text-gray-300" />
          </button>
        </nav>
      </header>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50">
        <div className="fixed inset-y-0 right-0 w-64 bg-gray-00 shadow-lg p-6">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4">
            <XMarkIcon className="w-6 h-6 text-gray-300" />
          </button>
          <div className="mt-10 space-y-4">
            {navigation.map((item) =>
              item.external ? (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="block text-lg text-gray-300 hover:text-indigo-400">
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentSection(item.section);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-lg text-gray-300 hover:text-indigo-400"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>
      </Dialog>

      <main className="pt-20">
        {currentSection === "home" && (
          <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-6">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold sm:text-7xl text-white drop-shadow-lg">
              <Typewriter options={{ strings: ["Welcome to My Portfolio", "I'm Aryan Ved", "A Software Engineer"], autoStart: true, loop: true, deleteSpeed: 100 }} />
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl">
              Passionate about problem-solving, technology, and building innovative applications.
            </motion.p>
          </section>
        )}

        {currentSection === "aboutme" && <AboutMe />}
       
        {currentSection === "projects" && <Projects />}
        
      </main>
    </div>
  );
}
