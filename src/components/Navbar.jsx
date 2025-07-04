import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const links = ['about', 'projects', 'skills', 'resume', 'education', 'certificates', 'contact'];

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLinkClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-4 inset-x-4 md:inset-x-10 mx-auto max-w-7xl bg-white/50 dark:bg-black/50 backdrop-blur-md border border-white/20 dark:border-gray-700 rounded-full shadow-lg z-50 transition-all"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Animated Logo with Typewriter */}
        <motion.a
          href="#hero"
          onClick={() => setActive('hero')}
          className="font-extrabold text-lg md:text-xl text-indigo-600 dark:text-indigo-400 tracking-widest cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 0.8, 
            ease: 'easeOut',
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.15 }}
        >
          <Typewriter
            words={['R G V']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={() => setActive(item)}
              className={`cursor-pointer text-sm font-semibold relative group ${
                active === item ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-purple-600 rounded-full group-hover:w-full transition-all duration-300 ${
                  active === item ? 'w-full' : 'w-0'
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-700" />}
          </button>

          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 px-6 py-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-800 dark:text-white">
                <FaTimes />
              </button>
            </div>

            <nav className="flex flex-col gap-5 mt-8">
              {links.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => handleLinkClick(item)}
                  className={`text-lg font-semibold text-center py-2 rounded-full transition ${
                    active === item
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
