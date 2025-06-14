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

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 100k+ users. Mentor junior developers and implement best practices.',
    },
    {
      role: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Built responsive user interfaces and improved application performance by 40%. Collaborated with UX designers and backend teams.',
    },
    {
      role: 'Junior Developer',
      company: 'WebAgency Pro',
      period: '2020 - 2021',
      description: 'Developed custom websites and learned modern development practices. Gained experience in client communication and project management.',
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
            Passionate developer with a love for creating innovative solutions and beautiful user experiences
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
                  I'm a passionate full-stack developer with over 3 years of experience creating 
                  digital solutions that make a real impact. My journey began with a curiosity 
                  about how websites work, which quickly evolved into a deep passion for coding 
                  and problem-solving.
                </p>
                <p>
                  I hold a Bachelor's degree in Computer Science from Tech University, where I 
                  developed a strong foundation in algorithms, data structures, and software 
                  engineering principles. I'm constantly learning new technologies and staying 
                  current with industry trends.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  mentoring aspiring developers, or exploring the latest in tech innovations. 
                  I believe in writing clean, maintainable code and creating user-centered designs.
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
                My goal is to become a technical leader who can bridge the gap between complex 
                technical solutions and real-world business needs. I aspire to lead teams that 
                build products that positively impact millions of users while fostering a 
                culture of continuous learning and innovation.
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
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-blue-500/30"></div>
                )}
                <div className="flex items-start space-x-6 pb-12">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="glass-effect p-6 rounded-xl hover:bg-gray-700/30 transition-all duration-300 flex-1 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-blue-400 font-medium">{exp.period}</span>
                    </div>
                    <h4 className="text-lg text-gray-300 font-medium mb-3">{exp.company}</h4>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;