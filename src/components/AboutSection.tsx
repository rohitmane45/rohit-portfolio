import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, GraduationCap, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educationTimeline = [
    {
      degree: 'B.E. Artificial Intelligence & Data Science',
      institution: 'Savitribai Phule Pune University (SPPU)',
      year: '2023 - 2027',
      detail: 'Current | 9.1 CGPA'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Ligade - Patil Junior College of Science, Karad',
      year: '2023',
      detail: 'Completed | 83%'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Shantiniketan LokVidyapeeth, Sangli',
      year: '2021',
      detail: 'Completed | 93%'
    }
  ];

  const highlights = [
    'AI and data-driven product developer',
    'Focused on scalable and reliable systems',
    'Strong foundation in machine learning and data science',
    'Skilled in Flutter with a clean, user-centric design approach'
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(102,126,234,0.12),transparent_40%),linear-gradient(180deg,var(--neuro-bg-secondary),var(--neuro-bg-primary))]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(102,126,234,0.35)] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neuro-text-secondary)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            About
          </p>

          <h2
            className="mb-5 text-4xl font-semibold leading-tight text-[var(--neuro-text-primary)] sm:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About Me
          </h2>

          <p className="text-base leading-relaxed text-[var(--neuro-text-secondary)] sm:text-lg">
            I build intelligent mobile apps using Flutter and develop data-driven solutions through machine learning. My work
            focuses on combining innovation, automation, and real-world problem solving.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur md:p-9"
          >
            <h3 className="mb-4 text-2xl font-semibold text-[var(--neuro-text-primary)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Professional Snapshot
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[var(--neuro-text-secondary)] sm:text-base">
              I focus on building scalable, intelligent applications that are both technically robust and user-friendly. My
              work combines Flutter development with data science and machine learning to deliver impactful, real-world
              solutions. From ML-powered systems to seamless user interfaces, I prioritize performance, clarity, and practical
              innovation in every project.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, delay: 0.12 + index * 0.08 }}
                  className="flex items-start gap-2 rounded-2xl border border-[rgba(102,126,234,0.2)] bg-white/70 px-3 py-3 text-sm text-[var(--neuro-text-secondary)]"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 text-[var(--neuro-accent)]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="space-y-4"
          >
            {educationTimeline.map((edu, index) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, x: 18 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--neuro-text-secondary)]">
                  <GraduationCap className="h-4 w-4 text-[var(--neuro-accent)]" />
                  Education
                </div>

                <h4 className="mb-1 text-base font-semibold text-[var(--neuro-text-primary)] sm:text-lg">{edu.degree}</h4>
                <p className="mb-3 text-sm text-[var(--neuro-text-secondary)]">{edu.institution}</p>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(102,126,234,0.3)] bg-white px-3 py-1 text-[var(--neuro-text-primary)]">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.year}
                  </span>
                  <span className="rounded-full border border-[rgba(102,126,234,0.2)] bg-[rgba(102,126,234,0.08)] px-3 py-1 text-[var(--neuro-text-secondary)]">
                    {edu.detail}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--neuro-text-secondary)]">
            Building intelligent products at the intersection of Flutter, machine learning, and practical innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;