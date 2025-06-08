'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProjectsProps {
  inView: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function Projects({ inView }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const categories = ['all', 'web', 'mobile', 'design', 'branding'];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: '#1',
      category: ['web'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://project1.example.com',
      githubUrl: 'https://github.com/username/project1',
    },
    {
      id: 2,
      title: 'Travel App',
      description: 'A mobile application for travel enthusiasts to discover and plan their next adventure.',
      image: '#2',
      category: ['mobile'],
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      liveUrl: 'https://project2.example.com',
      githubUrl: 'https://github.com/username/project2',
    },
    {
      id: 3,
      title: 'Corporate Brand Identity',
      description: 'Complete brand identity design for a technology startup, including logo, colors, and brand guidelines.',
      image: '#3',
      category: ['design', 'branding'],
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      liveUrl: 'https://project3.example.com',
      githubUrl: 'https://github.com/username/project3',
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      description: 'A comprehensive task management system with real-time updates and team collaboration features.',
      image: '#4',
      category: ['web'],
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
      liveUrl: 'https://project4.example.com',
      githubUrl: 'https://github.com/username/project4',
    },
    {
      id: 5,
      title: 'Health & Fitness App',
      description: 'A mobile application for tracking fitness goals, nutrition, and daily health metrics.',
      image: '#5',
      category: ['mobile'],
      technologies: ['Flutter', 'Firebase', 'HealthKit'],
      liveUrl: 'https://project5.example.com',
      githubUrl: 'https://github.com/username/project5',
    },
    {
      id: 6,
      title: 'Restaurant Website',
      description: 'A responsive website for a local restaurant with online ordering and reservation system.',
      image: '#6',
      category: ['web', 'design'],
      technologies: ['React', 'GSAP', 'Sanity.io'],
      liveUrl: 'https://project6.example.com',
      githubUrl: 'https://github.com/username/project6',
    },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));
  
  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-8"></div>
        <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was carefully crafted with attention to detail and focus on user experience.
        </p>
      </motion.div>
      
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full capitalize transition-colors ${
              activeFilter === category
                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <div className="text-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{project.title}</span>
                  </div>
                </div>
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300"
                  style={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300"
                  style={{
                    transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                >
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      Live Preview
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full text-sm hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">No projects found in this category</p>
        </motion.div>
      )}
      
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a 
          href="https://github.com/Raghutiwarii" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn px-6 py-3 rounded-md bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg"
        >
          View More Projects on GitHub
        </a>
      </motion.div>
    </div>
  );
}