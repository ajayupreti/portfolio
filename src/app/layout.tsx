'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks';

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout wrapper with theme provider and background effects
 */
export function RootLayout({ children }: RootLayoutProps) {
  const { isDark } = useTheme();

  return (
    <html lang="en" className={isDark ? 'dark' : ''}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={isDark ? '#050816' : '#ffffff'} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-900 text-text-dark transition-colors duration-300">
        {/* Animated background gradient */}
        <AnimatedBackground isDark={isDark} />
        
        {/* Grid background pattern */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-mesh" />
        </div>

        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Background blobs */}
        <BackgroundBlobs />
      </body>
    </html>
  );
}

/**
 * Animated gradient background
 */
function AnimatedBackground({ isDark }: { isDark: boolean }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient mesh background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

/**
 * Floating background blobs for visual interest
 */
function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top-left blob */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [-20, 20, -20],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Top-right blob */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Bottom-left blob */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        animate={{
          x: [-30, 30, -30],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
