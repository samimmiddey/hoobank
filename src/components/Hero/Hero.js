import React from 'react';
import { robot } from '../../assets';
import { ImArrowUpRight2 } from 'react-icons/im';
import { motion } from 'framer-motion';

const Hero = () => {
   return (
      <div id='home' className='section-scroll mt-2 pt-28 sm:pt-36 sm:mt-0 xl:pt-40 grid grid-cols-none md:grid-cols-2 gap-12'>
         <motion.div
            className='flex flex-col justify-center items-start gap-8 md:gap-5 relative'
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
            viewport={{ once: true }}
         >
            <div className='w-full sm:w-fit h-12 sm:pl-8 sm:pr-8 bg-black-gradient rounded-md flex items-center justify-center text-sm md:text-base'>
               <p className='text-gray-400'>Get <span className='text-white'>20%</span> Discount For <span className='text-white'>1 Month</span> Account</p>
            </div>
            <h1
               className='text-4xl font-semibold leading-normal
               sm:text-5xl sm:leading-normal
               md:text-5xl md:leading-normal
               lg:text-6xl lg:leading-normal
               xl:text-7xl xl:leading-normal'
            >
               The Next
               <br />
               <span className='text-gradient'>Generation</span>
               <br />
               Payment Method
            </h1>
            <p className='body-text'>
               Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            </p>
            <div
               className='hidden
               ss:h-20 ss:w-20 ss:absolute ss:top-20 ss:right-0 ss:rounded-full ss:border-solid ss:border-2 ss:border-cyan-500
               ss:flex ss:flex-col ss:items-center ss:justify-center ss:text-gradient ss:text-sm
               xs:right-20
               sm:top-20 sm:right-40 sm:h-24 sm:w-24 sm:text-base
               md:top-24 md:right-0
               lg:top-36 lg:right-10 lg:h-28 lg:w-28
               xl:top-40 xl:right-10 xl:h-36 xl:w-36
               '
            >
               <p className='flex items-center gap-2'>Get <ImArrowUpRight2 className='text-dimWhite' /></p>
               <p>Started</p>
            </div>
         </motion.div>
         <motion.div
            className='circle absolute h-full sm:h-96 mt-6 sm:mt-10 md:mt-0 md:h-full'
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            <img src={robot} alt="" className='z-10' style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
         </motion.div>
      </div>
   );
};

export default Hero;