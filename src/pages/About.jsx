import React from 'react';
import { Code2, Database, Globe, Smartphone, Brain, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Globe,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'text-blue-400 bg-blue-500/10',
    },
    {
      category: 'Backend Development',
      icon: Database,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'],
      color: 'text-green-400 bg-green-500/10',
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
      color: 'text-purple-400 bg-purple-500/10',
    },
    {
      category: 'Tools & Others',
      icon: Code2,
      technologies: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
      color: 'text-orange-400 bg-orange-500/10',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dedicated and curious software engineering undergraduate with a passion for building impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <Brain className="mr-3 text-blue-400" size={32} />
                My Journey
              </h2>
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  I’m currently pursuing my Bachelor's degree at the University of Moratuwa, specializing in Information Technology. Over the past few years, I’ve developed strong skills in both frontend and backend development through coursework, projects, and self-learning.
                </p>
                <p>
                  My interest in tech began with a fascination for how digital products are built. Since then, I’ve explored various areas of development — from web and mobile applications to databases and cloud technologies.
                </p>
                <p>
                  As I prepare for my internship, I’m eager to apply my technical knowledge in a real-world environment and gain hands-on experience working in a collaborative team.
                </p>
              </div>
            </div>

            {/* Career Aspirations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Users className="mr-3 text-teal-400" size={28} />
                Career Aspirations
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I aim to become a well-rounded full-stack developer who can contribute to building scalable and user-friendly applications. I’m particularly interested in learning from industry experts during my internship and continuing to grow in areas like cloud computing and system design.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
            <div className="grid gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="glass-effect p-6 rounded-xl hover:bg-gray-700/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${skill.color} mr-4`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {skill.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-600/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        {/* Removed for now since you're seeking your first internship */}
      </div>
    </section>
  );
};

export default About;
