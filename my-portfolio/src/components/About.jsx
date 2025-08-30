import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaReact, FaNodeJs, FaDownload } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import cvFile from "../assets/Mesfin_Yitbarek_CV.pdf";

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
          className="text-4xl font-roboto font-extrabold text-center mb-12 text-gray-800 relative"
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
            I am a motivated Software Engineer with top academic honors (3.92 GPA) and certification through Huawei’s Seeds for the Future program. During my academic journey, I gained exposure to 5G, Cloud Computing, AI, and Big Data. My full-stack development experience spans front-end technologies like React.js and back-end technologies such as Node.js, Express, and MongoDB.

            I have a solid understanding of Agile methodologies and am confident in my ability to collaborate with Product Owners and Scrum Masters to deliver scalable, user-centered solutions. My passion for continuous learning drives me to explore emerging technologies and solve complex challenges.

            I am eager to apply my technical expertise, problem-solving skills, and growth mindset to contribute to innovative projects that drive customer satisfaction and progress in the tech industry.
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
              { Icon: FaCode, title: 'Front-end Development', description: 'Building dynamic, responsive UIs with React.js, ensuring an engaging user experience.' },
              { Icon: FaServer, title: 'Back-end Development', description: 'Creating server-side solutions with Node.js and Express, focusing on performance and scalability.' },
              { Icon: FaLaptopCode, title: 'Full Stack Development', description: 'Integrating front-end and back-end solutions using the MERN stack to deliver full-scale applications.' },
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
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">My Full-Stack Development Skills</h3>
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
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Technologies I am Exploring</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {[
                { Icon: FaServer, title: 'Cloud Computing', color: 'text-blue-500' },
                { Icon: FaCode, title: 'AI & Machine Learning', color: 'text-orange-600' },
                { Icon: FaLaptopCode, title: '5G', color: 'text-purple-600' },
              ].map(({ Icon, title, color }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon className={`text-5xl ${color} mb-2`} />
                  <span className="text-sm font-semibold">{title}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-center">
              I aim to continue building real-world applications while **learning** and **growing** in technologies such as **Cloud Computing**, **AI**, and **5G**. I’m excited to apply my skills in a collaborative environment and contribute to impactful projects in the tech industry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
