import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { staggerContainer, staggerItem, inputFocusVariants } from '@/lib/animations';

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
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/rohitmane45',
      color: '#1DA1F2'
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[var(--neuro-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-[var(--neuro-text-secondary)] max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and build something amazing together. 
            I'm always open to discussing new opportunities and innovative ideas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6">
                Let's Connect
              </h3>
              <p className="text-[var(--neuro-text-secondary)] mb-8 leading-relaxed">
                I'm currently pursuing my B.E. in AI & Data Science and actively seeking internship opportunities, 
                collaboration projects, and freelance work. Whether you have a project idea, job opportunity, 
                or just want to chat about technology, I'd love to hear from you!
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    variants={staggerItem}
                    href={info.href}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `0 10px 25px ${info.color}40`
                    }}
                    className="neuro-card p-6 flex items-center space-x-4 block hover:glow-effect transition-all duration-300"
                  >
                    <div className="neuro-button p-3">
                      <Icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--neuro-text-primary)]">
                        {info.label}
                      </div>
                      <div className="text-[var(--neuro-text-secondary)]">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Resume Download Button */}
            <motion.div variants={staggerItem} className="pt-6">
              <motion.a
                href="/assets/TE%20Rohit%20Mane%20Resume.pdf"
                download="TE Rohit Mane Resume.pdf"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(102, 126, 234, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="neuro-button px-6 py-4 text-lg font-medium text-[var(--neuro-text-primary)] glow-effect flex items-center space-x-3 w-full justify-center"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerItem} className="pt-8">
              <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)] mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.2, 
                        y: -5,
                        boxShadow: `0 10px 25px ${social.color}40`
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="neuro-button p-4 hover:glow-effect transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" style={{ color: social.color }} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <motion.div variants={staggerItem} className="neuro-card p-8">
              <h3 className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6">
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
                  <motion.div variants={staggerItem}>
                    <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                      Name *
                    </label>
                    <motion.input
                      variants={inputFocusVariants}
                      whileFocus="focus"
                      initial="rest"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[var(--neuro-error)]">
                        {errors.name.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                      Email *
                    </label>
                    <motion.input
                      variants={inputFocusVariants}
                      whileFocus="focus"
                      initial="rest"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[var(--neuro-error)]">
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                    Subject *
                  </label>
                  <motion.input
                    variants={inputFocusVariants}
                    whileFocus="focus"
                    initial="rest"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-[var(--neuro-error)]">
                      {errors.subject.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    variants={inputFocusVariants}
                    whileFocus="focus"
                    initial="rest"
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-[var(--neuro-error)]">
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full neuro-button px-6 py-4 text-lg font-medium text-[var(--neuro-text-primary)] flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'glow-effect'
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
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;