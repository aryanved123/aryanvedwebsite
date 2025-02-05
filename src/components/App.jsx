import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router, Routes, and Link
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe"; // Import other components

AOS.init();

const navigation = [
  { name: "About Me", href: "/aboutme" }, // Updated href for routing
  { name: "Projects", href: "/projects" }, // Updated href for routing
  { name: "Resume", href: "/Aryan_Resume.pdf" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aryan-ved/" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div className="bg-gray-900 text-gray-100 min-h-screen font-[Inter]">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-800/80 shadow-lg">
          <nav className="container mx-auto flex items-center justify-between p-5">
            <a href="#" className="text-2xl font-semibold text-white">Aryan Ved</a>
            <div className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href} className="text-gray-300 hover:text-indigo-400 transition">
                  {item.name}
                </Link> // Use Link component instead of a tag
              ))}
            </div>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
              <Bars3Icon className="w-6 h-6 text-gray-300" />
            </button>
          </nav>
        </header>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-gray-800 shadow-lg p-6">
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4">
              <XMarkIcon className="w-6 h-6 text-gray-300" />
            </button>
            <div className="mt-10 space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href} className="block text-lg text-gray-300 hover:text-indigo-400">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold sm:text-7xl text-white drop-shadow-lg"
          >
            <Typewriter
              options={{
                strings: ["Welcome to My Portfolio", "I'm Aryan Ved", "A Software Engineer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
              }}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
          >
            Passionate about problem-solving, technology, and building innovative applications.
          </motion.p>
        </section>

        {/* About Me Section */}
        <section id="aboutme" className="py-20 bg-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-indigo-400">About Me</h2>
            <div className="flex flex-col md:flex-row items-center mt-8 space-y-6 md:space-y-0">
              <img src="/profile.jpg" alt="Aryan Ved" className="w-40 h-40 rounded-full shadow-lg" />
              <p className="text-lg text-gray-300 md:ml-6">
                I'm Aryan Ved, a software engineer with a passion for modern web development and solving complex problems.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Define Routes for different sections */}
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
