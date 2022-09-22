import React from 'react';
import { bill, google, apple } from '../../assets';
import { motion } from 'framer-motion';

const Features = () => {
   return (
      <div id='features' className='section-padding section-scroll grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
         <motion.div
            className='justify-self-center w-full sm:w-96 md:w-full lg:w-90'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
            viewport={{ once: true }}
         >
            <img
               src={bill}
               alt=""
               style={{ height: '100%', width: '100%' }}
            />
         </motion.div>
         <motion.div
            className='w-full justify-self-start xl:justify-self-center xl:w-5/6'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            <div className='flex flex-col gap-6 items-start'>
               <h1 className='heading-h1'>
                  You do the business,<br />We'll handle the money
               </h1>
               <p className='text-gray-400 pr-0 leading-relaxed md:leading-perfect mb-4 sm:mb-6 md:mb-7 w-full sm:w-4/5 md:w-5/6'>
                  with the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with 100 of credit cards on the market.
               </p>
               <div className='flex items-center gap-6 flex-wrap'>
                  <img src={google} alt="" />
                  <img src={apple} alt="" />
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default Features;