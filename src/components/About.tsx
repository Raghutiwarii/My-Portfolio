/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface AboutProps {
  inView: boolean;
}

export default function About({ inView }: AboutProps) {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  type Stat = { value: number; label: string; suffix?: string };
  const stats: Stat[] = [
    // { value: 1, label: "Years Experience", suffix: "+" },
    // { value: 20, label: "Projects Completed", suffix: "+" },
    // { value: 15, label: "Happy Clients", suffix: "+" },
    // { value: 99, label: "Satisfaction Rate", suffix: "%" },
  ];

  useEffect(() => {
    if (inView) {
      stats &&
        stats.length > 0 &&
        stats.forEach((stat, index) => {
          const counterRef = counterRefs.current[index];
          if (counterRef) {
            let startValue = 0;
            const endValue = stat.value;
            const duration = 2000;
            const step = Math.floor(duration / endValue);

            const counter = setInterval(() => {
              startValue += 1;
              counterRef.textContent = startValue + (stat.suffix || "");

              if (startValue === endValue) {
                clearInterval(counter);
              }
            }, step);
          }
        });
    }
  }, [inView]);

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-8"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
            <div className="w-full h-[400px] bg-gradient-to-br from-purple-400 to-blue-500 dark:from-purple-500 dark:to-blue-600 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-500 dark:border-blue-400 rounded-lg z-0"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            I am a Software Engineer with 1.5 years of professional experience,
            currently working at TodayPay, a US-based fintech company. My work
            spans the full stack, with a strong focus on building scalable,
            high-performance web and mobile applications.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            On the frontend, I specialize in React.js, Next.js, and React
            Native, where I focus on creating clean, responsive, and
            user-centric interfaces with a strong emphasis on performance and
            maintainability. I follow modern development practices such as
            component-based architecture, reusable design systems, and optimized
            rendering strategies for smooth user experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            On the backend, I work extensively with Golang, leveraging
            frameworks like Gin, Gorm, and gRPC to develop scalable APIs and
            microservices. My experience includes optimizing database
            performance with PostgreSQL, designing efficient data models, and
            ensuring reliable system communication across services.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            I’ve been actively involved in building and scaling real-time
            payment systems, contributing to key product features and
            performance enhancements. My role also includes integrating
            third-party banking and financial APIs such as Tink and GrailPay,
            supporting secure and seamless transactions.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            In the area of communications and analytics, I have implemented
            solutions using providers like Postmark, Amazon SES, and SendGrid
            for transactional emails. Additionally, I’ve integrated tools like
            RudderStack SDK for real-time event tracking and Sardine SDK for
            device intelligence and fraud detection.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            I am also proficient in JavaScript, TypeScript, and Node.js, and
            bring a solid foundation in Data Structures and Algorithms to
            everything I build—ensuring my solutions are both efficient and
            scalable. I am driven by a passion for clean architecture,
            performance optimization, and continuous learning, with a focus on
            delivering impactful and user-focused software products.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                <span
                  ref={el => { counterRefs.current[index] = el; }}
                  className="block text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  0{stat.suffix}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="https://drive.google.com/file/d/1tF_y673tgm-ZBdyckqZlcBF86TsBVw7G/view?usp=sharing"
            download
            className="btn px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            Download Resume
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

      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[
          {
            title: "Web Development",
            description:
              "Creating responsive and dynamic websites using the latest technologies and frameworks.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            ),
          },
          {
            title: "Backend Development",
            description:
              "Building robust, scalable server-side applications with optimized APIs, secure integrations, and high-performance databases.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600 dark:text-green-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"
                />
              </svg>
            ),
          },
          {
            title: "Mobile Development",
            description:
              "Building cross-platform mobile applications that work seamlessly on all devices.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            ),
          },
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] text-center"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
