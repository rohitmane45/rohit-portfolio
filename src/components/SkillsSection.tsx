import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Bot, Smartphone, Code2, Palette, Workflow, Database } from 'lucide-react';

const skillsGroups = [
  {
    title: 'Machine Learning',
    icon: Bot,
    color: '#667eea',
    items: ['Model building', 'Feature engineering', 'Data analysis', 'Predictive systems'],
  },
  {
    title: 'Flutter Development',
    icon: Smartphone,
    color: '#02569b',
    items: ['Cross-platform UI', 'Mobile app architecture', 'Responsive layouts', 'Clean user flow'],
  },
  {
    title: 'Data Science',
    icon: Database,
    color: '#4ecdc4',
    items: ['Pandas', 'NumPy', 'Statistics', 'Visualization'],
  },
  {
    title: 'Product & Design',
    icon: Palette,
    color: '#f59e0b',
    items: ['UI/UX thinking', 'Wireframing', 'Problem solving', 'User-centric design'],
  },
  {
    title: 'Automation',
    icon: Workflow,
    color: '#ff6b6b',
    items: ['n8n workflows', 'API integration', 'Process automation', 'System orchestration'],
  },
  {
    title: 'Core Tech',
    icon: Code2,
    color: '#43e97b',
    items: ['Python', 'JavaScript', 'REST APIs', 'Git / GitHub'],
  },
];

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(102,126,234,0.12),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(118,75,162,0.08),transparent_38%),linear-gradient(180deg,var(--neuro-bg-primary),var(--neuro-bg-secondary))]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(102,126,234,0.35)] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neuro-text-secondary)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Skills
          </p>
          <h2
            className="mb-5 text-4xl font-semibold leading-tight text-[var(--neuro-text-primary)] sm:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Skills That Power My Work
          </h2>
          <p className="text-base leading-relaxed text-[var(--neuro-text-secondary)] sm:text-lg">
            A focused mix of AI, mobile development, data science, automation, and product design.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillsGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                transition={{ duration: 0.45, delay: 0.08 + index * 0.06 }}
                className="rounded-[1.8rem] border border-white/70 bg-white/75 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.1)] backdrop-blur"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm" style={{ border: `1px solid ${group.color}55` }}>
                    <Icon className="h-5 w-5" style={{ color: group.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--neuro-text-primary)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(102,126,234,0.2)] bg-white px-3 py-1 text-xs font-medium text-[var(--neuro-text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
