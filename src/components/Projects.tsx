import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Courier Management System',
      description: 'A full-stack courier management system built with Java Spring Boot backend and React frontend, featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'YOLO -YOU ONLY LIVE ONCE CAR CRASH DETECTION',
      description: 'A modern car crash detection built using Node.js, Socket.io, and MongoDB. Features include group chats, file sharing, and user presence indicators.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      github: '#',
      live: '#',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'MEDICAL DATA ENCRYPTION FOR PATIENT RECORDS',
      description: 'AI,ML AND COMPUTER  VISION COLLABORATED SYSTEM FOR MAINTAINING MEDICAL RECORDS. Built with Java Spring Boot and secured with JWT.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
      github: '#',
      live: '#',
      category: 'API'
    }
    
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack': return Server;
      case 'Backend': return Database;
      case 'API': return Server;
      case 'Architecture': return Server;
      case 'Mobile Backend': return Smartphone;
      default: return Server;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in fullstack development, 
            Java, and Node.js technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                      <CategoryIcon className="text-blue-400" size={16} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 px-2 py-1 rounded-full border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Let's Work Together</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;