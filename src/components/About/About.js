import React from 'react';
import Button from '../UI/Button';
import { AiFillStar } from 'react-icons/ai';
import { MdSecurity } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import AboutCard from '../UI/AboutCard';
import { motion } from 'framer-motion';

const aboutCardData = [
   {
      icon: AiFillStar,
      title: 'Rewards',
      desc: 'The best credit cards offer some tantalizing combinations of promotions and prizes'
   },
   {
      icon: MdSecurity,
      title: '100% Secured',
      desc: 'We take proactive steps make sure your information and transactions are secure'
   },
   {
      icon: RiSendPlaneFill,
      title: 'Balance Transfer',
      desc: 'A balance transfer credit card can save you a lot of money in interest charges'
   }
];

const About = () => {
   return (
      <div id='about' className='section-padding section-scroll grid md:grid-cols-2 gap-10 items-center'>
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
            className='flex flex-col gap-6 items-center'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
         >
            {aboutCardData.map((data, index) => (
               <AboutCard
                  key={index}
                  data={data}
                  index={index}
               />
            ))}
         </motion.div>
      </div>
   );
};

export default About;