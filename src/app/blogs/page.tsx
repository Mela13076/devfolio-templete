'use client'

import { blogs } from '@/contents/blogs'
import  BlogCard  from '@/components/BlogCard'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog Posts
      </motion.h1>

      <motion.section 
              className="mb-16"
              {...fadeInUp}
            >
              <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
                This blog is a space where I document my technical journey — the projects I build, 
                the challenges I face, and the lessons I learn from teaching others. Whether it’s 
                cloud architecture, full-stack design, or reflections on mentoring and leadership, 
                these posts are meant to inspire, educate, and give a behind-the-scenes look at my 
                work as a developer.
              </p>
            </motion.section>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Loading all Blogs from BlogCard */}
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}

      </motion.div>
    </div>
  )
} 