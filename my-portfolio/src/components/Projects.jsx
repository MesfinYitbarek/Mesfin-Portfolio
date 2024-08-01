import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with the MERN stack.",
    image: "../../public/shoper-slLo94wES2M-unsplash.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "#",
    live: "#",
    color: "#8B5CF6" // Adjusted color
  },
  {
    title: "Task Management App",
    description: "A real-time task management application with user authentication.",
    image: "../../public/pexels-george-dolgikh-551816-1326947.jpg",
    technologies: ["React", "Firebase", "Material-UI"],
    github: "#",
    live: "#",
    color: "#6EE7B7" // Adjusted color
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting app integrating with external APIs.",
    image: "../../public/pexels-artempodrez-4492127.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#",
    color: "#F472B6" // Adjusted color
  }
];

const ProjectCard = ({ project, isActive, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  useEffect(() => {
    const handleMouse = (event) => {
      // const rect = ref.current.getBoundingClientRect();
      // const centerX = rect.left + rect.width / 2;
      // const centerY = rect.top + rect.height / 2;
      // x.set(event.clientX - centerX);
      // y.set(event.clientY - centerY);
    };

    ref.current.addEventListener('mousemove', handleMouse);
    return () => ref.current.removeEventListener('mousemove', handleMouse);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={`w-full cursor-pointer perspective-1000 ${isActive ? 'z-10' : ''}`}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="w-full h-full bg-opacity-10 bg-white backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        <div className="p-6 relative" style={{ transform: "translateZ(50px)" }}>
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: `${project.color}44`, color: project.color }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-roboto font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300"
        >
          Projects.
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12 relative">
          {/* 3D Rotating Carousel */}
          <motion.div 
            className="w-full lg:w-2/3 h-[600px] relative"
            style={{ perspective: 1000 }}
          >
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="absolute w-full h-full"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ 
                    opacity: currentProject === index ? 1 : 0,
                    rotateY: currentProject === index ? 0 : 90,
                    zIndex: currentProject === index ? 1 : 0
                  }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard 
                    project={project} 
                    isActive={currentProject === index}
                    onClick={() => setCurrentProject(index)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Details */}
          <motion.div 
            className="w-full lg:w-1/3 text-white"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              {projects[currentProject].title}
            </h3>
            <p className="text-lg mb-6 text-gray-300">{projects[currentProject].description}</p>
            <div className="flex gap-4 mb-8">
              <motion.a 
                href={projects[currentProject].github} 
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white px-6 py-3 rounded-full flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: projects[currentProject].color, color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="mr-2" /> GitHub
              </motion.a>
              <motion.a 
                href={projects[currentProject].live} 
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white px-6 py-3 rounded-full flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: projects[currentProject].color, color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </motion.a>
            </div>
            <div className="flex justify-between mt-6">
              <motion.button
                onClick={prevProject}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white p-3 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: projects[currentProject].color, color: "white" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button
                onClick={nextProject}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white p-3 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: projects[currentProject].color, color: "white" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;