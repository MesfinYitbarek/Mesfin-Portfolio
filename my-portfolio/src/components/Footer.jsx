import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold">Mesfin Yitbarek</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex space-x-4"
          >
            {[
              { Icon: FaGithub, href: 'https://github.com/MesfinYitbarek', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://et.linkedin.com/in/mesfin-yitbarek-739550287', label: 'LinkedIn' },
              { Icon: FaXTwitter, href: 'https://x.com/MesfinYitb65337?t=U5nJQy6l3063eJS-wmKjjg&s=35', label: 'Twitter' },
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} Mesfin Yitbarek. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;