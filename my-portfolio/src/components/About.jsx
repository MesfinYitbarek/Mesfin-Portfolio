import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaReact, FaNodeJs, FaDownload } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import cvFile from "../assets/Mesfin_Y_CV.pdf.pdf";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b font-l from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-roboto font-extrabold text-center mb-12 text-gray-800 relative "
        >
          About Me.
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 mb-8 text-center text-lg leading-relaxed"
          >
            I'm a dedicated Full Stack Developer with a strong background in both front-end and back-end development. I love building modern, scalable, and user-friendly web applications that solve real problems and create meaningful impact. My approach combines clean code, attention to detail, and a focus on delivering seamless user experiences. Beyond coding, I enjoy learning new technologies, collaborating with others, and continuously improving my skills to stay ahead in the fast-evolving world of software development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <a
              href={cvFile}
              download="Mesfin_Y_CV.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { Icon: FaCode, title: 'Front-end Development', description: 'Creating responsive and interactive user interfaces using modern frameworks and libraries, with a focus on React.' },
              { Icon: FaServer, title: 'Back-end Development', description: 'Building robust server-side applications and APIs using Node.js and Express to power web applications.' },
              { Icon: FaLaptopCode, title: 'Full Stack Integration', description: 'Seamlessly integrating front-end and back-end technologies for complete MERN stack solutions.' },
            ].map(({ Icon, title, description }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">My MERN Stack Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {[
                { Icon: FaReact, title: 'React', color: 'text-blue-500' },
                { Icon: SiExpress, title: 'Express', color: 'text-gray-700' },
                { Icon: SiMongodb, title: 'MongoDB', color: 'text-green-500' },
                { Icon: FaNodeJs, title: 'Node.js', color: 'text-green-600' },
              ].map(({ Icon, title, color }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon className={`text-5xl ${color} mb-2`} />
                  <span className="text-sm font-semibold">{title}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-center">
              My goal is to leverage the power of the MERN stack to deliver high-performance,
              scalable web applications that exceed client expectations and push the boundaries of what's possible on the web.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;