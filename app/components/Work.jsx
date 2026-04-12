import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    return (
        <motion.div 
            id='work' 
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h4 variants={itemVariants} className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
            <motion.h2 variants={itemVariants} className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

            <motion.p variants={itemVariants} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my portfolio! Here, you'll find a collection of my latest work, showcasing my skills and expertise in web development.
            </motion.p>

            {/* --- GRID WRAPPER (This was likely missing or broken) --- */}
            <motion.div 
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'
                variants={containerVariants}
            >
                {workData.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* The Link Wrapper */}
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <motion.div 
                                className='bg-white dark:bg-gray-900 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg'
                                whileHover={{ scale: 1.02 }}
                            >
                                <div>
                                    <h2 className='font-semibold text-gray-700 dark:text-white'>{project.title}</h2>
                                    <p className='text-sm text-gray-600 dark:text-gray-400'>{project.description}</p>
                                </div>
                                <motion.div 
                                    className='border rounded-full border-gray-700 dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#111] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition'
                                    whileHover={{ scale: 1.2, backgroundColor: '#bfff00' }}
                                >
                                    <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </motion.div>
                            </motion.div>
                        </a>
                    </motion.div>
                ))}
            </motion.div>

            <motion.a 
                href="#work" 
                className='w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-400 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover duration-500'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
            >
                Show more 
                <Image src={assets.right_arrow_bold} className='w-4 dark:hidden' alt='Right arrow' />
                <Image src={assets.right_arrow_bold_dark} className='w-4 hidden dark:block' alt='Right arrow' />
            </motion.a>
        </motion.div>
    )
}

export default Work