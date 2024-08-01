import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

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

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: "Address", content: "Addis Ababa, Ethiopia" },
    { icon: FaEnvelope, title: "Email", content: "mesfinyitbarek55@gmail.com" },
    { icon: FaPhone, title: "Phone", content: "+251 975 364 420" }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/yourprofile" },
    { icon: FaGithub, url: "https://github.com/yourusername" },
    { icon: FaTwitter, url: "https://twitter.com/yourhandle" }
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-indigo-100 via-purple-50 to-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 font-roboto"
        >
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">Connect</span>.
        </motion.h2>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 border border-indigo-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index, type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"
              >
                <info.icon className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-600 text-center">{info.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10 transform hover:scale-105 transition-all duration-300 border border-indigo-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex-1"
              >
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-indigo-800"
                    required
                  />
                  <AnimatePresence>
                    {activeField === 'name' && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 -bottom-6 text-sm text-indigo-600"
                      >
                        Please enter your full name
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1"
              >
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-indigo-800"
                    required
                  />
                  <AnimatePresence>
                    {activeField === 'email' && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 -bottom-6 text-sm text-indigo-600"
                      >
                        Enter a valid email address
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-lg">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
                rows="5"
                className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-indigo-800"
                required
              />
              <AnimatePresence>
                {activeField === 'message' && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="block mt-2 text-sm text-indigo-600"
                  >
                    Tell me about your self and talk to me. 
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 flex items-center justify-center text-lg"
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
          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`mt-6 p-4 rounded-lg ${
                  submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                <p className="text-center font-semibold">
                  {submitStatus === 'success'
                    ? 'Message sent successfully! We\'ll get back to you soon.'
                    : 'An error occurred. Please try again later or contact us directly.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 flex justify-center space-x-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-indigo-600 hover:text-purple-600 transition-colors duration-300"
            >
              <link.icon className="text-3xl" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;