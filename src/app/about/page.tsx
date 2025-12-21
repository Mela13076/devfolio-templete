'use client'

import { FaCode, FaLaptopCode, FaGraduationCap, FaCloud, FaDatabase } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'
import siteConfig from '@/config/siteConfig'

export default function About() {
  const skillCategories = Object.values(siteConfig.about.skills);
  const hasSkills = skillCategories.some(category => category.include);

  return (
    <div className="container max-w-7xl mx-auto py-12 relative z-10">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center "
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          {siteConfig.about.bio}
        </p>
      </motion.section>

      {/* Skills Section */}
      {hasSkills && (
        <motion.section 
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 
            className="section-title"
            {...fadeInUp}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {siteConfig.about.skills.frontend.include && (
              <motion.div 
              className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
              variants={fadeInUp}
              {...cardHover}
            >
              <FaLaptopCode className="h-8 w-8 text-primary dark:text-white  mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-primary">{siteConfig.about.skills.frontend.name}</h3>
              
              <ul className="text-secondary dark:text-white space-y-2">
                {siteConfig.about.skills.frontend.skill.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
            )}
            
            {siteConfig.about.skills.backend.include && (
              <motion.div 
                className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
                variants={fadeInUp}
                {...cardHover}
              >
                <FaDatabase className="h-8 w-8 text-primary dark:text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-primary">{siteConfig.about.skills.backend.name}</h3>
                <ul className="text-secondary dark:text-white space-y-2">
                  {siteConfig.about.skills.backend.skill.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            {siteConfig.about.skills.cloud.include && (
              <motion.div 
                className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
                variants={fadeInUp}
                {...cardHover}
              >
                <FaCloud className="h-8 w-8 text-primary dark:text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-primary">{siteConfig.about.skills.cloud.name}</h3>
                <ul className="text-secondary dark:text-white space-y-2">
                  {siteConfig.about.skills.cloud.skill.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            )}
            {siteConfig.about.skills.ai_security.include && (
              <motion.div 
                className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
                variants={fadeInUp}
                {...cardHover}
              >
                <FaCode className="h-8 w-8 text-primary dark:text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-primary">{siteConfig.about.skills.ai_security.name}</h3>
                <ul className="text-secondary dark:text-white space-y-2">
                  {siteConfig.about.skills.ai_security.skill.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            )}
            {siteConfig.about.skills.tools.include && (
              <motion.div 
                className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
                variants={fadeInUp}
                {...cardHover}
              >
                <FaGraduationCap className="h-8 w-8 text-primary dark:text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-primary">{siteConfig.about.skills.tools.name}</h3>
                <ul className="text-secondary dark:text-white space-y-2">
                  {siteConfig.about.skills.tools.skill.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </motion.section>
      )}
      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8 "
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {siteConfig.about.experience.map((exp, index) => (
            <motion.div 
            className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
            key={index}
            variants={fadeInUp}
            {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-primary mb-2">{exp.company} • {exp.duration}</p>
              <ul className="text-secondary dark:text-white list-disc list-inside space-y-2">
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>


      {/* Education Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="max-w-3xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {siteConfig.about.education.map((edu, index) => (
              <motion.div 
              className="bg-white dark:bg-dark/95 p-6 rounded-lg shadow-md border-primary"
              key={index}
              variants={fadeInUp}
              {...cardHoverSmall}
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-primary mb-2">{edu.institution} • {edu.duration}</p>
                <ul className="text-secondary dark:text-white list-disc list-inside space-y-2">
                  {edu.details.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
        
      </motion.section>
    </div>
  )
} 