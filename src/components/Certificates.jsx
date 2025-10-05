import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Cisco - Network Addressing and Basic Troubleshooting",
    url: "https://drive.google.com/file/d/18_k-Gt3ygkjvGDTm0vdxiOuhlWEvSf_f/view?usp=drive_link",
    image: "assets/NABT.jpg"
  },
  {
    title: "Python Essentials - Cisco",
    url: "https://drive.google.com/file/d/1NFGfIJPGZ9vTryEN2zWcsekDw4vxrvoL/view?usp=drive_link",
    image: "assets/SRWE.jpg"
  },
  {
    title: "CCNA - Introduction To Networks",
    url: "https://drive.google.com/file/d/198kiNDsmkVwCiVfSiWzOsliFU69gGROF/view?usp=drive_link",
    image: "assets/CCNA.jpg"
  },
  {
    title: "JavaScript For Beginers - Simplilearn",
    url: "https://drive.google.com/file/d/1TixVg-fCK6pBmvXKhk4QqgM0ObQ2wn3I/view?usp=drive_link",
    image: "assets/SRWE.jpg"
  }
];

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      className="h-screen py-32 px-4 max-w-6xl mx-auto flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Two-Color Heading Perfectly Aligned */}
      <h2 className="text-4xl font-bold mb-10 flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="flex items-center text-black dark:text-white">
          <FaCertificate className="mr-2 text-indigo-500 dark:text-indigo-400" />
          My
        </span>
        <span className="text-purple-600">Certifications</span>
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="w-72 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline text-sm"
            >
              View Certificate ↗
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates;
