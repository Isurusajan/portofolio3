import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import porto from '../assets/porto.jpg' // adjust path as needed


const Home = () => {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <p className="text-blue-400 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Isuru Sajan
                <span className="block gradient-text">Full Stack Developer</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                I create exceptional digital experiences through clean code and intuitive design. 
                Passionate about building scalable web applications that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="View my projects"
              >
                View My Work
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <button
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Download resume"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <p className="text-gray-400">Connect with me:</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Isurusajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                  aria-label="View GitHub profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/isuru-sajan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                  aria-label="View LinkedIn profile"
                >
                  <Linkedin size={24} />
                </a>
                <Link
                  to="/contact"
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Contact me"
                >
                  <Mail size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl animate-float neon-glow">
                <img
                  src={porto}
                  alt=" Isuru Sajan- Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-2xl opacity-60 -z-10 animate-pulse-glow"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Happy Clients' },
            { number: '100%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2 glass-effect p-6 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;