"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { BlogMetadata } from "@/types";
import { fadeInUp, cardHoverSmall } from '@/utils/animations'
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";


export default function BlogCard ({ title, summary, date, readTime, slug, tags }: BlogMetadata) {
  return (
    <motion.article
        key={slug}
        className="bg-white dark:bg-dark/80 rounded-lg shadow-md p-5 border-primary flex flex-col justify-evenly"
        variants={fadeInUp}
        {...cardHoverSmall}
    >
        <Link href={`/blogs/${slug}`}>
        <motion.h3 
            className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {title}
        </motion.h3>
        </Link>
        <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        >
        {summary}
        </motion.p>
        <motion.div 
            className="flex flex-wrap gap-2 my-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
        {tags && tags.map((tag) => (
          <motion.span
            key={tag}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
        <motion.div 
        className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        >
            <motion.span 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
            >
                <FaCalendarAlt className="mr-2" />
                {formatDate(date)}
            </motion.span>
            {readTime &&(
              <motion.span 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaClock className="mr-2" />
                {readTime}
              </motion.span>
            )}
            
        </motion.div>
        
    </motion.article>
  );
};





