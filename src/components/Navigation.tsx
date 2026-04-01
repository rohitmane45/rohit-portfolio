import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { navVariants } from '@/lib/animations';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-[1.7rem] border border-white/70 px-5 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 sm:px-6 ${
            isScrolled ? 'bg-white/82' : 'bg-white/72'
          }`}
        >
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-3xl font-semibold leading-none text-[var(--neuro-text-primary)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              onClick={() => scrollToSection('hero')}
            >
              Rohit Mane
            </motion.div>

            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full border border-[rgba(102,126,234,0.18)] bg-white/80 px-2 py-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--neuro-text-secondary)] transition-all duration-200 hover:bg-[rgba(102,126,234,0.12)] hover:text-[var(--neuro-accent)]"
                >
                  {item.label}
                </motion.button>
              ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/92 shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-[var(--neuro-text-primary)]" />
                ) : (
                  <Sun className="w-5 h-5 text-[var(--neuro-text-primary)]" />
                )}
              </motion.button>
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-sm"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-[var(--neuro-text-primary)]" />
                ) : (
                  <Sun className="w-5 h-5 text-[var(--neuro-text-primary)]" />
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-sm"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[var(--neuro-text-primary)]" />
                ) : (
                  <Menu className="w-5 h-5 text-[var(--neuro-text-primary)]" />
                )}
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 space-y-2 rounded-2xl border border-[rgba(102,126,234,0.2)] bg-white/86 p-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-xl px-4 py-2 text-left text-sm font-medium text-[var(--neuro-text-secondary)] transition-colors duration-200 hover:bg-[rgba(102,126,234,0.1)] hover:text-[var(--neuro-accent)]"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;