"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceProps {
  inView: boolean;
}

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  skills: string[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export default function Experience({ inView }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState("work");

  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      company: "TodayPay Inc.",
      position: "SDE Intern",
      period: "Dec 2023 - May 2024",
      description: [
        "Contributed to the development of a scalable fintech platform, working across the frontend (React, Next.js) and backend (Go, PostgreSQL, gRPC).",
        "Created scalable, responsive web portals with clean UI and optimized rendering strategies.",
        "Wrote scalable and maintainable test cases for backend microservices, improving system reliability and coverage.",
        "Quickly adapted to new technologies and frameworks as needed to meet evolving product requirements.",
      ],
      skills: ["React", "Javascript", "TypeScript", "Go Lang", "Git"],
    },
    {
      id: 2,
      company: "TodayPay Inc.",
      position: "SDE",
      period: "May 2024 - Present",
      description: [
        "Leading a team of developers in designing and maintaining scalable, high-performance fintech web applications using React and Next.js.",
        "Architecting and implementing CI/CD pipelines, streamlining deployment processes and reducing release times significantly.",
        "Optimizing application performance and backend services, achieving substantial improvements in load times and resource utilization.",
        "Collaborating closely with UX/UI designers to deliver pixel-perfect, responsive user interfaces that enhance user engagement.",
        "Driving adoption of best practices in microservices architecture, containerization (Docker, Kubernetes), and cloud infrastructure (AWS) to support scalable solutions.",
        "Building and maintaining robust backend APIs using Go Lang, Gin Framework, gRPC, and PostgreSQL for secure and efficient data management.",
        "Contributing to system reliability and scalability through effective use of monitoring, testing, and automation.",
      ],
      skills: [
        "React",
        "Next.JS",
        "Javascript",
        "TypeScript",
        "React Native",
        "Go Lang",
        "Gin Framework",
        "GRPC",
        "postgreSQL",
        "Docker",
        "Kubernetes",
        "Microservices",
        "AWS",
        "Git",
      ],
    },
  ];

  const educations: Education[] = [
    {
      id: 1,
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science",
      period: "2020 - 2024",
      description:
        "Focused on core computer science principles with an emphasis on web technologies, system design, and modern UI/UX practices. Completed multiple industry-oriented projects and graduated with distinction.",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My professional journey and educational background that have shaped my
          expertise.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "work"
                ? "bg-white dark:bg-gray-700 shadow-md"
                : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "education"
                ? "bg-white dark:bg-gray-700 shadow-md"
                : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50"
            }`}
          >
            Education
          </button>
        </div>
      </motion.div>

      {activeTab === "work" ? (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Work experiences */}
          <div className="space-y-12">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
              >
                {/* Timeline bullet */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900" />

                {/* Date - Left side on desktop, top on mobile */}
                <div
                  className={`md:text-right ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:mr-8 md:ml-0 ml-8">
                    <h3 className="text-xl font-bold mb-1">
                      {experience.company}
                    </h3>
                    <h4 className="text-primary-500 font-medium mb-3">
                      {experience.position}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {experience.period}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content - Right side on desktop, bottom on mobile */}
                <div
                  className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:ml-8 md:mr-0 ml-8">
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Education */}
          <div className="space-y-12">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
              >
                {/* Timeline bullet */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-secondary-500 border-4 border-white dark:border-gray-900" />

                {/* Date - Left side on desktop, top on mobile */}
                <div
                  className={`md:text-right ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:mr-8 md:ml-0 ml-8">
                    <h3 className="text-xl font-bold mb-1">
                      {education.institution}
                    </h3>
                    <h4 className="text-secondary-500 font-medium mb-3">
                      {education.degree}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {education.period}
                    </p>
                  </div>
                </div>

                {/* Content - Right side on desktop, bottom on mobile */}
                <div
                  className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:ml-8 md:mr-0 ml-8">
                    <p className="text-gray-600 dark:text-gray-300">
                      {education.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="https://drive.google.com/file/d/1tF_y673tgm-ZBdyckqZlcBF86TsBVw7G/view?usp=sharing"
          download
          className="btn px-6 py-3 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors inline-flex items-center"
        >
          Download Full Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
