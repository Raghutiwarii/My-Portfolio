"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Skills() {
  // Use our own intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Bootstrap",
    "Tailwind CSS",
    "React Native",
  ];

  const backendSkills = [
    "Go Lang",
    "GORM",
    "postgresql",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "REST API",
    "Firebase",
  ];

  const devOpsTools = [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "CI/CD",
  ];

  return (
    <div ref={ref} className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Technical Expertise
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          With expertise across multiple domains, I bring a comprehensive skill
          set to tackle complex projects and deliver exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <span className="text-primary-500 text-2xl mr-3">🖥️</span>
            <h3 className="text-xl font-bold">Frontend Development</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <span className="text-primary-500 text-2xl mr-3">⚙️</span>
            <h3 className="text-xl font-bold">Backend Development</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* DevOps Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <span className="text-primary-500 text-2xl mr-3">🛠️</span>
            <h3 className="text-xl font-bold">DevOps & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {devOpsTools.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}