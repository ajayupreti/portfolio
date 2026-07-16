'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
  onClick?: () => void;
}

/**
 * Premium card component with optional hover effects
 * Supports glassmorphism for elegant translucent effect
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true, glassmorphism = false, onClick }, ref) => (
    <motion.div
      ref={ref}
      className={`
        rounded-lg border transition-all duration-300
        ${glassmorphism
          ? 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20'
          : 'bg-card-dark border-dark-700 hover:border-primary-500/50'
        }
        ${hover ? 'hover:shadow-card-hover cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
);

Card.displayName = 'Card';
