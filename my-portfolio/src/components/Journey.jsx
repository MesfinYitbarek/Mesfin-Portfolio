import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const Journey = () => {
  const timelineData = [
    {
      date: "2022 - Present",
      icon: <FaBriefcase />,
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      description: "Leading development of cutting-edge web applications using MERN stack."
    },
    {
      date: "2020 - 2022",
      icon: <FaBriefcase />,
      title: "Full Stack Developer",
      company: "Web Solutions Co.",
      description: "Developed and maintained complex web applications for various clients."
    },
    {
      date: "2019",
      icon: <FaGraduationCap />,
      title: "BSc in Computer Science",
      company: "University of Technology",
      description: "Graduated with honors, specializing in web technologies."
    },
    {
      date: "2018",
      icon: <FaAward />,
      title: "Best Junior Developer Award",
      company: "Local Tech Conference",
      description: "Recognized for innovative contributions to open-source projects."
    },
  ];

  return (
    <section id="journey" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          My Journey
        </motion.h2>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={item.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Journey;