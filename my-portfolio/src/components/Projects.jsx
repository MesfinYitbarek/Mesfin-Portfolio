import  { useState, useRef} from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Lancet Consultancy",
    description: "A medical website designed to provide professional healthcare consultancy. It connects patients with medical experts, offering reliable advice, appointments, and health information in a user-friendly platform.",
    image: "/lancet.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "#",
    live: "http://lancet.onrender.com/",
    color: "#3B82F6"
  },
  {
    title: "SkillUp E-learning Platform",
    description: "Developed a web-based platform enabling students to access courses, track progress, and interact with learning materials in an engaging and user-friendly environment.",
    image: "/skillup.png",
    technologies: ["React", "Firebase", "Material-UI"],
    github: "#",
    live: "https://fcse.onrender.com/",
    color: "#10B981" 
  },
  {
    title: "LotteryBingo Web App",
    description: "Designed and implemented an online bingo game with sales tracking and an admin dashboard for managing users, transactions, and gameplay",
    image: "/pexels-artempodrez-4492127.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#",
    color: "#F59E0B" 
  },
  {
    title: "Course Offering System for Arba Minch University",
    description: "Built for Arba Minch University with both automatic and manual course assignment, data management, announcements, and complaint handling, improving efficiency in academic operations.",
    image: "/pexels-artempodrez-4492127.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "TailwindCSS"],
    github: "#",
    live: "#",
    color: "#F59E0B" // Yellow
  }
];

const ProjectCard = ({ project, isActive, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

 
  return (
    <motion.div
      ref={ref}
      className={`w-full cursor-pointer perspective-1000 ${isActive ? 'z-10' : ''}`}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        
      }}
      
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >

      <motion.div
       
        className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          backgroundColor: `${project.color}22`
        }}
      >
        
        <div className="p-6 relative" style={{ transform: "translateZ(50px)" }}>
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: `${project.color}22`, color: project.color }}
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
    <section id="projects" className="py-20 sm:px-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-roboto  font-extrabold text-center mb-20 text-gray-800"
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
            className="w-full lg:w-1/3 text-gray-800"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              {projects[currentProject].title}
            </h3>
            <p className="text-lg mb-6 text-gray-600">{projects[currentProject].description}</p>
            <div className="flex gap-4 mb-8">              
              <motion.a 
                href={projects[currentProject].live} 
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: projects[currentProject].color, color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </motion.a>
            </div>
            <div className="flex justify-between mt-6">
              <motion.button
                onClick={prevProject}
                className="bg-gray-200 text-gray-800 p-3 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: projects[currentProject].color, color: "white" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button
                onClick={nextProject}
                className="bg-gray-200 text-gray-800 p-3 rounded-full"
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