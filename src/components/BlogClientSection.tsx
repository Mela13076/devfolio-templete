'use client'

import { notFound } from 'next/navigation'
import  BlogCard  from '@/components/BlogCard'
import { motion } from 'framer-motion'
import { staggerContainer} from '@/utils/animations'
import siteConfig from '@/config/siteConfig'
import { BlogMetadata } from '@/types'

export default function BlogClientSection({ blogs }: { blogs: BlogMetadata[] }) {
  if (!siteConfig.blogs.include) {
    notFound()
  }
  return (
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
  )
} 