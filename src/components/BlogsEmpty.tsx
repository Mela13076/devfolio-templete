"use client";
import { motion } from "framer-motion";
import { fadeInUp, cardHoverSmall } from '@/utils/animations'

export default function BlogsEmpty() {
  return (
    <motion.div 
    className="flex flex-col items-center gap-4 bg-white dark:bg-dark/80 rounded-lg shadow-md p-10 border-primary w-1/2 m-auto"
    variants={fadeInUp}
    {...cardHoverSmall}
    >
        <h2 className="text-3xl font-bold text-center text-primary">No Blog Posts Yet</h2>
        <p className="">Check back soon.</p>
    </motion.div>
  )
}