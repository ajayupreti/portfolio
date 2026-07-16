/**
 * Custom React hooks for portfolio
 */

import { useEffect, useState, useCallback } from 'react';
import { usePortfolioStore } from '@/store/portfolio';
import { throttle, prefersReducedMotion } from '@/lib/utils';

/**
 * Hook to track scroll position and update active section
 */
export function useScrollSection() {
  const { setScrollY, setActiveSection } = usePortfolioStore();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      if (typeof window === 'undefined') return;
      
      const scrollY = window.scrollY;
      setScrollY(scrollY);
      setIsScrolling(true);
      
      // Determine active section based on scroll position
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'performance',
        'achievements',
        'contact',
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 100),
    [setScrollY, setActiveSection]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isScrolling;
}

/**
 * Hook to detect if an element is in viewport
 */
export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, options]);

  return { isInView, ref: setElement };
}

/**
 * Hook for theme management
 */
export function useTheme() {
  const { isDark, toggleTheme, setTheme } = usePortfolioStore();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return { isDark, toggleTheme, setTheme };
}

/**
 * Hook for mobile detection
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth < 768);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

/**
 * Hook to check if animations should be reduced
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(prefersReducedMotion());
  }, []);

  return prefersReduced;
}

/**
 * Hook for scroll to top functionality
 */
export function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = usePortfolioStore();

  useEffect(() => {
    setIsVisible(scrollY > 300);
  }, [scrollY]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { isVisible, scrollToTop };
}
