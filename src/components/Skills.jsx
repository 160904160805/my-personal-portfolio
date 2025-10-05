import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaPaintBrush, FaLanguage, FaNetworkWired, FaCogs, FaCubes } from 'react-icons/fa';

const categories = [
  {
    title: 'Frontend',
    icon: <FaPaintBrush className="text-indigo-500 dark:text-indigo-400" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React(basic)', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: <FaDatabase className="text-indigo-500 dark:text-indigo-400" />,
    skills: [ 'MongoDB', 'MySQL']
  },
  {
    title: 'Dev Tools',
    icon: <FaTools className="text-indigo-500 dark:text-indigo-400" />,
    skills: ['Git', 'GitHub', 'VS Code']
  },
  {
    title: 'Languages',
    icon: <FaCode className="text-indigo-500 dark:text-indigo-400" />,
    skills: ['Python', 'Java', 'JavaScript']
  },
  {
    title: 'Networking',
    icon: <FaNetworkWired className="text-indigo-500 dark:text-indigo-400" />,
    skills: ['CCNA', 'Switching & Routing', 'Subnetting']
  },
  {
    title: 'CS Fundamentals',
    icon: <FaCogs className="text-indigo-500 dark:text-indigo-400" />,
    skills: ['Data Structures', 'OOPS', 'DBMS', 'OS']
  },
  {
    title: 'Frameworks',
    icon: <FaCubes className="text-indigo-500 dark:text-indigo-400" />,
    skills: ['Bootstrap','Numpy','Pandas']
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen py-32 px-4 max-w-6xl mx-auto flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading with Icon */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center flex items-center gap-2 justify-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaTools className="text-indigo-500 dark:text-indigo-400 text-3xl" />
        <span className="text-black dark:text-white">My</span>
        <span className="text-purple-600">Skills</span>
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-indigo-100 dark:bg-indigo-600 text-indigo-800 dark:text-white shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
