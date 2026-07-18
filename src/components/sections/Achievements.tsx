'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { containerVariants, itemVariants } from '@/lib/animations';
import { portfolioData } from '@/constants/portfolio-data';
import { formatDate } from '@/lib/utils';

/**
 * Achievements section showcasing certifications, awards, and publications
 */
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          subtitle="RECOGNITION"
          title="Achievements & Certifications"
          description="Awards, certifications, and milestones in my career"
        />

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div key={achievement.id} variants={itemVariants}>
              <Card className="p-6 md:p-8 flex gap-6 items-start">
                {/* Icon */}
                <motion.div
                  className="text-4xl flex-shrink-0 mt-1"
                  whileHover={{ rotate: 20, scale: 1.2 }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-text-dark">
                      {achievement.title}
                    </h3>
                    <Badge
                      variant={achievement.category === 'award' ? 'primary' : 'secondary'}
                    >
                      {achievement.category}
                    </Badge>
                  </div>
                  <p className="text-text-dark/70 mb-2">{achievement.description}</p>
                  <p className="text-sm text-text-dark/50">
                    {formatDate(achievement.date)}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-text-dark mb-8">Education</h3>
          <div className="space-y-6">
            {portfolioData.education.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants}>
                <Card className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-text-dark">{edu.degree}</h4>
                      <p className="text-primary-400 font-medium">{edu.schoolName}</p>
                      <p className="text-text-dark/70 text-sm">{edu.field}</p>
                    </div>
                    <div className="text-sm text-text-dark/60 text-right">
                      <p>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </p>
                      {edu.gpa && <p className="text-primary-400 font-medium">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-text-dark/70 mt-4">{edu.description}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
