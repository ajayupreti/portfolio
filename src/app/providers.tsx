'use client';

import React, { useEffect } from 'react';
import { usePortfolioStore } from '@/store/portfolio';

/**
 * Providers wrapper for all context providers
 * Ensures client-side only initialization
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const { setTheme } = usePortfolioStore();

  useEffect(() => {
    // Check for system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setTheme(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  return <>{children}</>;
}
