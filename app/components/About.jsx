'use client';

import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <motion.div 
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h4 variants={itemVariants} className='text-center mb-2 text-lg font-Ovo dark:text-white/80'>Introduction</motion.h4>
      <motion.h2 variants={itemVariants} className='text-center text-5xl font-Ovo dark:text-white'>About me</motion.h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div 
          className='w-64 sm:w-80 rounded-3xl max-w-none'
          variants={itemVariants}
        >
            <Image src={assets.user_image} alt="User" className='w-full rounded-3xl' />
        </motion.div>
        <motion.div className='flex-1' variants={itemVariants}>
            <p className='mb-10 max-w-2xl font-Ovo dark:text-gray-300'>
                I'm an experienced Fullstack Developer with years of experience and professional expertise in the field. Throughout my career, I have provided solutions for various clients across different industries, contributing to their success and growth.</p>

                <motion.ul 
                  className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li 
                          className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-black hover:-translate-y-1 duration-500 bg-white dark:bg-gray-900 dark:border-white dark:hover:bg-darkHover/50 dark:hover:shadow-white'
                          key={index}
                          variants={itemVariants}
                          whileHover={{ y: -8 }}
                        >
                            <Image src={icon} alt={title} className='w-7 mt-3 dark:hidden'/>
                            <Image src={iconDark} alt={title} className='w-7 mt-3 hidden dark:block'/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4 variants={itemVariants} className='my-6 text-gray-700 dark:text-white font-Ovo'>Tools I use</motion.h4>

                <motion.ul 
                  className='flex items-center gap-3 sm:gap-5'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {toolsData.map((tool, index) => (
                    <motion.li 
                      className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white dark:hover:bg-darkHover/30'
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.1 }}
                    >
                      <Image src={tool} alt={tool} className='w-5 sm:w-7' />
                    </motion.li>
                  ))}
                </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
