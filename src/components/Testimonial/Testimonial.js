import React from 'react';
import { people01, people02, people03 } from '../../assets';
import TestimonialCard from '../UI/TestimonialCard';
import { motion } from 'framer-motion';

const parent = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 0.6,
         staggerChildren: 0.3
      }
   }
}

const children = {
   hidden: {
      opacity: 0,
      y: 25
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 1.5,
         ease: 'easeInOut'
      }
   }
}

const data = [
   {
      text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      img: people01,
      name: 'Elaine Benes',
      position: 'Founder & Leader'
   },
   {
      text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      img: people02,
      name: 'Jerry Seinfeld',
      position: 'Production Manager'
   },
   {
      text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      img: people03,
      name: 'Cosmo Kramer',
      position: 'Marketing Analyst'
   }
];

const Testimonial = () => {
   return (
      <div id='clients' className='section-padding section-scroll'>
         <motion.div
            className='grid grid-cols-auto md:grid-cols-2 items-center gap-6 md:gap-10'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            <h1 className='heading-h1 text-center md:text-start'>What People Are Saying About Us</h1>
            <p className='text-gray-400 leading-relaxed lg:leading-perfect text-center md:text-start'>
               Everything you need to accept card payments and grow your business anywhere on the planet. Our services will cover all your needs.
            </p>
         </motion.div>
         <motion.div
            className='mt-10 sm:mt-16 md:mt-20 grid grid-cols-auto md:grid-cols-3 gap-8'
            variants={parent}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
         >
            {data.map((item, index) => (
               <motion.div
                  key={index}
                  variants={children}
                  viewport={{ once: true }}
               >
                  <TestimonialCard
                     data={item}
                     index={index}
                  />
               </motion.div>
            ))}
         </motion.div>
      </div>
   );
};

export default Testimonial;