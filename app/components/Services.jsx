import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <motion.div 
      id='services' 
      className='w-full px-6 md:px-[12%] py-6 md:py-10 scroll-mt-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h4 variants={itemVariants} className='text-center text-lg font-Ovo'>What I offer</motion.h4>
      <motion.h2 variants={itemVariants} className='text-center text-5xl font-Ovo'>My Services</motion.h2>

      <motion.p variants={itemVariants} className='text-center max-w-xl md:max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'm a fullstack web developer from Dhaka, Bangladesh with 3 years of experience in building web applications.
      </motion.p>

      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
         {serviceData.map(({icon, title, description, link}, index) => (
           <motion.div 
             key={index}
             className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white/20 dark:hover:bg-darkHover dark:hover:shadow-white/20'
             variants={itemVariants}
             whileHover={{ y: -8 }}
           >
             <Image src={icon} alt="" className='w-10' />
             <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
             <p className='text-sm text-gray-600 dark:text-gray-400 leading-5'>{description}</p>

             <a href={link} className='flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'>
                Read more <Image alt='' src={assets.right_arrow} className='w-4' />
             </a>
           </motion.div>
         ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
