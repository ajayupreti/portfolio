'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  isActive?: boolean;
  index: number;
}

/**
 * Timeline item component for experience and journey
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  description,
  date,
  isActive = false,
  index,
}) => (
  <motion.div
    className="relative pb-12"
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    {/* Timeline dot */}
    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1.5">
      <motion.div
        className={`w-4 h-4 rounded-full border-2 ${isActive ? 'bg-primary-500 border-primary-500' : 'bg-dark-800 border-dark-700'}`}
        animate={isActive ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>

    {/* Timeline line */}
    <div className="absolute left-0 top-4 w-0.5 h-full bg-gradient-to-b from-primary-500/50 to-transparent" />

    {/* Content */}
    <div className="ml-8">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold text-text-dark">{title}</h3>
          <p className="text-primary-400 font-medium">{subtitle}</p>
        </div>
        <span className="text-sm text-text-dark/60 whitespace-nowrap ml-4">{date}</span>
      </div>
      <p className="text-text-dark/70">{description}</p>
    </div>
  </motion.div>
);
