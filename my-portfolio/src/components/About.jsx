import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-6 text-center"
          >
            I'm a passionate Full Stack Developer with expertise in the MERN stack. 
            With a strong foundation in both front-end and back-end technologies, 
            I create robust and scalable web applications that deliver exceptional user experiences.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { Icon: FaCode, title: 'Front-end Development', description: 'Creating responsive and interactive user interfaces using modern frameworks and libraries.' },
              { Icon: FaServer, title: 'Back-end Development', description: 'Building robust server-side applications and APIs to power web applications.' },
              { Icon: FaLaptopCode, title: 'Full Stack Integration', description: 'Seamlessly integrating front-end and back-end technologies for complete web solutions.' },
            ].map(({ Icon, title, description }, index) => (
              <motion.div key={index} variants={cardVariants} className="bg-white rounded-lg shadow-md p-6 text-center">
                <Icon className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;