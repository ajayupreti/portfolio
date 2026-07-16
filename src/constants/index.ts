/**
 * Animation configuration constants
 */

export const ANIMATION = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
    SLOWER: 0.8,
    SLOWEST: 1.2,
  },
  DELAY: {
    STAGGER_CHILDREN: 0.1,
    STAGGER_CONTAINER: 0.05,
  },
  EASING: {
    EASE_IN_OUT: [0.4, 0, 0.2, 1],
    EASE_OUT: [0, 0, 0.2, 1],
    EASE_IN: [0.4, 0, 1, 1],
  },
} as const;

/**
 * Scroll trigger constants
 */
export const SCROLL = {
  TRIGGER_OFFSET: 0.3,
  SPRING: {
    stiffness: 100,
    damping: 30,
    mass: 1,
  },
} as const;

/**
 * Theme constants
 */
export const THEME = {
  COLORS: {
    PRIMARY: '#4F46E5',
    ACCENT: '#06B6D4',
    SUCCESS: '#10B981',
    WARNING: '#F59E0B',
    ERROR: '#EF4444',
    DARK_BG: '#050816',
    DARK_CARD: '#111827',
    LIGHT_TEXT: '#F9FAFB',
  },
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
} as const;

/**
 * SEO constants
 */
export const SEO = {
  SITE_NAME: 'Ajay Upreti - Senior Frontend Engineer',
  DESCRIPTION: 'Premium portfolio of Ajay Upreti, a Principal Frontend Engineer specializing in React, Next.js, Performance Engineering, and modern frontend architecture.',
  KEYWORDS: [
    'Frontend Engineer',
    'React Developer',
    'Next.js',
    'Performance Engineering',
    'Web Performance',
    'TypeScript',
  ],
  AUTHOR: 'Ajay Upreti',
} as const;

/**
 * Navigation sections
 */
export const NAV_SECTIONS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'performance', label: 'Performance', href: '#performance' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

/**
 * Skill categories configuration
 */
export const SKILL_CATEGORIES = {
  frontend: {
    name: 'Frontend',
    description: 'Modern frontend technologies and frameworks',
  },
  backend: {
    name: 'Backend',
    description: 'Server-side development and APIs',
  },
  cloud: {
    name: 'Cloud & DevOps',
    description: 'Cloud platforms and deployment',
  },
  performance: {
    name: 'Performance',
    description: 'Web performance optimization',
  },
  'ai-tools': {
    name: 'AI Tools',
    description: 'AI-powered developer tools',
  },
} as const;
