'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { containerVariants, itemVariants } from '@/lib/animations';
import { portfolioData } from '@/constants/portfolio-data';

/**
 * About section with introduction and highlights
 */
export default function About() {
  const highlights = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Performance Score', value: '98' },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="GET TO KNOW ME"
          title="About Me"
          description="Learn more about my journey and what drives my passion for frontend engineering"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-text-dark/80 leading-relaxed">
              I'm a passionate frontend engineer with over 7 years of experience building performant,
              scalable web applications. My journey in tech started with a curiosity about how websites
              work, and it has evolved into a deep expertise in modern frontend frameworks.
            </p>

            <p className="text-lg text-text-dark/80 leading-relaxed">
              My specialization spans React and Next.js, with a strong focus on performance
              optimization, accessibility, and creating exceptional user experiences. I'm particularly
              interested in Core Web Vitals, bundle optimization, and building architecture that scales.
            </p>

            <p className="text-lg text-text-dark/80 leading-relaxed">
              Beyond coding, I love sharing knowledge with the community through technical writing,
              open-source contributions, and mentoring junior developers. I'm always exploring new
              technologies and best practices to stay at the forefront of frontend development.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {['React', 'Next.js', 'TypeScript', 'Performance', 'Architecture'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary-500/10 border border-primary-500/20 text-primary-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={itemVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <motion.div
                    className="text-4xl font-bold text-primary-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {highlight.value}
                  </motion.div>
                  <p className="text-text-dark/60 text-sm font-medium">{highlight.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
