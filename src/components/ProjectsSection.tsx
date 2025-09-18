import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye, Bot, Smartphone, Video, MessageSquare } from 'lucide-react';
import { staggerContainer, staggerItem, cardHoverVariants } from '@/lib/animations';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'N8N Automation Agent for Call Centers',
      description: 'Designed and implemented an n8n-based agent that automates call center/BPO workflows by integrating telephony APIs (Twilio, Amazon Connect), AI speech/text, and CRM—enabling secure, streamlined, and intelligent client interactions.',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['n8n', 'Twilio', 'Amazon Connect', 'AI/ML', 'REST APIs', 'CRM Integration'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: '#667eea'
    },
    {
      id: 2,
      title: 'NutriBot (Flutter App)',
      description: 'Developed a cross-platform app that scans food labels with Google Vision OCR, analyzes health data, assigns a NutriScore grade, and delivers insights in a secure, intuitive UI.',
      icon: Smartphone,
      image: '/images/nutribot.png',
      technologies: ['Flutter', 'Google Vision OCR', 'Health Analytics', 'UI/UX', 'Data Security'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohitmane45/food-label-analyzer',
      featured: true,
      color: '#02569b'
    },
    {
      id: 3,
      title: 'FloatChat: AI-Powered ARGO Ocean Data',
      description: 'Developed an AI-powered conversational system for ARGO float data that enables users to query, explore, and visualize oceanographic information using natural language.',
      icon: MessageSquare,
      image: '/images/argo-ocean-data.png',
      technologies: ['AI/ML', 'Natural Language Processing', 'Data Visualization', 'Oceanographic Data'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: '#ff6b6b'
    },
    {
      id: 4,
      title: 'AetherChat Platform',
      description: 'A production-ready, horizontally scalable chat system delivering AI-driven conversations, robust user management, and a cleanly decoupled backend–frontend architecture—perfect for learning, rapid prototyping, or evolving into an enterprise-grade conversational platform.',
      icon: MessageSquare,
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop',
      technologies: ['AI/ML', 'Chat System', 'User Management', 'Scalable Architecture'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: '#43e97b'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 bg-[var(--neuro-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
            Featured Projects
          </motion.h2>
          <motion.p variants={staggerItem} className="text-base md:text-lg text-[var(--neuro-text-secondary)] max-w-3xl mx-auto">
            A showcase of innovative solutions combining AI, automation, and modern web technologies 
            to solve real-world problems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="neuro-card overflow-hidden h-full relative"
                  style={{
                    background: `linear-gradient(135deg, var(--neuro-bg-primary) 0%, ${project.color}10 100%)`
                  }}
                >
                  {/* Reduced Background Pattern for Mobile */}
                  <div className="absolute inset-0 opacity-5 hidden md:block">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          x: [0, 20, 0],
                          y: [0, -15, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 8 + i,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: project.color,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-40 md:h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}40, transparent)`
                      }}
                    />
                    
                    {/* Project Icon */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-3 md:top-4 right-3 md:right-4 neuro-button p-2 md:p-3"
                      style={{
                        backgroundColor: `${project.color}20`,
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <IconComponent className="w-4 md:w-6 h-4 md:h-6" style={{ color: project.color }} />
                    </motion.div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-3 md:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="neuro-button p-2 md:p-3 bg-white/20 backdrop-blur-sm"
                        aria-label="View live project"
                      >
                        <Eye className="w-4 md:w-5 h-4 md:h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="neuro-button p-2 md:p-3 bg-white/20 backdrop-blur-sm"
                        aria-label="View source code"
                      >
                        <Github className="w-4 md:w-5 h-4 md:h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="neuro-button p-2 md:p-3 bg-white/20 backdrop-blur-sm"
                        aria-label="External link"
                      >
                        <ExternalLink className="w-4 md:w-5 h-4 md:h-5 text-white" />
                      </motion.a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="absolute top-3 md:top-4 left-3 md:left-4"
                      >
                        <span 
                          className="neuro-button px-2 md:px-3 py-1 text-xs font-semibold text-white"
                          style={{ backgroundColor: project.color }}
                        >
                          Featured
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-4 md:p-6 relative z-10">
                    <motion.h3 
                      className="text-lg md:text-xl font-semibold text-[var(--neuro-text-primary)] mb-2 md:mb-3 group-hover:text-[var(--neuro-accent)] transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm md:text-base text-[var(--neuro-text-secondary)] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -1,
                          }}
                          className="neuro-inset px-2 md:px-3 py-1 text-xs font-medium text-[var(--neuro-text-secondary)] cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Simplified Border Effect for Mobile */}
                  <motion.div
                    className="absolute inset-0 rounded-[20px] pointer-events-none hidden md:block"
                    style={{
                      background: `linear-gradient(45deg, ${project.color}40, transparent, ${project.color}40)`,
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={staggerItem}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mt-8 md:mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="neuro-button px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-[var(--neuro-text-primary)] glow-effect relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--neuro-accent)] to-[var(--neuro-accent-light)] opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;