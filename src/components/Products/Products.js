import React from 'react';
import { card } from '../../assets';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

const Products = () => {
   return (
      <div id='products' className='section-padding section-scroll -mt-8 grid md:grid-cols-2 gap-14 md:gap-10 items-center'>
         <motion.div
            className='flex flex-col gap-6 items-start'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
            viewport={{ once: true }}
         >
            <h1 className='heading-h1'>
               You do the business,<br />We'll handle the money
            </h1>
            <p className='body-text mb-4 sm:mb-6 md:mb-7'>
               with the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with 100 of credit cards on the market.
            </p>
            <Button text='Get Started' />
         </motion.div>
         <motion.div
            className='justify-self-center w-full sm:w-96 md:w-full lg:w-90'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            <img
               src={card}
               alt=""
               style={{ height: '100%', width: '100%' }}
            />
         </motion.div>
      </div>
   );
};

export default Products;