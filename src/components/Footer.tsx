'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/constants/portfolio-data';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

/**
 * Footer component with social links and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="relative z-10 border-t border-dark-700/50 bg-dark-900/50 backdrop-blur-sm py-12"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
              Ajay Upreti
            </h3>
            <p className="text-text-dark/60">Senior Frontend Engineer</p>
            <p className="text-text-dark/60 text-sm">Building performant web experiences</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'GitHub', url: 'https://github.com/ajayupreti' },
                { label: 'LinkedIn', url: 'https://linkedin.com/in/ajay-upreti-3915a1a1/' },
                { label: 'Medium', url: 'https://medium.com/@ajayupreti20194' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-dark/60 hover:text-primary-400 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <FiExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-dark mb-4">Get in Touch</h4>
            <a
              href={`mailto:${portfolioData.contactEmail}`}
              className="text-text-dark/60 hover:text-primary-400 transition-colors flex items-center gap-2"
            >
              <FiMail size={18} />
              {portfolioData.contactEmail}
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent my-8" />

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-text-dark/60 text-sm">
            © {currentYear} Ajay Upreti. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {portfolioData.socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || FiGithub;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 hover:bg-primary-600 text-text-dark hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
