import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, Sparkles } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    const mailtoLink = `mailto:drohitmane45@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'drohitmane07@gmail.com',
      href: 'mailto:drohitmane07@gmail.com',
      color: '#ea4335'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7588058850',
      href: 'tel:+917588058850',
      color: '#34a853'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
      color: '#4285f4'
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rohitmane45',
      color: '#333'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohitmane45',
      color: '#0077B5'
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(102,126,234,0.12),transparent_35%),linear-gradient(180deg,var(--neuro-bg-secondary),var(--neuro-bg-primary))]" />

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
            Contact
          </p>

          <h2 className="mb-5 text-4xl font-semibold leading-tight text-[var(--neuro-text-primary)] sm:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Get In Touch
          </h2>
          <p className="text-base leading-relaxed text-[var(--neuro-text-secondary)] sm:text-lg">
            Open to internships, collaborations, and product-focused work. If your idea needs thoughtful AI execution,
            let us connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/70 bg-white/75 p-7 shadow-[0_15px_40px_rgba(15,23,42,0.1)] backdrop-blur">
              <h3 className="mb-4 text-3xl font-semibold text-[var(--neuro-text-primary)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Let's Connect
              </h3>
              <p className="text-sm leading-relaxed text-[var(--neuro-text-secondary)] sm:text-base">
                Share your project, internship opportunity, or collaboration idea. I usually respond quickly with next steps.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.07 }}
                    href={info.href}
                    className="block rounded-2xl border border-white/70 bg-white/75 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                      <Icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--neuro-text-secondary)]">{info.label}</div>
                        <div className="text-sm font-medium text-[var(--neuro-text-primary)] sm:text-base">{info.value}</div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: 0.32 }}
              className="pt-2"
            >
              <motion.a
                href="/assets/Rohit%20Mane%20Resume%202026.pdf"
                download="Rohit Mane Resume 2026.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--neuro-text-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: 0.38 }}
              className="pt-4"
            >
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--neuro-text-secondary)]">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" style={{ color: social.color }} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_16px_45px_rgba(15,23,42,0.1)] backdrop-blur md:p-8">
              <h3 className="mb-6 text-3xl font-semibold text-[var(--neuro-text-primary)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Send a Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 neuro-inset rounded-lg"
                >
                  <p className="text-[var(--neuro-success)] font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full rounded-xl border border-[rgba(102,126,234,0.22)] bg-white px-4 py-3 text-[var(--neuro-text-primary)] focus:border-[var(--neuro-accent)] focus:outline-none"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[var(--neuro-error)]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full rounded-xl border border-[rgba(102,126,234,0.22)] bg-white px-4 py-3 text-[var(--neuro-text-primary)] focus:border-[var(--neuro-accent)] focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[var(--neuro-error)]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full rounded-xl border border-[rgba(102,126,234,0.22)] bg-white px-4 py-3 text-[var(--neuro-text-primary)] focus:border-[var(--neuro-accent)] focus:outline-none"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-[var(--neuro-error)]">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-[rgba(102,126,234,0.22)] bg-white px-4 py-3 text-[var(--neuro-text-primary)] focus:border-[var(--neuro-accent)] focus:outline-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-[var(--neuro-error)]">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                      isSubmitting
                        ? 'cursor-not-allowed bg-[var(--neuro-text-secondary)] text-white/85'
                        : 'bg-[var(--neuro-text-primary)] text-white hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-[var(--neuro-accent)] border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;