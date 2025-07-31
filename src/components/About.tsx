import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', level: 95, color: 'from-red-500 to-orange-500' },
    { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'Spring Boot', level: 85, color: 'from-green-600 to-green-400' },
    { name: 'React', level: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'MongoDB', level: 82, color: 'from-green-700 to-green-500' },
  ];

  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Zap, title: 'Performance', description: 'Optimizing applications for speed and efficiency' },
    { icon: Coffee, title: 'Problem Solving', description: 'Tackling complex challenges with innovative solutions' },
    { icon: Lightbulb, title: 'Innovation', description: 'Staying current with latest technologies and trends' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Passionate Fullstack Developer</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              With over 5 years of experience in software development, I specialize in building 
              robust and scalable applications using Java and Node.js. My journey in tech has been 
              driven by a passion for solving complex problems and creating efficient solutions.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I thrive in collaborative environments and enjoy working on challenging projects 
              that push the boundaries of what's possible. From backend APIs to full-stack 
              applications, I bring creativity and technical expertise to every project.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-700 p-4 rounded-lg"
                >
                  <item.icon className="text-blue-400 mb-2" size={24} />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;