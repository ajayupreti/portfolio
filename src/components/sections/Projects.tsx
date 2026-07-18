'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { containerVariants, itemVariants } from '@/lib/animations';
import { portfolioData } from '@/constants/portfolio-data';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

/**
 * Projects section showcasing featured work
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="MY WORK"
          title="Featured Projects"
          description="Showcase of my most impactful and innovative work"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {portfolioData.projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 bg-dark-800 overflow-hidden group">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-text-dark mb-2">{project.title}</h3>
                  <p className="text-text-dark/70 mb-4 flex-1">{project.shortDescription}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="mb-6 p-4 rounded-lg bg-dark-800">
                      <div className="grid grid-cols-2 gap-4">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-sm text-text-dark/60">{metric.label}</p>
                            <p className="text-lg font-bold text-primary-400">{metric.value}</p>
                            <p className="text-xs text-success">{metric.improvement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        icon={<FiExternalLink />}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        icon={<FiGithub />}
                      >
                        GitHub
                      </Button>
                    )}
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
