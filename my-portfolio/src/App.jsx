import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen"
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Journey from './components/Journey';
// import Testimonials from './components/Testimonials';
// import BlogPosts from './components/Blog';
// import BlogPost from './components/BlogPost';

// function App() {
//   const posts = [
//     {
//       title: "The Future of React: What's Coming in React 18",
//       excerpt: "Exploring the exciting new features and improvements in the upcoming React 18 release...",
//       date: "June 15, 2023",
//       slug: "future-of-react-18",
//       content: `
//         <h2>The Future of React: What's Coming in React 18</h2>
//         <p>React 18 is set to bring a host of new features and improvements that will enhance the developer experience and application performance. Let's dive into some of the most exciting changes:</p>
//         <h3>1. Automatic Batching</h3>
//         <p>React 18 introduces automatic batching for all updates, regardless of their origin. This means that multiple state updates will be batched together, reducing the number of re-renders and improving performance.</p>
//         <!-- ... rest of the content ... -->
//       `
//     },
//     {
//       title: "Mastering MongoDB: Tips and Tricks for Efficient Queries",
//       excerpt: "Learn how to optimize your MongoDB queries for better performance and scalability...",
//       date: "May 22, 2023",
//       slug: "mastering-mongodb-queries",
//       content: `
//         <h2>Mastering MongoDB: Tips and Tricks for Efficient Queries</h2>
//         <p>MongoDB is a powerful NoSQL database, but to get the most out of it, you need to know how to write efficient queries. Here are some tips and tricks to help you optimize your MongoDB queries:</p>
//         <h3>1. Use Proper Indexing</h3>
//         <p>Indexes are crucial for query performance. Create indexes on fields that you frequently query, sort, or use in aggregations. However, be cautious not to over-index, as it can slow down write operations.</p>
//         <!-- ... rest of the content ... -->
//       `
//     },
//   ];

//   return (
//     <Router>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen"
//       >
//         <Header />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Hero />
//               <About />
//               <Skills />
//               <Projects />
//               <Journey />
//               <Contact />
//               <Testimonials />
//               <BlogPosts posts={posts} />
//             </>
//           } />
//           <Route path="/blog/:slug" element={<BlogPost posts={posts} />} />
//         </Routes>
//         <Footer />
//       </motion.div>
//     </Router>
//   );
// }

// export default App;