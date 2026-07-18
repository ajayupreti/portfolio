'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { containerVariants, itemVariants } from '@/lib/animations';
import { portfolioData } from '@/constants/portfolio-data';

/**
 * Performance section highlighting expertise in web optimization
 */
export default function Performance() {
  return (
    <section
      id="performance"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="SPECIALIZATION"
          title="Performance Engineering"
          description="Expertise in optimizing web vitals and creating lightning-fast experiences"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {portfolioData.performanceHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              variants={itemVariants}
            >
              <Card className="p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {highlight.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-text-dark/70 mb-6 flex-1">
                  {highlight.description}
                </p>

                {/* Metric */}
                {highlight.metric && (
                  <motion.div
                    className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-text-dark/60 mb-1">
                      {highlight.metric.label}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary-400">
                        {highlight.metric.value}
                      </span>
                      <span className="text-sm text-success">
                        {highlight.metric.improvement}
                      </span>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            { label: 'Lighthouse Score', value: '98', unit: '/100' },
            { label: 'Core Web Vitals', value: 'Good', unit: 'Status' },
            { label: 'Load Time', value: '1.2', unit: 's' },
            { label: 'Bundle Size', value: '45', unit: '% Reduction' },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="p-6 text-center">
                <motion.div
                  className="text-3xl font-bold text-primary-400 mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-xs text-text-dark/60 mb-2">{stat.unit}</p>
                <p className="text-sm font-medium text-text-dark">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
