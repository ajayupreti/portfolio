/**
 * Portfolio data configuration
 * This file contains all the content for your portfolio
 * Easily editable and scalable structure
 */

import { Portfolio } from '@/types/portfolio';

export const portfolioData: Portfolio = {
  name: 'Ajay Upreti',
  title: 'Senior Frontend Engineer',
  tagline: 'Building performant, scalable web experiences',
  description:
    'Passionate about crafting exceptional web experiences with React, Next.js, and modern frontend architecture. Specialized in performance optimization, web vitals, and developer experience.',
  avatarUrl: 'https://github.com/ajayupreti.png',
  resumeUrl: 'https://drive.google.com/file/d/1-dsONNX5FZVjZJFyzIWdXWOeYxnXLqA3/view?usp=sharing',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/ajayupreti',
      icon: 'github',
      label: 'Follow on GitHub',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ajay-upreti-3915a1a1/',
      icon: 'linkedin',
      label: 'Connect on LinkedIn',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ajayupreti',
      icon: 'twitter',
      label: 'Follow on Twitter',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@ajayupreti20194',
      icon: 'medium',
      label: 'Read on Medium',
    },
  ],
  skills: [
    {
      id: 'frontend',
      name: 'Frontend',
      description: 'Modern frontend technologies and frameworks',
      skills: [
        { name: 'React', icon: 'react', category: 'frontend', proficiency: 95 },
        { name: 'Next.js', icon: 'nextjs', category: 'frontend', proficiency: 90 },
        { name: 'TypeScript', icon: 'typescript', category: 'frontend', proficiency: 90 },
        { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', proficiency: 90 },
        { name: 'Framer Motion', icon: 'framer', category: 'frontend', proficiency: 85 },
        { name: 'Vue.js', icon: 'vue', category: 'frontend', proficiency: 80 },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      description: 'Server-side development and APIs',
      skills: [
        { name: 'Node.js', icon: 'nodejs', category: 'backend', proficiency: 85 },
        { name: 'Express', icon: 'express', category: 'backend', proficiency: 80 },
        { name: 'REST APIs', icon: 'api', category: 'backend', proficiency: 85 },
        { name: 'GraphQL', icon: 'graphql', category: 'backend', proficiency: 75 },
        { name: 'MongoDB', icon: 'mongodb', category: 'backend', proficiency: 80 },
        { name: 'PostgreSQL', icon: 'postgresql', category: 'backend', proficiency: 75 },
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      description: 'Cloud platforms and deployment',
      skills: [
        { name: 'AWS', icon: 'aws', category: 'cloud', proficiency: 80 },
        { name: 'Firebase', icon: 'firebase', category: 'cloud', proficiency: 85 },
        { name: 'Docker', icon: 'docker', category: 'cloud', proficiency: 75 },
        { name: 'GitHub Actions', icon: 'github', category: 'cloud', proficiency: 80 },
        { name: 'Vercel', icon: 'vercel', category: 'cloud', proficiency: 90 },
        { name: 'Kubernetes', icon: 'kubernetes', category: 'cloud', proficiency: 70 },
      ],
    },
    {
      id: 'performance',
      name: 'Performance',
      description: 'Web performance optimization',
      skills: [
        { name: 'Core Web Vitals', icon: 'metrics', category: 'performance', proficiency: 90 },
        { name: 'Lighthouse', icon: 'lighthouse', category: 'performance', proficiency: 90 },
        { name: 'Bundle Optimization', icon: 'bundle', category: 'performance', proficiency: 85 },
        { name: 'Performance Monitoring', icon: 'monitor', category: 'performance', proficiency: 85 },
        { name: 'Chrome DevTools', icon: 'chrome', category: 'performance', proficiency: 90 },
        { name: 'RUM Analytics', icon: 'analytics', category: 'performance', proficiency: 80 },
      ],
    },
    {
      id: 'ai-tools',
      name: 'AI Tools',
      description: 'AI-powered developer tools',
      skills: [
        { name: 'GitHub Copilot', icon: 'copilot', category: 'ai-tools', proficiency: 85 },
        { name: 'ChatGPT', icon: 'openai', category: 'ai-tools', proficiency: 85 },
        { name: 'Claude', icon: 'claude', category: 'ai-tools', proficiency: 80 },
        { name: 'AI-Assisted Debugging', icon: 'debug', category: 'ai-tools', proficiency: 80 },
      ],
    },
  ],
  experiences: [
    {
      id: 'publicis-sapient',
      role: 'Senior Software Engineer',
      company: 'Publicis Sapient',
      companyLogo: 'https://media.licdn.com/dms/image/D560BAQGlgvD_kRqzTA/company-logo_200_200/0/1689341857848?e=1695254400&v=beta&t=',
      startDate: '2021-05',
      isCurrentRole: true,
      description:
        'Leading frontend architecture and development for enterprise products. Established best practices for scalable Angular applications with focus on performance and maintainability.',
      achievements: [
        'Reduced performance regressions by 30% through continuous monitoring',
        'Improved Core Web Vitals scores by 40%',
        'Established frontend architecture patterns adopted across multiple teams',
        'Led code review and mentoring for 5+ junior developers',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'AWS'],
    },
    {
      id: 'capgemini',
      role: 'Senior Software Engineer',
      company: 'Capgemini Engineering',
      companyLogo: 'https://media.licdn.com/dms/image/D4D0BAQF9yL_8Ah7K9w/company-logo_200_200/0/1688051607651?e=1695254400&v=beta&t=',
      startDate: '2018-12',
      endDate: '2021-04',
      isCurrentRole: false,
      description:
        'Architected scalable frontend solutions for global clients. Implemented modular component systems and established best practices for Angular applications.',
      achievements: [
        'Designed frontend architecture for 3 major enterprise applications',
        'Implemented automated performance testing reducing bugs by 45%',
        'Mentored team of 8 developers on modern frontend practices',
      ],
      technologies: ['Angular', 'RxJS', 'TypeScript', 'REST APIs', 'Material Design'],
    },
    {
      id: 'crownstack',
      role: 'Front-End Developer',
      company: 'Crownstack',
      startDate: '2017-05',
      endDate: '2018-12',
      isCurrentRole: false,
      description:
        'Developed multiple web applications from scratch using modern Angular framework. Created reusable components and established coding standards.',
      achievements: [
        'Built 5+ production applications with Angular and RxJS',
        'Implemented responsive designs for mobile and desktop',
        'Improved application performance by 35%',
      ],
      technologies: ['Angular', 'JavaScript', 'CSS3', 'RESTful APIs'],
    },
  ],
  projects: [
    {
      id: 'performance-optimization',
      title: 'Core Web Vitals Optimization Suite',
      description:
        'Comprehensive suite for monitoring and optimizing Core Web Vitals across multiple applications. Achieved 95+ Lighthouse scores.',
      shortDescription: 'Performance optimization toolkit',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e46c359e?w=800&h=450&fit=crop',
      technologies: ['React', 'Next.js', 'TypeScript', 'Lighthouse', 'Chrome DevTools'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ajayupreti',
      metrics: [
        { label: 'Lighthouse Score', value: '98', improvement: '+45%' },
        { label: 'Core Web Vitals', value: 'Good', improvement: '+50%' },
        { label: 'Load Time', value: '1.2s', improvement: '-60%' },
      ],
      featured: true,
      category: 'performance',
    },
    {
      id: 'nextjs-starter',
      title: 'Next.js Enterprise Starter',
      description:
        'Production-ready Next.js starter template with TypeScript, Tailwind CSS, and performance optimizations built-in.',
      shortDescription: 'Enterprise Next.js starter',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ajayupreti',
      featured: true,
      category: 'frontend',
    },
    {
      id: 'portfolio-redesign',
      title: 'Premium Portfolio Website',
      description:
        'Modern, performant portfolio website with dark mode, animations, and optimized for all devices. Achieves 100/100 Lighthouse scores.',
      shortDescription: 'Modern portfolio design',
      image: 'https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=800&h=450&fit=crop',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://ajayupreti.com',
      githubUrl: 'https://github.com/ajayupreti/portfolio',
      featured: true,
      category: 'frontend',
    },
  ],
  achievements: [
    {
      id: 'nextjs-certified',
      title: 'Next.js Server-Side Rendering',
      description: 'Completed advanced certification for Next.js SSR from LinkedIn Learning',
      icon: 'certificate',
      date: '2023-06',
      category: 'certification',
    },
    {
      id: 'react-certified',
      title: 'React - The Complete Guide',
      description: 'Completed comprehensive React course from Udemy with distinction',
      icon: 'certificate',
      date: '2022-09',
      category: 'certification',
    },
    {
      id: 'performance-award',
      title: 'Web Performance Excellence',
      description: 'Recognized for exceptional contributions to web performance optimization',
      icon: 'award',
      date: '2023-01',
      category: 'award',
    },
  ],
  performanceHighlights: [
    {
      id: 'core-web-vitals',
      title: 'Core Web Vitals Optimization',
      description: 'Expertise in optimizing LCP, FID, and CLS for production applications',
      icon: 'metrics',
      metric: {
        label: 'Optimization Success Rate',
        value: '95%',
        improvement: 'Average +40% improvement',
      },
    },
    {
      id: 'bundle-optimization',
      title: 'Bundle Optimization',
      description: 'Advanced code splitting and tree-shaking techniques for optimal performance',
      icon: 'bundle',
      metric: {
        label: 'Bundle Size Reduction',
        value: '45%',
        improvement: 'Average reduction across projects',
      },
    },
    {
      id: 'rendering-optimization',
      title: 'Rendering Optimization',
      description: 'Leveraging React.memo, useMemo, and useCallback for optimal rendering',
      icon: 'render',
      metric: {
        label: 'Re-render Reduction',
        value: '60%',
        improvement: 'Fewer unnecessary renders',
      },
    },
  ],
  education: [
    {
      id: 'graphic-era',
      schoolName: 'Graphic Era Hill University',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      startDate: '2012-07',
      endDate: '2016-06',
      gpa: '7.8/10',
      description: 'Focused on web technologies and software engineering principles',
    },
    {
      id: 'aps',
      schoolName: 'Army Public School',
      degree: 'Senior Secondary School',
      field: 'Science & Mathematics',
      startDate: '2010-04',
      endDate: '2012-03',
    },
  ],
  contactEmail: 'ajayupreti20194@gmail.com',
  contactPhone: '+91-8267832583',
};
