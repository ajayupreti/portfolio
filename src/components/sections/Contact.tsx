'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/constants/portfolio-data';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

/**
 * Contact section with email form and contact information
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Open mailto link instead
      const mailtoLink = `mailto:${portfolioData.contactEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          subtitle="LET'S CONNECT"
          title="Get In Touch"
          description="Have a project in mind? Let's create something amazing together"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-dark mb-8">Contact Information</h3>

            {[
              {
                icon: FiMail,
                label: 'Email',
                value: portfolioData.contactEmail,
                href: `mailto:${portfolioData.contactEmail}`,
              },
              {
                icon: FiPhone,
                label: 'Phone',
                value: portfolioData.contactPhone,
                href: `tel:${portfolioData.contactPhone}`,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                className="flex gap-4 p-4 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="text-2xl text-primary-400 flex-shrink-0 group-hover:text-accent-400 transition-colors">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm text-text-dark/60">{label}</p>
                  <p className="text-text-dark font-medium">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-text-dark/60 mb-4">Follow me on social media</p>
              <div className="flex gap-3">
                {portfolioData.socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-dark-800 hover:bg-primary-600 text-text-dark hover:text-white transition-colors"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <span className="text-xl">{link.icon === 'github' ? '🐙' : link.icon === 'linkedin' ? '💼' : '✍️'}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-text-dark placeholder-text-dark/50 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-text-dark placeholder-text-dark/50 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-text-dark placeholder-text-dark/50 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-text-dark placeholder-text-dark/50 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-3 rounded-lg bg-success/20 border border-success/30 text-success text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Message sent successfully! Your email client will open now.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    className="p-3 rounded-lg bg-error/20 border border-error/30 text-error text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✗ Error sending message. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
