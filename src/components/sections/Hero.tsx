'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/constants/portfolio-data';
import { scrollToElement } from '@/lib/utils';
import { containerVariants, itemVariants } from '@/lib/animations';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

/**
 * Hero section with animated introduction and CTA buttons
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main headline with animated text */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="block text-text-dark">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Ajay Upreti
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl text-text-dark/80 max-w-2xl mx-auto">
            Senior Frontend Engineer specializing in React, Next.js, and Performance Optimization
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg text-text-dark/60 max-w-3xl mx-auto leading-relaxed">
            I build high-performance, scalable web experiences with modern frontend technologies.
            Passionate about optimizing Core Web Vitals, creating exceptional user experiences, and
            sharing knowledge with the developer community.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToElement('projects')}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToElement('contact')}
          >
            Get in Touch
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1-dsONNX5FZVjZJFyzIWdXWOeYxnXLqA3/view?usp=sharing',
                '_blank'
              )
            }
          >
            Download Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            {
              icon: FiGithub,
              url: 'https://github.com/ajayupreti',
              label: 'GitHub',
            },
            {
              icon: FiLinkedin,
              url: 'https://www.linkedin.com/in/ajay-upreti-3915a1a1/',
              label: 'LinkedIn',
            },
            {
              icon: FiMail,
              url: `mailto:${portfolioData.contactEmail}`,
              label: 'Email',
            },
          ].map(({ icon: Icon, url, label }) => (
            <motion.a
              key={label}
              href={url}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="p-3 rounded-lg bg-dark-800 hover:bg-primary-600 text-text-dark hover:text-white transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            onClick={() => scrollToElement('about')}
            className="p-2 rounded-lg border border-primary-500/30 hover:border-primary-500/60 cursor-pointer transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FiArrowDown size={24} className="text-primary-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
