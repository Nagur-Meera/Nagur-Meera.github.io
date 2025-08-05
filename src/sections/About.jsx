import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { personalInfo, education } from '../data/portfolio';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate Computer Science student with a strong foundation in 
              full-stack development and machine learning, driven by innovation and 
              continuous learning.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card-glow rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary-400" size={20} />
                    <div>
                      <span className="text-gray-400">Birthday:</span>
                      <span className="text-white ml-2">{personalInfo.birthday}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary-400" size={20} />
                    <div>
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white ml-2">{personalInfo.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-primary-400" size={20} />
                    <div>
                      <span className="text-gray-400">University:</span>
                      <span className="text-white ml-2">SRM University - AP</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Award className="text-primary-400" size={20} />
                    <div>
                      <span className="text-gray-400">Current GPA:</span>
                      <span className="text-white ml-2">8.84</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="card-glow rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  What Drives Me
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about solving complex problems through innovative technology solutions. 
                  My goal is to develop unique features and enhancements that make projects stand out 
                  while simplifying complex concepts through intuitive web interfaces. I leverage AI 
                  and emerging technologies to create impactful solutions, constantly exploring new 
                  frameworks and methodologies to tackle challenging problems. Whether building 
                  intelligent systems or crafting seamless user experiences, I strive to bridge 
                  the gap between cutting-edge technology and practical problem-solving.
                </p>
              </motion.div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 gradient-text">
                Education Journey
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="card-glow rounded-xl p-6 ml-8 relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-12 top-6 w-6 h-6 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                        <span className="text-lg">{edu.icon}</span>
                      </div>
                      
                      {/* Timeline line */}
                      {index !== education.length - 1 && (
                        <div className="absolute -left-9 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-400 to-accent-400"></div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-sm text-primary-400 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">GPA:</span>
                          <span className="text-accent-400 font-semibold">{edu.gpa}</span>
                        </div>
                      )}
                      
                      {edu.percentage && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Score:</span>
                          <span className="text-accent-400 font-semibold">{edu.percentage}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "3+", label: "Technologies Mastered" },
              { number: "8.84", label: "Current GPA" },
              { number: "2+", label: "Years Coding" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center card-glow rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
