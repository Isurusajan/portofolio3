import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/90 backdrop-blur-md text-white section-padding border-t border-gray-700/50">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 gradient-text">Alex Johnson</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-blue-600/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:scale-110 transform"
              aria-label="Visit GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-blue-600/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:scale-110 transform"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:alex.johnson@email.com"
              className="p-3 glass-effect rounded-full hover:bg-blue-600/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:scale-110 transform"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Made with <Heart size={16} className="mx-1 text-red-400" /> © {currentYear}
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-gray-500 text-sm">
            Designed and built with modern web technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;