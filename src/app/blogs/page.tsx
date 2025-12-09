'use client'

import { blogs } from '@/contents/blogs'
import { notFound } from 'next/navigation'
import  BlogCard  from '@/components/BlogCard'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/utils/animations'
import siteConfig from '@/config/siteConfig'

export default function Blogs() {
  if (!siteConfig.blogs.include) {
    notFound()
  }
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
                {siteConfig.blogs.description}
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