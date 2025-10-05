import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen py-32 px-4 max-w-5xl mx-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading with Icon & Colors */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center flex items-center gap-2 justify-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaUser className="text-indigo-500" />
        <span className="text-black dark:text-white">About</span>
        <span className="text-purple-600">Me</span>
      </motion.h2>

      {/* Card Layout */}
      <motion.div
        className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center">
  I'm an enthusiastic <span className="font-semibold text-blue-500">Full-Stack Software Developer</span> passionate about building scalable, high-performance applications. 
  I love turning ideas into sleek, interactive digital experiences that blend functionality with creativity.
</p>

<p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-center">
  I’m constantly exploring new technologies, improving my skills, and staying current with modern stacks like 
  <span className="font-semibold text-blue-400"> React, Node.js, MongoDB, and Express</span> — always aiming to craft reliable, efficient, and secure web solutions.
</p>


        {/* Email */}
        <div className="text-center mb-8">
          <p className="text-md text-gray-800 dark:text-gray-200">
            Let&apos;s connect →{' '}
            <a
              href="mailto:gowrivinayrongala@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              gowrivinayrongala@gmail.com
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-10">
          <motion.a
            href="https://github.com/160904160805"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#6366F1' }}
            className="flex flex-col items-center transition text-gray-700 dark:text-gray-300"
          >
            <FaGithub className="text-3xl" />
            <span className="mt-1 text-sm">GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/gowri-vinay-rongala-878680360/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#6366F1' }}
            className="flex flex-col items-center transition text-gray-700 dark:text-gray-300"
          >
            <FaLinkedin className="text-3xl" />
            <span className="mt-1 text-sm">LinkedIn</span>
          </motion.a>

          <motion.a
            href="mailto:gowrivinayrongala@gmail.com"
            whileHover={{ scale: 1.2, color: '#6366F1' }}
            className="flex flex-col items-center transition text-gray-700 dark:text-gray-300"
          >
            <FaEnvelope className="text-3xl" />
            <span className="mt-1 text-sm">Email</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
