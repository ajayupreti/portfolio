/**
 * Core type definitions for the portfolio
 */

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'cloud' | 'performance' | 'ai-tools';
  proficiency?: number;
}

export interface SkillCategory {
  id: 'frontend' | 'backend' | 'cloud' | 'performance' | 'ai-tools';
  name: string;
  description: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  startDate: string;
  endDate?: string;
  isCurrentRole: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  category: 'performance' | 'frontend' | 'fullstack' | 'ai';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
  category: 'certification' | 'award' | 'publication' | 'speaking';
}

export interface PerformanceHighlight {
  id: string;
  title: string;
  description: string;
  metric?: {
    label: string;
    value: string;
    improvement: string;
  };
  icon: string;
}

export interface EducationItem {
  id: string;
  schoolName: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface Portfolio {
  name: string;
  title: string;
  tagline: string;
  description: string;
  avatarUrl?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  achievements: Achievement[];
  performanceHighlights: PerformanceHighlight[];
  education: EducationItem[];
  contactEmail: string;
  contactPhone?: string;
}
