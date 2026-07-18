'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button component variants using CVA
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-glow',
        secondary: 'bg-dark-800 hover:bg-dark-700 text-text-dark border border-dark-700',
        accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-lg',
        ghost: 'hover:bg-dark-800 text-text-dark',
        outline: 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

/**
 * Premium button component with multiple variants
 * Supports loading state and icons
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, icon, children, ...props }, ref) => (
    <motion.button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="mr-2"
          >
            ⏳
          </motion.span>
          Loading...
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  )
);

Button.displayName = 'Button';
