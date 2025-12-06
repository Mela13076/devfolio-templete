"use client";

import { motion } from "framer-motion";
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from "@/types";
import { fadeInUp, cardHoverSmall } from '@/utils/animations'

export default function ProjectCard ({ title, description, technologies, image, githubLink, demoLink }: Project) {
  return (
    <motion.article
      key={title}
      className="bg-white dark:bg-dark/80 rounded-lg shadow-md p-6 border-primary flex flex-col justify-evenly"
      variants={fadeInUp}
      {...cardHoverSmall}
    >
      {/* Project Image */}
      {image && (
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Project Title */}
      <motion.h3 
        className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        
        {title}
      </motion.h3>

      {/* Project Description */}
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Project Technologies */}
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
     
      {/* Project Links */}
      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="h-5 w-5" />
            <span>Code</span>
          </motion.a>
        )}
        {demoLink && (
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="h-5 w-5" />
            <span>Live Demo</span>
          </motion.a>
        )}
      </motion.div>
    </motion.article>
  );
};



