import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('public\assets\boy.jpg')`,
      }}
    >
      <motion.div
        className="bg-white/20 dark:bg-black/30 backdrop-blur-lg border border-white/30 dark:border-gray-700 rounded-3xl p-10 md:p-16 text-center shadow-xl max-w-3xl mx-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hey, I'm <span className="text-purple-600">Gowri Vinay Rongala</span>
        </motion.h1>

        {/* Increased Divider Line */}
        <div className="w-24 h-1.5 bg-white mx-auto mb-6 rounded-full"></div>

        <motion.p
          className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Aspiring Networking Engineer <span className="text-purple-500">&</span> Cybersecurity Enthusiast
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-white dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Passionate about Exploring Systems, Automation, and Network Security.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-indigo-600 dark:text-indigo-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <FaArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
