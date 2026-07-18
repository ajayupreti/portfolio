'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollToTop } from '@/hooks';
import { FiArrowUp } from 'react-icons/fi';

/**
 * Floating scroll-to-top button component
 */
export default function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-glow z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
