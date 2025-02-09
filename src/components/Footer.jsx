import React from "react";
import { Parallax } from "react-parallax";

const Footer = () => {
  return (
    <Parallax
      strength={200}
      className="bg-black text-white py-8 mt-100 "
      style={{ position: "relative" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between px-6">

        {/* Bottom: Social Media Links (Right) */}
        <div className="flex gap-6 mb-4 md:mb-0 absolute bottom-8 right-8">
          {/* Email Link */}
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 transform hover:scale-110 hover:text-gray-400 text-sm"
          >
            Email <span className="ml-1">↗</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 transform hover:scale-110 hover:text-blue-500 text-sm"
          >
            LinkedIn <span className="ml-1">↗</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 transform hover:scale-110 hover:text-gray-400 text-sm"
          >
            GitHub <span className="ml-1">↗</span>
          </a>
        </div>

        {/* Bottom: Copyright (Centered) */}
        <div className="text-center text-sm text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} Aryan Ved. All rights reserved.</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Footer;
