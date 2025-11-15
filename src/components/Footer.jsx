import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold gradient-text">
                Nagur Meeravali Shaik
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating innovative solutions 
                with modern technologies. Always eager to learn and take on new challenges.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://github.com/Nagur-Meera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/nagur-meeravali-shaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          ></motion.div>

          {/* Bottom footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React + Three.js</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nagur Meeravali Shaik. All rights reserved.
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute -top-10 left-10 w-20 h-20 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl"></div>
          <div className="absolute -top-5 right-20 w-16 h-16 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
