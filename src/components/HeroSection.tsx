import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import { staggerContainer, staggerItem, floatingVariants } from '@/lib/animations';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI/Data Science Engineer | Automation Specialist";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohitmane45',
      color: '#0077B5'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rohitmane45',
      color: '#333'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://rohitmane.site',
      color: '#667eea'
    }
  ];

  // Optimized particle positions for better visual balance
  const particlePositions = [
    { x: 20, y: 15, delay: 0, duration: 8 },
    { x: 80, y: 25, delay: 1, duration: 9 },
    { x: 15, y: 70, delay: 2, duration: 7 },
    { x: 85, y: 80, delay: 1.5, duration: 8.5 },
    { x: 50, y: 10, delay: 0.5, duration: 9.5 },
    { x: 10, y: 45, delay: 2.5, duration: 8 },
    { x: 90, y: 55, delay: 1, duration: 7.5 },
    { x: 60, y: 90, delay: 0.8, duration: 9 }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neuro-bg-primary)] to-[var(--neuro-bg-secondary)]">
        {/* Optimized Background Particles */}
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            className="absolute neuro-card w-2 h-2 rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: 'linear-gradient(45deg, var(--neuro-accent), var(--neuro-accent-light))'
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--neuro-text-primary)] mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Rohit Mane
              </motion.h1>
            </motion.div>

            <motion.div variants={staggerItem} className="mb-6">
              <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-lg md:text-xl lg:text-2xl font-light gradient-text text-center lg:text-left leading-relaxed">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </h2>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerItem} 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-[var(--neuro-text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                B.E. in Artificial Intelligence & Data Science (CGPA 9.1) | Building intelligent automation solutions,
                AI-powered platforms, and innovative mobile applications. Currently a Data Science Intern at CodeWithHarry.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={staggerItem} 
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[var(--neuro-text-secondary)]">
                <motion.span 
                  whileHover={{ scale: 1.05, color: 'var(--neuro-accent)' }}
                  className="transition-colors cursor-pointer"
                >
                  📧 drohitmane45@gmail.com
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, color: 'var(--neuro-accent)' }}
                  className="transition-colors cursor-pointer"
                >
                  📱 +91 7588058850
                </motion.span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerItem} className="mb-8">
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -5,
                        boxShadow: `0 10px 25px ${social.color}40`
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="neuro-button p-3 hover:glow-effect transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-[var(--neuro-accent)]" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div 
              variants={staggerItem} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(102, 126, 234, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="neuro-button px-6 py-3 text-base font-medium text-[var(--neuro-text-primary)] glow-effect"
              >
                View My Projects
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="neuro-button px-6 py-3 text-base font-medium text-[var(--neuro-text-primary)]"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div 
            variants={staggerItem}
            initial="initial"
            animate="animate"
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                <div className="w-128 h-128 md:w-80 md:h-80 lg:w-96 lg:h-96 neuro-card rounded-full overflow-hidden glow-effect">
                  <img
                    src="/images/roo.jpg"
                    alt="Rohit Mane"
                    className="h-full w-full object-cover object-center"
                    style={{ objectPosition: "center 50%", transform: "scale(1.15)" }}
                  />
                </div>
              </motion.div>
              
              {/* Optimized Orbital Particle System */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * (Math.PI / 180); // 60 degrees apart
                const radius = 140 + (i % 2) * 20; // Alternating radii for visual interest
                
                return (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 12 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transformOrigin: `${radius}px 0px`,
                      transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: `linear-gradient(45deg, var(--neuro-accent), var(--neuro-accent-light))`,
                        boxShadow: `0 0 15px var(--neuro-accent)40`,
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Floating Tech Labels with Better Positioning */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 neuro-button p-3 text-sm font-semibold gradient-text backdrop-blur-sm"
              >
                AI/ML
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -bottom-6 -left-6 neuro-button p-3 text-sm font-semibold gradient-text backdrop-blur-sm"
              >
                Flutter
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute top-1/2 -left-12 neuro-button p-3 text-sm font-semibold gradient-text backdrop-blur-sm"
              >
                Python
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -right-12 neuro-button p-3 text-sm font-semibold gradient-text backdrop-blur-sm"
              >
                Data Science
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="neuro-button p-4 rounded-full glow-effect"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-6 h-6 text-[var(--neuro-text-primary)]" />
        </motion.button>
        <motion.p 
          className="text-xs text-[var(--neuro-text-secondary)] mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;