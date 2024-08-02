import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mesfin is an exceptional developer. His attention to detail and problem-solving skills are unmatched.",
      author: "Jane Doe",
      position: "CTO, Tech Solutions Inc."
    },
    {
      quote: "Working with Mesfin was a pleasure. He delivered our project on time and exceeded our expectations.",
      author: "John Smith",
      position: "Project Manager, Web Innovations"
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <p className="font-bold text-gray-800">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;