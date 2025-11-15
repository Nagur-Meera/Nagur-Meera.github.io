import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

// 3D Floating Cube Component
const FloatingCube = ({ position, color, speed = 1 }) => {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * speed * 0.5;
      mesh.current.rotation.y += delta * speed * 0.3;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

// 3D Scene Component
const HeroScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />
      
      <FloatingCube position={[3, 2, -2]} color="#60a5fa" speed={0.8} />
      <FloatingCube position={[-3, -1, -3]} color="#d946ef" speed={1.2} />
      <FloatingCube position={[2, -2, -1]} color="#10b981" speed={1.5} />
      <FloatingCube position={[-2, 1, -4]} color="#f59e0b" speed={0.9} />
    </>
  );
};

const Hero = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/20 to-gray-950 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-primary-400 border border-gray-800">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Nagur Meeravali</span>
            <br />
            <span className="text-white">Shaik</span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4">
              <span className="text-primary-400">AI/ML Engineer</span> & 
              <span className="text-accent-400"> Software Developer</span>
            </div>
            <div className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Computer Science Engineer specializing in AI/ML, Full-Stack Development, and Intelligent Systems. 
              Building cutting-edge AI solutions that solve real-world problems.
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900/50 backdrop-blur-sm text-white font-semibold rounded-full border border-gray-700 hover:border-primary-400 hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
            {[
              { icon: Github, href: "https://github.com/Nagur-Meera", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/nagur-meeravali-shaik", label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-primary-400 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-primary-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
