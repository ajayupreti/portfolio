/**
 * Zustand store for portfolio theme and UI state
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PortfolioStore {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
  
  // Navigation state
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  // Mobile menu state
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  
  // Scroll position
  scrollY: number;
  setScrollY: (y: number) => void;
}

export const usePortfolioStore = create<PortfolioStore>(
  persist(
    (set) => ({
      isDark: true,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setTheme: (dark: boolean) => set({ isDark: dark }),
      
      activeSection: 'home',
      setActiveSection: (section: string) => set({ activeSection: section }),
      
      mobileMenuOpen: false,
      setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),
      
      scrollY: 0,
      setScrollY: (y: number) => set({ scrollY: y }),
    }),
    {
      name: 'portfolio-store',
      version: 1,
    }
  )
);
