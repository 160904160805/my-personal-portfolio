import React from 'react';
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="py-32 px-4 max-w-5xl mx-auto flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading with Icon */}
      <motion.h2
        className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaFileAlt className="text-indigo-600 dark:text-indigo-400 text-3xl" />
        <span className="text-black dark:text-white">My</span>
        <span className="text-purple-600">Resume</span>
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Feel free to view or download my latest resume to learn more about my education, experience, and skills.
      </motion.p>

      <div className="flex flex-wrap gap-6">
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> Download Resume
        </motion.a>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEye /> View Resume
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Resume;
