'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  proficiency?: number;
  icon?: string;
  className?: string;
}

/**
 * Skill badge component with optional proficiency indicator
 */
export const SkillBadge = React.forwardRef<HTMLDivElement, SkillBadgeProps>(
  ({ name, proficiency, icon, className = '' }, ref) => (
    <motion.div
      ref={ref}
      className={`
        relative p-4 rounded-lg bg-dark-800 border border-dark-700
        hover:border-primary-500/50 transition-all duration-300
        ${className}
      `}
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {icon && (
        <div className="text-2xl mb-2">
          {icon}
        </div>
      )}
      <div className="font-medium text-text-dark">{name}</div>
      
      {proficiency !== undefined && (
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-text-dark/60">Proficiency</span>
            <span className="text-xs font-medium text-primary-400">{proficiency}%</span>
          </div>
          <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
              initial={{ width: 0 }}
              animate={{ width: `${proficiency}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
);

SkillBadge.displayName = 'SkillBadge';
