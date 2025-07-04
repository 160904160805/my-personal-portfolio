import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    title: "Car Price Prediction Web App",
    description: "Car Price Prediction using Lasso Regression — A machine learning model that predicts used car prices by applying L1 regularization for feature selection and improved accuracy.",
    tech: ["Python", "Machine Learning", "Lasso Regression"],
    link: "https://github.com/160904160805/ML_Lasso_Project_Car_Price_Prediction"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    link: "https://yourportfolio.vercel.app/"
  },
  {
    title: "Food Delivery Time Prediction",
    description: "Food Delivery Time Prediction — A deep learning model using LSTM and the Haversine formula to predict delivery time based on customer age, delivery distance, and delivery person-ratings.",
    tech: ["Haversine Formula", "TensorFlow/Keras", "Python","LSTM"],
    link: "https://github.com/160904160805/Food-Delivery-Time-Prediction/tree/main"
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-32 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Neatly aligned heading */}
      <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
        <FaLaptopCode className="text-indigo-500" />
        <span className="text-black dark:text-white">My</span>
        <span className="text-purple-600">Projects</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-indigo-100 dark:border-indigo-700 flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-3">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-600 text-indigo-800 dark:text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm font-semibold text-indigo-500 group-hover:underline"
            >
              View Project ↗
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
