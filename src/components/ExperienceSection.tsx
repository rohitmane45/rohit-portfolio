import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Palette, Calendar, MapPin, Sparkles } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = React.useState(false);

  const experiences = [
    {
      id: 1,
      title: 'Data Science Intern',
      organization: 'CodeWithHarry',
      period: 'Present',
      location: 'Remote',
      type: 'Internship',
      icon: Briefcase,
      color: '#667eea',
      description: 'Building practical data science workflows and project-based analytics solutions.',
      skills: ['Python', 'Pandas', 'NumPy']
    },
    {
      id: 2,
      title: 'Design Co-Lead',
      organization: 'S4DS (Society for Data Science)',
      period: 'Present',
      location: 'College',
      type: 'Leadership',
      icon: Palette,
      color: '#4ecdc4',
      description: 'Leading design direction and web presence for the campus data science society.',
      skills: ['UI/UX', 'Team Leadership', 'Content Design']
    },
    {
      id: 3,
      title: 'Business Associate',
      organization: 'Health-Tech Startup',
      period: 'Present',
      location: 'Remote',
      type: 'Professional',
      icon: Briefcase,
      color: '#ff6b6b',
      description: 'Supporting product operations and execution in a fast-moving health-tech startup.',
      skills: ['Operations', 'Business Strategy', 'Team Coordination']
    },
    {
      id: 4,
      title: 'Sport Committee Member',
      organization: 'College Sports Committee',
      period: 'Present',
      location: 'College',
      type: 'Leadership',
      icon: Users,
      color: '#f093fb',
      description: 'Coordinating sports activities and improving student participation across campus events.',
      skills: ['Event Coordination', 'Operations', 'Community Engagement']
    },
    {
      id: 5,
      title: 'Event Management Team',
      organization: 'ZION',
      period: '2024',
      location: 'College',
      type: 'Leadership',
      icon: Calendar,
      color: '#43e97b',
      description: 'Planned and executed large college events with multi-team coordination.',
      skills: ['Event Planning', 'Logistics', 'Team Coordination']
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(102,126,234,0.1),transparent_35%),radial-gradient(circle_at_85%_90%,rgba(118,75,162,0.08),transparent_35%),linear-gradient(180deg,var(--neuro-bg-secondary),var(--neuro-bg-primary))]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(102,126,234,0.35)] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neuro-text-secondary)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Experience
          </p>

          <h2
            className="mb-5 text-4xl font-semibold leading-tight text-[var(--neuro-text-primary)] sm:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Experience & Leadership
          </h2>

          <p className="text-base leading-relaxed text-[var(--neuro-text-secondary)] sm:text-lg">
            Selected roles focused on impact, leadership, and execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mb-8 rounded-3xl border border-white/70 bg-white/65 px-6 py-5 text-sm text-[var(--neuro-text-secondary)] shadow-[0_12px_36px_rgba(15,23,42,0.08)] backdrop-blur sm:px-7"
        >
          5 focused experiences across data science, leadership, and operations.
        </motion.div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {experiences.slice(0, showAll ? experiences.length : 3).map((exp, index) => {
            const IconComponent = exp.icon;

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.07 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/70 bg-white/78 p-6 shadow-[0_16px_44px_rgba(15,23,42,0.1)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: exp.color }} />

                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm" style={{ border: `1px solid ${exp.color}55` }}>
                      <IconComponent className="h-5 w-5" style={{ color: exp.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--neuro-text-primary)] sm:text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: exp.color }}>
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-[rgba(102,126,234,0.25)] bg-[rgba(102,126,234,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--neuro-text-secondary)]">
                    {exp.type}
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(102,126,234,0.22)] bg-white px-3 py-1 text-[var(--neuro-text-secondary)]">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(102,126,234,0.22)] bg-white px-3 py-1 text-[var(--neuro-text-secondary)]">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-[var(--neuro-text-secondary)] sm:text-base">{exp.description}</p>

                <div className="mb-5">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--neuro-text-secondary)]">Skills and Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, delay: 0.18 + skillIndex * 0.03 }}
                        className="rounded-full border border-[rgba(102,126,234,0.2)] bg-white px-3 py-1 text-xs font-medium text-[var(--neuro-text-secondary)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto text-xs font-medium uppercase tracking-[0.12em] text-[var(--neuro-text-secondary)]">
                  Focused Role
                </div>
              </motion.article>
            );
          })}
        </div>

        {experiences.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay: 0.35 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-[rgba(102,126,234,0.3)] bg-white/75 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--neuro-text-primary)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;