'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';
import siteConfig from '@/config/siteConfig';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image src={siteConfig.hero.profileImage} alt="Profile" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {siteConfig.hero.headline} <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              {siteConfig.name}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {siteConfig.hero.subtitle}
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            {siteConfig.socials.github.show && (
              <motion.a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            )}
            {siteConfig.socials.linkedin.show && (
              <motion.a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            )}
            {siteConfig.socials.twitter.show && (
              <motion.a
                href={siteConfig.socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter /> 
              </motion.a>
            )}
            
          </motion.div>
          {(siteConfig.hero.ctaPrimary.include || siteConfig.hero.ctaSecondary.include) && (
            <motion.div 
              className="flex flex-col md:flex-row justify-center gap-4"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              {siteConfig.hero.ctaPrimary.include && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={siteConfig.hero.ctaPrimary.href}
                    className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {siteConfig.hero.ctaPrimary.label}
                  </Link>
                </motion.div>
              )}
              { siteConfig.hero.ctaSecondary.include && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={siteConfig.hero.ctaSecondary.href}
                    className=" inline-block w-full bg-gray-500  md:w-auto text-white  px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {siteConfig.hero.ctaSecondary.label}
                  </Link>
                </motion.div>
              )}
              
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
} 