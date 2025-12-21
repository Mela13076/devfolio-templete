'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'
import { FormData } from '@/types'
import siteConfig from '@/config/siteConfig'



type FormStatus = 'idle' | 'loading' | 'success' | 'error';
const showForm = siteConfig.contact.includeForm;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container max-w-7xl mx-auto py-12 px-10 relative z-10">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center pb-20"
        {...fadeInUp}
      >
        {siteConfig.contact.header}
      </motion.h1>
      
      <div className={`${showForm ? " grid gap-12grid-cols-1 md:grid-cols-2" : "text-center mx-auto max-w-2xl bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-primary border"} `}>
        {/* Contact Information */}
        <motion.div 
          className="space-y-8"
          {...slideInLeft}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              {siteConfig.contact.description}
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-left">Email</h3>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary hover:text-primary">
                  {siteConfig.contact.email}
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-left">Phone</h3>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-secondary hover:text-primary">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">{siteConfig.contact.location}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        {showForm && (
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  border-primary border"
            {...slideInRight}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {status === 'success' && (
                <motion.p 
                  className="text-green-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              
              {status === 'error' && (
                <motion.p 
                  className="text-red-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        )}
      </div>
    </div>
  )
} 