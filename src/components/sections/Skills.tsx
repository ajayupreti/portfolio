'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { containerVariants, itemVariants } from '@/lib/animations';
import { portfolioData } from '@/constants/portfolio-data';
import { SKILL_CATEGORIES } from '@/constants';

/**
 * Skills section with categorized skill display
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const activeSkills = portfolioData.skills.find((s) => s.id === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="MY EXPERTISE"
          title="Technical Skills"
          description="A comprehensive overview of technologies and tools I've mastered"
        />

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {portfolioData.skills.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-dark-800 text-text-dark/70 hover:bg-dark-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        {activeSkills && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            key={activeCategory}
          >
            {activeSkills.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
              >
                <SkillBadge
                  name={skill.name}
                  proficiency={skill.proficiency}
                  icon={skill.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Category Description */}
        {activeSkills && (
          <motion.div
            className="mt-12 p-6 rounded-lg bg-primary-500/5 border border-primary-500/20"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-text-dark mb-2">{activeSkills.name}</h3>
            <p className="text-text-dark/70">{activeSkills.description}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
