import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope } from 'react-icons/fa';  // Icon Added

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send('service_vinshaan', 'template_e723qoj', templateParams, 'rzcniBWy4ymCWOd3x')
      .then(() => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        setStatus('Failed to send message.');
      });
  };

  return (
    <motion.section
      id="contact"
      className="py-32 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Left Side: Contact Info */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
          <FaEnvelope className="text-indigo-500 dark:text-indigo-400 text-3xl" />
          <span className="text-black dark:text-white">Contact</span>{' '}
          <span className="text-purple-600">Me</span>
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Let's connect and build something amazing! Whether it's collaboration, a question, or just to say hi — drop me a message anytime.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          📧 Email:{' '}
          <a href="mailto:gowrivinayrongala@gmail.com" className="text-indigo-600">
            gowrivinayrongala@gmail.com
          </a>
        </p>
      </motion.div>

      {/* Right Side: Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-green-600 dark:text-green-400 mt-2">{status}</p>}
      </motion.form>
    </motion.section>
  );
};

export default Contact;
