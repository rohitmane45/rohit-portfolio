import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-4 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--neuro-bg-primary),var(--neuro-bg-secondary))]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 grid gap-8 rounded-[2rem] border border-white/70 bg-white/72 p-7 shadow-[0_14px_40px_rgba(15,23,42,0.1)] backdrop-blur md:grid-cols-3 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-semibold text-[var(--neuro-text-primary)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Rohit Mane
            </h3>
            <p className="text-sm leading-relaxed text-[var(--neuro-text-secondary)] sm:text-base">
              AI engineer building practical products with clean UX and measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--neuro-text-secondary)]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-full border border-[rgba(102,126,234,0.2)] bg-white px-3 py-1.5 text-left text-sm text-[var(--neuro-text-secondary)] transition-colors duration-200 hover:text-[var(--neuro-accent)]"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--neuro-text-secondary)]">
              Get In Touch
            </h4>
            <div className="space-y-2 text-sm text-[var(--neuro-text-secondary)] sm:text-base">
              <p>drohitmane07@gmail.com</p>
              <p>+91 7588058850</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 px-2 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-[var(--neuro-text-secondary)]"
          >
            © {currentYear} Rohit Mane. All rights reserved.
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full border border-[rgba(102,126,234,0.3)] bg-white/80 p-3 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-[var(--neuro-accent)]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;