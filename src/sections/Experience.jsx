import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Trophy, MapPin, Calendar } from 'lucide-react';
import { workExperience, hackathons, competitions } from '../data/portfolio';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From internships to hackathons, here's my professional growth and 
              achievements in the tech industry.
            </p>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-primary-400" size={32} />
              <h3 className="text-3xl font-bold gradient-text">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? itemVariants : rightVariants}
                  className="relative"
                >
                  <div className="card-glow rounded-2xl p-8 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {job.title}
                          </h4>
                          <p className="text-xl text-primary-400 font-semibold mb-2">
                            {job.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={16} />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {job.description.map((desc, descIndex) => (
                          <motion.div
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + descIndex * 0.2 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{desc}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + techIndex * 0.1 }}
                            className="px-3 py-1 bg-gray-800 text-primary-400 rounded-full text-sm border border-gray-700 hover:border-primary-400 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hackathons */}
          <motion.div variants={rightVariants}>
            <div className="flex items-center gap-3 mb-12">
              <Trophy className="text-accent-400" size={32} />
              <h3 className="text-3xl font-bold gradient-text">Hackathons & Competitions</h3>
            </div>

            <div className="space-y-8">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? rightVariants : itemVariants}
                  className="relative"
                >
                  <div className="card-glow rounded-2xl p-8 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full -translate-y-16 -translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {hackathon.title}
                          </h4>
                          <p className="text-xl text-accent-400 font-semibold mb-2">
                            {hackathon.event}
                          </p>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={16} />
                            <span>{hackathon.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin size={16} />
                            <span>{hackathon.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {hackathon.description.map((desc, descIndex) => (
                          <motion.div
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + descIndex * 0.2 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{desc}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {hackathon.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + techIndex * 0.1 }}
                            className="px-3 py-1 bg-gray-800 text-accent-400 rounded-full text-sm border border-gray-700 hover:border-accent-400 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Competitions */}
          <motion.div
            variants={rightVariants}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-12">
              <Trophy className="text-yellow-400" size={32} />
              <h3 className="text-3xl font-bold gradient-text">Coding Competitions</h3>
            </div>

            <div className="space-y-8">
              {competitions.map((competition, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? itemVariants : rightVariants}
                  className="relative"
                >
                  <div className="card-glow rounded-2xl p-8 relative overflow-hidden border border-yellow-500/20">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {competition.title}
                          </h4>
                          <p className="text-xl text-yellow-400 font-semibold mb-2">
                            {competition.event}
                          </p>
                          <p className="text-gray-400">
                            {competition.organizer} | {competition.host}
                          </p>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={16} />
                            <span>{competition.period}</span>
                          </div>
                          <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                            🏆 Rank 1
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {competition.description.map((desc, descIndex) => (
                          <motion.div
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + descIndex * 0.2 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{desc}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {competition.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + techIndex * 0.1 }}
                            className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-sm border border-gray-700 hover:border-yellow-400 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="card-glow rounded-2xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Career Timeline
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">
                    2022
                  </div>
                  <p className="text-sm text-gray-400 text-center">Started BTech<br />CSE Journey</p>
                </div>
                
                <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400"></div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">
                    2024
                  </div>
                  <p className="text-sm text-gray-400 text-center">First Internship<br />at Edubot</p>
                </div>
                
                <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400"></div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">
                    2025
                  </div>
                  <p className="text-sm text-gray-400 text-center">🏆 Rank 1<br />DSA Competition</p>
                </div>
                
                <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400"></div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">
                    2025
                  </div>
                  <p className="text-sm text-gray-400 text-center">🚀 Hackathon<br />Participation</p>
                </div>
                
                <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400"></div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">
                    2025
                  </div>
                  <p className="text-sm text-gray-400 text-center">💼 MIC-ELMS<br />Internship</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
