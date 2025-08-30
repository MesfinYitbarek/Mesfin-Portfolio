import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';


const Hero = () => {
  const particleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  const techIcons = [FaReact, FaNodeJs, SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, FaDatabase, FaCode];

  return (
    <section id="home" className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-16 sm:pl-10 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 sm:w-[60%] top-[500px]  sm:top-10 sm:left-[600px] ">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-200 opacity-10"
            style={{
              fontSize: Math.random() * 30 + 10 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: Math.random() * 2,
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            {React.createElement(techIcons[i % techIcons.length])}
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left   bg-opacity-100 p-8 rounded-lg"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow-lg font-lato"
          >
            Mesfin Yitbarek
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            className="text-xl md:text-2xl mb-6 text-blue-100 font-lato"
          >
            Software Engineer | Passionate about Full-Stack Development, 5G, Cloud, AI, and Big Data
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg mb-8 text-blue-200"
          >
            Motivated and results-driven software engineer with top academic performance (3.92 GPA), certified through Huawei’s Seeds for the Future program. Experienced in full-stack development, Agile practices, and working with Product Owners and Scrum Masters to deliver impactful solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-4 justify-center md:justify-start"
          >
            <motion.a
              href="#contact"
              className="bg-white text-indigo-900 px-6 py-2 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300 shadow-lg inline-block"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-white text-white px-6 py-2 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-900 transition duration-300 shadow-lg inline-block"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative inline-block mb-8"
          >
            <img
              src="/20231010_114912.jpg"
              alt="Mesfin Yitbarek"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(255,255,255,0.4)',
                  '0 0 0 20px rgba(255,255,255,0)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center opacity-10 space-x-6"
          >
            <SocialIcon href="https://github.com/MesfinYitbarek" icon={FaGithub}  />
            <SocialIcon href="https://et.linkedin.com/in/mesfin-yitbarek" icon={FaLinkedin} />           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-300 bg-white bg-opacity-20 p-3 rounded-full"
    whileHover={{ scale: 1.2, rotate: 360, backgroundColor: 'rgba(255,255,255,0.3)' }}
    whileTap={{ scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <Icon size={24} />
  </motion.a>
);

export default Hero;