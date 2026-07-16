'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '@/lib/animations';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Performance from '@/components/sections/Performance';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CommandPalette from '@/components/CommandPalette';

/**
 * Main page component
 * Orchestrates all sections and page layout
 */
export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-dark-900 text-text-dark overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Performance Section */}
      <Performance />

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <ScrollToTop />
      <CommandPalette />
    </motion.div>
  );
}
