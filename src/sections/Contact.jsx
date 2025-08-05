import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Code2 } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceId = 'service_6v74i6m';
    const templateId = 'template_ruw9gx1';
    const userId = '8GsXFSzUvVZ8Kgozd';
    
    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        userId
      );
      
      console.log('Email sent successfully:', result.text);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Sorry, there was an error sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 relative">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card-glow rounded-2xl p-8">
                <h3 className="text-2xl font-bold gradient-text mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-white font-medium hover:text-primary-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-white font-medium hover:text-primary-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="card-glow rounded-2xl p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Follow Me
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link, index) => {
                    const getIcon = (iconName) => {
                      switch(iconName) {
                        case 'Github': return Github;
                        case 'Linkedin': return Linkedin;
                        case 'Code': return Code;
                        case 'Code2': return Code2;
                        case 'Mail': return Mail;
                        case 'Phone': return Phone;
                        default: return Github;
                      }
                    };
                    
                    const Icon = getIcon(link.icon);
                    const isSpecial = link.name === 'LinkedIn';
                    
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined}
                        rel={link.name !== 'Email' && link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 group ${
                          isSpecial 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className={`transition-colors ${
                          isSpecial 
                            ? 'text-white' 
                            : 'text-gray-400 group-hover:text-white'
                        }`} size={18} />
                        <span className={`text-sm transition-colors ${
                          isSpecial 
                            ? 'text-white' 
                            : 'text-gray-300 group-hover:text-white'
                        }`}>{link.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div variants={itemVariants} className="card-glow rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-white">Available for Work</h3>
                </div>
                <p className="text-gray-400">
                  I'm currently open to internship opportunities and freelance projects. 
                  Let's discuss how we can work together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card-glow rounded-2xl p-8">
                <h3 className="text-2xl font-bold gradient-text mb-8">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me more about your project or inquiry..."
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    variants={itemVariants}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
