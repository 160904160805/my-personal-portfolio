import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const education = [
  {
    institution: "Sagi Rama Krishnam Raju Engineering College, Bhimavaram",
    degree: "B.Tech in Information Technology",
    period: "2023 - 2026",
    description: "CGPA: 8.36 up to 6th Semester | Relevant Coursework: Data Structures, Web Development, Networking"
  },
  {
    institution: "A.A.N.M & V.V.R.S.R Polytechnic College, Gudlavalleru",
    degree: "Diploma in Computer Engineering",
    period: "2020 - 2023",
    description: "Percentage: 93% | Class Representative"
  },
  {
    institution: "Govt High School, Seethanagaram",
    degree: "VIII - X",
    period: "2017 - 2020",
    description: "Grade: 9.8 / 10"
  }
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="min-h-screen py-32 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-2">
        <FaGraduationCap className="text-indigo-500" />
        <span className="text-black dark:text-white">My</span>
        <span className="text-purple-600">Education</span>
      </h2>

      {/* Horizontal Timeline */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full gap-10">

        {/* Horizontal Line */}
        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-1 bg-indigo-300 dark:bg-indigo-600"></div>

        {education.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full md:w-1/3 border border-indigo-100 dark:border-indigo-700 text-center hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-5 w-5 h-5 bg-purple-600 border-4 border-white dark:border-gray-800 rounded-full shadow-lg"></div>

            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
              {item.institution}
            </h3>
            <span className="block text-sm text-gray-500 dark:text-gray-400 mb-2">{item.period}</span>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">{item.degree}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
          </motion.div>
        ))}

      </div>
    </motion.section>
  );
};

export default Education;
