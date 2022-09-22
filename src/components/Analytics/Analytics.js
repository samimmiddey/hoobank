import React from 'react';
import { motion } from 'framer-motion';

const data = [
   {
      number: '3800+',
      text: 'USER ACTIVE'
   },
   {
      number: '230+',
      text: 'TRUSTED BY COMPANY'
   },
   {
      number: '$230M',
      text: 'TRANSACTION'
   }
];

const Analytics = () => {
   return (
      <motion.div
         className='section-padding flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-0 items-center justify-between'
         initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
         viewport={{ once: true }}
      >
         {data.map((item, index) => (
            <div
               key={index}
               className={`flex items-center gap-10 lg:gap-24 xl:gap-16 w-full md:w-fit md:justify-start ${index === 0 ? 'xs:justify-start' : index === 1 ? 'xs:justify-center' : 'xs:justify-end'} justify-center`}
            >
               <div className='flex items-center gap-4 lg:gap-5'>
                  <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold'>{item.number}</h2>
                  <p className='text-md sm:text-lg lg:text-xl xl:text-2xl text-gradient'>{item.text}</p>
               </div>
               {
                  index !== 2 &&
                  <div className='hidden md:block h-5 w-0.5 bg-gray-600 rounded-md' />
               }
            </div>
         ))}
      </motion.div>
   );
};

export default Analytics;