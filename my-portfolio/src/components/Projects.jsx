import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with the MERN stack.",
    image: "../../public/download.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A real-time task management application with user authentication.",
    image: "/path-to-task-app-image.jpg",
    technologies: ["React", "Firebase", "Material-UI"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting app integrating with external APIs.",
    image: "/path-to-weather-app-image.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:rotate-1"
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        whileHover={{ scale: 1.1, backgroundColor: "#93C5FD" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <motion.a 
                      href={project.github} 
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;