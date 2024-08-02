import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Link to="/blog" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
    </motion.div>
  );
};

export default BlogPost;