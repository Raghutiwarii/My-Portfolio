'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [skillsRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <main className="relative overflow-hidden">
      <Header scrollY={scrollY} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="home" ref={heroRef}>
          <Hero inView={heroInView} />
        </section>
        
        <section id="about" className="section-padding" ref={aboutRef}>
          <About inView={aboutInView} />
        </section>
        
        <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900" ref={skillsRef}>
          <Skills />
        </section>
        
        {/* <section id="projects" className="section-padding" ref={projectsRef}>
          <Projects inView={projectsInView} />
        </section> */}
        
        <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900" ref={experienceRef}>
          <Experience inView={experienceInView} />
        </section>
        
        <section id="contact" className="section-padding" ref={contactRef}>
          <Contact inView={contactInView} />
        </section>
        
        <Footer />
      </motion.div>
      
      <div className="fixed bottom-8 left-8 z-40 hidden md:flex flex-col gap-4">
        {[
          { icon: <FaGithub size={20} />, href: 'https://github.com/yourusername' },
          { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/yourusername' },
          { icon: <FaTwitter size={20} />, href: 'https://twitter.com/yourusername' },
          { icon: <FaEnvelope size={20} />, href: 'mailto:tiwariraghu705@gmail.com' },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
        <motion.div
          className="h-24 w-0.5 bg-gray-300 dark:bg-gray-700 mx-auto mt-2"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </div>
      
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <motion.a
          href="#home"
          className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY > 300 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.a>
      </div>
    </main>
  );
}