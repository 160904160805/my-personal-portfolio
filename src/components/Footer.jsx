import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/160904160805', label: 'GitHub' },
  { icon: <FaEnvelope />, href: 'mailto:gowrivinayrongala@example.com', label: 'Email' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/gowri-vinay-rongala-878680360/', label: 'LinkedIn' },
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/Vinnu.4236', label: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/v.n.a.y_r.o_4236/', label: 'Instagram' },
  { icon: <FaXTwitter />, href: 'https://x.com/vinayro5236', label: 'Twitter' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      className="py-10 px-6 text-center bg-white/10 dark:bg-black/10 backdrop-blur-md border-t border-white/20 dark:border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-5 mb-8">
        {socialLinks.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
            className="text-lg p-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all shadow-sm"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="h-0.5 w-40 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6"></div>

      {/* Copyright */}
      <motion.p
        className="text-sm text-gray-600 dark:text-gray-400 tracking-wide"
        variants={itemVariants}
      >
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800 dark:text-gray-200">Gowri Vinay Rongala</span>. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
