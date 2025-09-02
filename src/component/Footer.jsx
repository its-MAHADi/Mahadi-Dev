import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="border-t py-6 mt-16"
    >
      <div className="text-center flex flex-col items-center space-y-4">
        {/* Name or Logo */}
        <h3 className="text-lg md:text-xl font-semibold">Md. Mahadi Hasan</h3>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base">
            <li><a href="#hero" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="#educational" className="hover:text-blue-600 transition-colors">Educational</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Designed & Developed by <span className="font-medium">Md. Mahadi Hasan</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
