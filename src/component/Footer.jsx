import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className=" border-t-2 py-6 mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Optional Logo or Name */}
        <h3 className="text-xl font-semibold mb-2">Md.Mahadi Hasan</h3>

        {/* Optional Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4 text-sm">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#educational" className="hover:underline">Educational</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-xs">&copy; {new Date().getFullYear()} Designed and Developed by Md.Mahadi Hasan</p>
      </div>
    </motion.footer>
  );
};

export default Footer;