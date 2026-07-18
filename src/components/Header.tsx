'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, useScrollSection, useIsMobile } from '@/hooks';
import { usePortfolioStore } from '@/store/portfolio';
import { NAV_SECTIONS } from '@/constants';
import { Button } from './ui/Button';
import { scrollToElement } from '@/lib/utils';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

/**
 * Header/Navigation component with sticky behavior and mobile menu
 */
export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const { activeSection, mobileMenuOpen, setMobileMenuOpen } = usePortfolioStore();
  const { scrollY } = usePortfolioStore();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollSection();

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <>
      {/* Sticky Navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-900/80 backdrop-blur-md border-b border-dark-700/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
            >
              Ajay
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-1">
              {NAV_SECTIONS.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToElement(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary-500/20 text-primary-300'
                      : 'text-text-dark/70 hover:text-text-dark'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
              whileHover={{ rotate: 20 }}
              whileTap={{ rotate: -20 }}
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Resume Download */}
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1-dsONNX5FZVjZJFyzIWdXWOeYxnXLqA3/view?usp=sharing',
                  '_blank'
                )
              }
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 top-16 z-40 bg-dark-900/95 backdrop-blur-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-4 space-y-2">
            {NAV_SECTIONS.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  scrollToElement(section.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-dark-800 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
