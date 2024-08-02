import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPosts = () => {
  const posts = [
    {
      title: "The Future of React: What's Coming in React 18",
      excerpt: "Exploring the exciting new features and improvements in the upcoming React 18 release...",
      date: "June 15, 2023",
      slug: "future-of-react-18",
      content: `
        <h2>The Future of React: What's Coming in React 18</h2>

        <p>React 18 is set to bring a host of new features and improvements that will enhance the developer experience and application performance. Let's dive into some of the most exciting changes:</p>

        <h3>1. Automatic Batching</h3>
        <p>React 18 introduces automatic batching for all updates, regardless of their origin. This means that multiple state updates will be batched together, reducing the number of re-renders and improving performance.</p>

        <h3>2. Concurrent Rendering</h3>
        <p>One of the most significant changes in React 18 is the introduction of concurrent rendering. This feature allows React to prepare multiple versions of the UI at the same time, enabling smoother user experiences and more responsive interfaces.</p>

        <h3>3. New Suspense Features</h3>
        <p>React 18 expands on the Suspense feature, making it easier to implement loading states and handle asynchronous operations. This includes improved server-side rendering support with Suspense.</p>

        <h3>4. New Hooks</h3>
        <p>React 18 introduces new hooks like useTransition and useDeferredValue, which give developers more control over how updates are prioritized and rendered.</p>

        <h3>5. Improved Server-Side Rendering</h3>
        <p>With the new streaming server-side rendering, React 18 allows you to send HTML in chunks, improving the time to first byte (TTFB) and providing a better user experience.</p>

        <h3>Conclusion</h3>
        <p>React 18 represents a significant step forward for the library, with features that will make it easier to build fast, responsive applications. As developers, we have a lot to look forward to in this new release.</p>
      `
    },
    {
      title: "Mastering MongoDB: Tips and Tricks for Efficient Queries",
      excerpt: "Learn how to optimize your MongoDB queries for better performance and scalability...",
      date: "May 22, 2023",
      slug: "mastering-mongodb-queries",
      content: `
        <h2>Mastering MongoDB: Tips and Tricks for Efficient Queries</h2>

        <p>MongoDB is a powerful NoSQL database, but to get the most out of it, you need to know how to write efficient queries. Here are some tips and tricks to help you optimize your MongoDB queries:</p>

        <h3>1. Use Proper Indexing</h3>
        <p>Indexes are crucial for query performance. Create indexes on fields that you frequently query, sort, or use in aggregations. However, be cautious not to over-index, as it can slow down write operations.</p>

        <h3>2. Leverage Compound Indexes</h3>
        <p>When querying multiple fields together, use compound indexes. The order of fields in a compound index matters - place the fields with equality conditions before range conditions for optimal performance.</p>

        <h3>3. Avoid Regex Queries Without Indexes</h3>
        <p>Regex queries can be slow, especially on large collections. When possible, use indexed text search instead. If you must use regex, ensure the pattern starts with a prefix to utilize indexes.</p>

        <h3>4. Use Projection</h3>
        <p>Only retrieve the fields you need by using projection. This reduces the amount of data transferred and processed, improving query performance.</p>

        <h3>5. Batch Operations</h3>
        <p>Instead of performing many small operations, batch them together. This is especially useful for inserts, updates, and deletes on large datasets.</p>

        <h3>6. Optimize Aggregation Pipelines</h3>
        <p>Place $match and $limit stages early in your aggregation pipeline to reduce the amount of data processed in subsequent stages. Use $project and $group judiciously to shape your data efficiently.</p>

        <h3>7. Use Explain() for Query Analysis</h3>
        <p>Utilize the explain() method to understand how your queries are executed. This can help you identify bottlenecks and optimize your query structure.</p>

        <h3>Conclusion</h3>
        <p>By applying these tips and tricks, you can significantly improve the performance of your MongoDB queries. Remember, efficient queries lead to faster applications and better scalability.</p>
      `
    },
  ];

  // ... rest of the component remains the same



  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Tech Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link to={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;