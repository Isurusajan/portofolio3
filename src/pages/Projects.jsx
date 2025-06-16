import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Theater-Seat-Booking-System',
description: 'A full-stack theater seat booking system built with React, Spring Boot, and MongoDB. It allows users to browse movies, select showtimes, reserve seats, and complete bookings. ',
image: '/assets/projects/seat booking.png',
      technologies: ['React', 'Springboot', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'Full Stack',
      github: 'https://github.com/Isurusajan/Theater-Seat-Booking-System.git',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Conference-management-itum-website',
      description: 'A comprehensive web-based conference management system that streamlines the organization and administration of academic or professional conferences. It allows participants to register, view conference schedules, register for sessions, and check in using QR codes. Admins can manage sessions, participants, and generate reports efficiently.',
      image: '/assets/projects/conference management.png',
      technologies: ['HTML', 'JavascryptScript', 'Css', 'Php', 'MySQL'],
      category: 'Frontend',
      github: 'https://github.com/Isurusajan/Conference-management-itum-website',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Image generator',
      description: 'The AI Image Generator is a full-stack web application that allows users to generate high-quality, realistic images from text prompts using artificial intelligence. Built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), the app integrates with the Replicate API to access advanced image generation models. Users can enter a creative prompt, generate a custom image, and view or save the results in a visually clean interface.',
      image: '/assets/projects/image generator.png',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      category: 'Full Stack',
      github: 'https://github.com/Isurusajan/Image-generator.git',
      demo: 'https://demo.com',
      featured: true,
    },
   
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects demonstrating various technologies and skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-effect rounded-xl overflow-hidden card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-colors duration-200"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-colors duration-200"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2 glass-effect rounded-lg p-2 shadow-lg">
            <Filter size={20} className="text-gray-400 ml-2" />
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/10'
                  }`}
                  aria-pressed={activeFilter === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-colors duration-200"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-colors duration-200"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;