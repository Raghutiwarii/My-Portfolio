"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

interface HeroProps {
  inView: boolean;
}

export default function Hero({ inView }: HeroProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (inView && textRef.current) {
      const text = textRef.current;
      const letters = text.innerText.split("");

      text.innerHTML = "";
      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.style.opacity = "0";
        span.style.display = letter === " " ? "inline" : "inline-block";
        text.appendChild(span);
      });

      gsap.to(text.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  }, [inView]);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -inset-[10%] opacity-30 dark:opacity-20">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-radial from-blue-400 via-purple-400 to-transparent dark:from-blue-500 dark:via-purple-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              className="inline-block text-blue-600 dark:text-blue-400 font-mono text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, my name is
            </motion.span>

            <h1
              ref={textRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Raghunath Tiwari
            </h1>

            <motion.h2
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I build{" "}
              <span className="text-gradient font-semibold">innovative</span>{" "}
              digital experiences
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-200 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              I'm a Software Engineer specializing in Full Stack (Web + App)
              development and interactive digital experiences. Let's turn your
              ideas into reality.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* <a
                href="#projects"
                className="btn btn-primary px-6 py-3 rounded-md"
              >
                View My Work
              </a> */}
              <a
                href="#contact"
                className="btn btn-outline px-6 py-3 rounded-md border-2 hover:border-blue-500 dark:hover:border-blue-400"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/file.svg"
                alt="Raghunath Tiwari"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Scroll Down
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce text-blue-500 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
