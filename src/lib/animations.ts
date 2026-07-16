/**
 * Utility functions for animations and UI interactions
 */

import { ANIMATION } from '@/constants';

/**
 * Generate stagger animation variants for parent container
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.DELAY.STAGGER_CHILDREN,
      delayChildren: 0.2,
    },
  },
};

/**
 * Generate stagger animation variants for child items
 */
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.DURATION.NORMAL,
      ease: ANIMATION.EASING.EASE_OUT,
    },
  },
};

/**
 * Fade in animation
 */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: ANIMATION.DURATION.NORMAL },
  },
};

/**
 * Slide up animation from bottom
 */
export const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.DURATION.SLOW,
      ease: ANIMATION.EASING.EASE_OUT,
    },
  },
};

/**
 * Scale animation
 */
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION.DURATION.SLOW,
      ease: ANIMATION.EASING.EASE_OUT,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: ANIMATION.DURATION.FAST },
  },
};

/**
 * Rotate animation
 */
export const rotateVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION.DURATION.SLOW,
      ease: ANIMATION.EASING.EASE_OUT,
    },
  },
};

/**
 * Floating animation
 */
export const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Glow pulse animation
 */
export const glowVariants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(79, 70, 229, 0.3)',
      '0 0 40px rgba(79, 70, 229, 0.5)',
      '0 0 20px rgba(79, 70, 229, 0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
