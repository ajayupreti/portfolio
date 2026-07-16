'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

/**
 * Premium section heading with animated text
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  className = '',
}) => (
  <motion.div
    className={`text-center mb-12 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {subtitle && (
      <motion.span
        className="inline-block text-sm font-semibold text-primary-400 mb-4 px-4 py-1 rounded-full bg-primary-500/10 border border-primary-500/20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.span>
    )}
    
    <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
      <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    
    {description && (
      <motion.p
        className="text-lg text-text-dark/70 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    )}
  </motion.div>
);
