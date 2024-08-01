import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJava, FaPhp } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiRedux, SiTypescript, SiGraphql, SiMysql, SiFirebase } from 'react-icons/si';

const skillCategories = {
  'Frontend': [
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  ],
  'Backend': [
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'PHP', icon: FaPhp, color: '#777BB4' },
  ],
  'Database': [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  ],
  'Other': [
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  useEffect(() => {
    setActiveCategory('Frontend');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-roboto font-extrabold text-center mb-12 text-gray-800"
        >
          Skills.
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-between sm:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/4 mb-8 md:mb-0"
          >
            {Object.keys(skillCategories).map((category, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`w-full py-4 px-6   mb-4 rounded-lg font-semibold text-lg transition-all duration-300 text-left ${
                  activeCategory === category
                    ? 'bg-gradient-to-br   from-indigo-900 via-blue-900 to-purple-900 text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-800 hover:text-blue-800'
                }`}
              >
                <motion.span
                  initial={false}
                  animate={{ x: activeCategory === category ? 10 : 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {category}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:w-3/4 flex flex-wrap justify-center gap-8"
            >
              {skillCategories[activeCategory].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5, 
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-32 h-32 transition-all duration-300"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <skill.icon className="text-5xl mb-4" style={{ color: skill.color }} />
                  </motion.div>
                  <span className="text-sm font-semibold text-center text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;