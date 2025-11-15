import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Settings, Award, Brain, Server, Cloud, BarChart3, Layers } from 'lucide-react';
import { skills, certifications } from '../data/portfolio';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0.5, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconMap = {
    'Programming Languages': Code,
    'Web Development': Globe,
    'AI & Machine Learning': Brain,
    'Database Technologies': Database,
    'Frontend Frameworks': Layers,
    'Backend Technologies': Server,
    'Cloud & Deployment': Cloud,
    'Data Science': BarChart3,
    'Core CS Concepts': Code,
    'Developer Tools': Settings,
  };

  const skillColors = {
    'Programming Languages': 'from-blue-500 to-cyan-500',
    'Web Development': 'from-green-500 to-emerald-500',
    'AI & Machine Learning': 'from-purple-500 to-violet-500',
    'Database Technologies': 'from-purple-500 to-pink-500',
    'Frontend Frameworks': 'from-teal-500 to-cyan-500',
    'Backend Technologies': 'from-gray-500 to-slate-500',
    'Cloud & Deployment': 'from-sky-500 to-blue-500',
    'Data Science': 'from-orange-500 to-amber-500',
    'Core CS Concepts': 'from-orange-500 to-red-500',
    'Developer Tools': 'from-indigo-500 to-blue-500',
  };

  return (
    <section id="skills" className="py-20 relative bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across different 
              domains of software development and computer science.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = iconMap[category];
              const colorClass = skillColors[category];
              
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="card-glow rounded-2xl p-8 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass} bg-opacity-20`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClass}`}></div>
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skill Proficiency Visualization */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold gradient-text text-center mb-12">
              Proficiency Levels
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: 'JavaScript', level: 80, color: 'from-yellow-400 to-orange-500' },
                { skill: 'React.js', level: 75, color: 'from-blue-400 to-blue-600' },
                { skill: 'Node.js', level: 75, color: 'from-green-400 to-green-600' },
                { skill: 'Python', level: 80, color: 'from-blue-500 to-indigo-600' },
                { skill: 'C++', level: 85, color: 'from-red-400 to-red-600' },
                { skill: 'MongoDB', level: 75, color: 'from-green-500 to-emerald-600' },
                { skill: 'MySQL', level: 70, color: 'from-blue-600 to-purple-600' },
                { skill: 'Git/GitHub', level: 75, color: 'from-gray-400 to-gray-600' },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{item.skill}</span>
                    <span className="text-primary-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Award className="text-accent-400" size={32} />
              <h3 className="text-3xl font-bold gradient-text">Certifications</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  className="card-glow rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Progress */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="card-glow rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Currently Learning
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  '🧠 Deep Learning',
                  '🤖 Generative AI',
                  '🤖 Advanced Machine Learning',
                  '☁️ Cloud Computing (AWS)',
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-primary-400 hover:text-primary-400 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
