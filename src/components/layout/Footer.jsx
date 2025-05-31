import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-nav mt-auto px-4 py-6 border-t border-white border-opacity-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="flex items-center space-x-2 text-white text-opacity-80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for career discovery in India</span>
          </div>

          {/* Center Section */}
          <div className="text-center text-white text-opacity-80">
            <p className="text-sm">© 2025 PathFinder. Discover your career path.</p>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/sharmaram25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-opacity-80 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ram-sharma-20rs02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-opacity-80 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sharmaram2504@gmail.com"
              className="text-white text-opacity-80 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/ramsharma.25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-opacity-80 hover:text-white transition-colors"
            >
              {/* Instagram icon is not in lucide-react by default, so use an emoji or custom SVG if needed */}
              <span className="w-5 h-5 flex items-center justify-center text-lg">📸</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
