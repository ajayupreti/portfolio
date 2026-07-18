'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { containerVariants, itemVariants } from '@/lib/animations';
import { portfolioData } from '@/constants/portfolio-data';
import { calculateDuration, formatDate } from '@/lib/utils';

/**
 * Experience section with timeline of work history
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          subtitle="MY JOURNEY"
          title="Work Experience"
          description="A timeline of my professional career and achievements"
        />

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              <Card className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-text-dark">{exp.role}</h3>
                      {exp.isCurrentRole && (
                        <Badge variant="primary">Current</Badge>
                      )}
                    </div>
                    <p className="text-lg text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-text-dark/60 whitespace-nowrap">
                    <p className="font-medium">{formatDate(exp.startDate)}</p>
                    <p>{exp.endDate ? formatDate(exp.endDate) : 'Present'}</p>
                    <p className="text-primary-400 mt-1">
                      {calculateDuration(exp.startDate, exp.endDate)}
                    </p>
                  </div>
                </div>

                <p className="text-text-dark/80 mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-dark mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-text-dark/70"
                      >
                        <span className="text-primary-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-text-dark mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
