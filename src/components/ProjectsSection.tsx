import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Bot, Smartphone, Video, MessageSquare, Sparkles } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'N8N Automation Agent for Call Centers',
      description: 'Designed and implemented an n8n-based agent that automates call center/BPO workflows by integrating telephony APIs (Twilio, Amazon Connect), AI speech/text, and CRM—enabling secure, streamlined, and intelligent client interactions.',
      impact: 'Improved workflow consistency and reduced repetitive manual handling in client support operations.',
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
      impact: 'Enabled quick nutrition decisions through scan-first UX and health-aware scoring insights.',
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
      title: 'Rapid Intensification for Tropical Cyclone',
      description: 'Built a deep learning framework focused on rapid intensification (RI) prediction for tropical cyclones by fusing oceanic, atmospheric, and satellite signals, improving lead-time insights for early warning and operational decision support.',
      impact: 'Strengthened early-warning confidence with multi-signal modeling for high-risk weather events.',
      icon: MessageSquare,
      image: '/images/image.png',
      imagePosition: 'left center',
      technologies: ['Deep Learning', 'Tropical Cyclone RI', 'Satellite Data', 'Ocean-Atmospheric Features'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohitmane45/Rapid-Intensification-RI-For-Tropical-Cyclone-Tracking-System',
      featured: true,
      color: '#ff6b6b'
    },
    {
      id: 4,
      title: 'Movie Success Prediction',
      description: 'Developed a machine learning pipeline to predict movie performance using historical metadata, genre trends, release timing, and cast-related signals to support data-driven production and marketing decisions.',
      impact: 'Supported pre-release planning by converting trend data into actionable performance forecasts.',
      icon: Video,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
      technologies: ['Machine Learning', 'Feature Engineering', 'Pandas', 'scikit-learn'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohitmane45/Movie-Success-Prediction-and-Sentiment-Study',
      featured: true,
      color: '#f59e0b'
    }

  ];

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(102,126,234,0.12),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(118,75,162,0.09),transparent_35%),linear-gradient(180deg,var(--neuro-bg-primary),var(--neuro-bg-secondary))]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(102,126,234,0.35)] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neuro-text-secondary)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Projects
          </p>
          <h2
            className="mb-5 text-4xl font-semibold leading-tight text-[var(--neuro-text-primary)] sm:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-base leading-relaxed text-[var(--neuro-text-secondary)] sm:text-lg">
            A curated set of product-focused builds across AI, automation, and applied machine learning, with details on approach,
            tooling, and practical outcome.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
                className="group h-full"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/70 bg-white/75 shadow-[0_16px_45px_rgba(15,23,42,0.10)] backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]">
                  <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: project.color }} />

                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: project.imagePosition ?? 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                    <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--neuro-text-primary)]">
                      Featured
                    </div>

                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 shadow-sm">
                      <IconComponent className="h-5 w-5" style={{ color: project.color }} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-2xl font-semibold text-[var(--neuro-text-primary)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-[var(--neuro-text-secondary)] sm:text-base">
                      {project.description}
                    </p>

                    <div className="mb-5 rounded-2xl border border-[rgba(102,126,234,0.2)] bg-[rgba(102,126,234,0.06)] px-4 py-3 text-sm text-[var(--neuro-text-secondary)]">
                      {project.impact}
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.16 + techIndex * 0.04 }}
                          className="rounded-full border border-[rgba(102,126,234,0.22)] bg-white px-3 py-1 text-xs font-medium text-[var(--neuro-text-secondary)]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3">
                      {project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[rgba(102,126,234,0.3)] bg-white px-4 py-2 text-sm font-semibold text-[var(--neuro-text-primary)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                      )}
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--neuro-text-primary)] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;