import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCog, FaProjectDiagram, FaEnvelope, FaCode } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: FaHome, text: 'Home', href: '#home' },
    { icon: FaUser, text: 'About', href: '#about' },
    { icon: FaCog, text: 'Skills', href: '#skills' },
    { icon: FaProjectDiagram, text: 'Projects', href: '#projects' },
    { icon: FaEnvelope, text: 'Contact', href: '#contact' },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        mass: 0.4,
        damping: 8
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="px-10 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 fixed w-full z-10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-white"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaCode className="text-3xl" />
            </motion.div>
            <span className="text-2xl font-bold">Mesfin Y.</span>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white hover:text-yellow-300 flex items-center transition duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                variants={menuItemVariants}
              >
                <item.icon className="mr-2" />
                {item.text}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-full bg-white bg-opacity-20"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden rounded-b-xl"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="block py-3 px-4 text-gray-800 hover:bg-blue-100 transition duration-300"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5, backgroundColor: '#EBF8FF' }}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <item.icon className="inline-block mr-2" />
                {item.text}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;