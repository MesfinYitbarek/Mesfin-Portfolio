import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_3qki768',
      'template_g60wbpk',
      formData,
      '3UwVMA1PXfJZnLcbB'
    ).then((result) => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-indigo-100 to-white py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-12 text-indigo-800 font-sans"
        >
          Let's Connect
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label htmlFor="name" className="block text-indigo-700 font-semibold mb-2 text-lg">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-indigo-800"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="block text-indigo-700 font-semibold mb-2 text-lg">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-indigo-800"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-indigo-700 font-semibold mb-2 text-lg">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-indigo-800"
                required
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 flex items-center justify-center text-lg"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <FaPaperPlane className="mr-3" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-600 text-center font-semibold"
            >
              Message sent successfully!
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-red-600 text-center font-semibold"
            >
              An error occurred. Please try again later.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;