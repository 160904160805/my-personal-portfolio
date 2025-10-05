import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('assets/boy.jpg')`,
      }}
    >
      {/* Cyber Navy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a33]/70 via-[#000018]/80 to-black/90" />

      <motion.div
        className="relative z-10 backdrop-blur-md border border-blue-500/30 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_40px_rgba(0,0,255,0.3)] max-w-3xl mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hey, I'm <span className="text-cyan-400">Gowri Vinay Rongala</span>
        </motion.h1>

        <div className="w-28 h-1.5 bg-cyan-400 mx-auto mb-6 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)]" />

        <motion.p
          className="text-lg md:text-2xl font-medium text-gray-200 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          💻 Aspiring <span className="text-cyan-300 font-semibold">Software Developer</span> &{' '}
          <span className="text-indigo-400 font-semibold">Tech Enthusiast</span>
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Passionate about building intelligent systems, automating workflows, 
          and exploring network security to craft smarter tech solutions.
        </motion.p>
      </motion.div>

      {/* Animated Scroll Arrow */}
      <motion.div
        className="absolute bottom-10 text-cyan-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <FaArrowDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
