import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with the MERN stack.",
    image: "../../public/shoper-slLo94wES2M-unsplash.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A real-time task management application with user authentication.",
    image: "../../public/shoper-slLo94wES2M-unsplash.jpg",
    technologies: ["React", "Firebase", "Material-UI"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting app integrating with external APIs.",
    image: "../../public/shoper-slLo94wES2M-unsplash.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b px-10 sm:px-20 from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 font-sans relative "
        >
          My Projects.
         
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
                rotateY: 5
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end justify-center"
                  whileHover={{ opacity: 0.7 }}
                >
                  <p className="text-white text-center p-4">{project.description}</p>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: "#93C5FD" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <motion.a 
                    href={project.github} 
                    className="text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-4 py-2 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.05, backgroundColor: "#DBEAFE" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    className="text-green-600 hover:text-green-800 flex items-center bg-green-50 px-4 py-2 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.05, backgroundColor: "#DCFCE7" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;