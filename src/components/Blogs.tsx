'use client'

import  BlogCard  from './BlogCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { BlogMetadata } from '@/types';

export default function Blogs({ blogs }: { blogs: BlogMetadata[] }) {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Latest Blog Posts
        </motion.h2>
        
        {/* Loading all Blogs from BlogCard */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
          {blogs.slice(0,2).map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </motion.div>

        {/* Link to All Post */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blogs"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 