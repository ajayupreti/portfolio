'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCommand, FiX } from 'react-icons/fi';
import { NAV_SECTIONS } from '@/constants';
import { scrollToElement } from '@/lib/utils';

/**
 * Command palette for quick navigation
 */
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Open command palette with Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const filteredSections = NAV_SECTIONS.filter((section) =>
    section.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Command Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-text-dark/70 hover:text-text-dark transition-colors z-40 text-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open command palette"
      >
        <FiCommand size={18} />
        <span className="hidden sm:inline">Cmd + K</span>
      </motion.button>

      {/* Command Palette Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            {/* Palette Content */}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-dark-800 rounded-lg border border-dark-700 shadow-xl overflow-hidden">
                {/* Search Input */}
                <div className="p-4 border-b border-dark-700">
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-transparent text-text-dark placeholder-text-dark/50 focus:outline-none text-lg"
                  />
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredSections.length > 0 ? (
                    <div className="py-2">
                      {filteredSections.map((section, index) => (
                        <motion.button
                          key={section.id}
                          onClick={() => handleSelect(section.id)}
                          className="w-full px-4 py-3 text-left text-text-dark hover:bg-dark-700 transition-colors flex items-center justify-between"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <span>{section.label}</span>
                          <span className="text-xs text-text-dark/50">{section.id}</span>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-text-dark/50">
                      No sections found
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-dark-700 flex items-center justify-between text-xs text-text-dark/50">
                  <div className="flex gap-2">
                    <kbd className="px-2 py-1 rounded bg-dark-700">↑↓</kbd>
                    <span>Navigate</span>
                  </div>
                  <div className="flex gap-2">
                    <kbd className="px-2 py-1 rounded bg-dark-700">ESC</kbd>
                    <span>Close</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
