import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pt-24 pb-12 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(102,126,234,0.12),transparent_35%),linear-gradient(160deg,var(--neuro-bg-primary),var(--neuro-bg-secondary))]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(102,126,234,0.16)] blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-4xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 rounded-full border border-[rgba(102,126,234,0.3)] bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--neuro-text-secondary)] backdrop-blur"
        >
          AI Engineer and Data Scientist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(102,126,234,0.35),rgba(118,75,162,0.18))] blur-xl" />
          <div className="relative h-52 w-52 overflow-hidden rounded-full border border-white/80 bg-[var(--neuro-bg-primary)] p-2 shadow-[0_25px_80px_rgba(17,24,39,0.22)] sm:h-60 sm:w-60">
            <img
              src="/images/roo.jpg"
              alt="Rohit Mane"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-3 text-5xl font-semibold leading-tight text-[var(--neuro-text-primary)] sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Rohit Mane
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mb-3 text-base font-medium uppercase tracking-[0.18em] text-[var(--neuro-text-secondary)] sm:text-lg"
        >
          Building practical AI products
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[var(--neuro-text-secondary)] sm:text-base"
        >
          I craft intelligent digital solutions by combining Flutter, data science, and machine learning, with a strong focus on usability, efficiency, and impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="/assets/Rohit%20Mane%20Resume%202026.pdf"
            download="Rohit Mane Resume 2026.pdf"
            className="rounded-full bg-[var(--neuro-text-primary)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(17,24,39,0.25)]"
          >
            Resume
          </motion.a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full border border-[var(--neuro-text-secondary)]/35 bg-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--neuro-text-primary)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full border border-white/80 bg-white/60 p-4 backdrop-blur transition-colors hover:bg-white/90"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-6 h-6 text-[var(--neuro-text-primary)]" />
        </motion.button>
        <motion.p 
          className="text-xs text-[var(--neuro-text-secondary)] mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;