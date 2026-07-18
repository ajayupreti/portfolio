'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const variantStyles = {
  primary: 'bg-primary-500/20 text-primary-300 border border-primary-500/30',
  secondary: 'bg-dark-700 text-text-dark border border-dark-600',
  success: 'bg-success/20 text-success border border-success/30',
  warning: 'bg-warning/20 text-warning border border-warning/30',
  error: 'bg-error/20 text-error border border-error/30',
};

/**
 * Badge component for tags, labels, and status indicators
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className = '', variant = 'primary' }, ref) => (
    <motion.div
      ref={ref}
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${variantStyles[variant]}
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
);

Badge.displayName = 'Badge';
