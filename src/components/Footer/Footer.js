import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { logo } from '../../assets';
import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';
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

const footerLinks = [
   {
      title: 'Useful Links',
      links: ['Contacts', 'How it works', 'Create', 'Explore', 'Terms & Services']
   },
   {
      title: 'Community',
      links: ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletter']
   },
   {
      title: 'Partner',
      links: ['Our Partners', 'Become a Partner']
   }
];

const Footer = () => {
   const [toggle, setToggle] = useState({ value: false, index: null });

   const accordionHandler = (index) => {
      if (!toggle.value) {
         setToggle({ value: true, index: index });
      } else {
         setToggle({ value: false, index: null });
      }
   }

   return (
      <>
         <div className='section-padding grid md:grid-cols-4'>
            <motion.div
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
               viewport={{ once: true }}
            >
               <a href='#home' className='flex items-center md:gap-3 gap-2'>
                  <img src={logo} alt="" className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ' />
                  <h1 className='text-xl lg:text-2xl font-semibold'>
                     hoo<span className='text-secondary'>bank</span>
                  </h1>
               </a>
               <p className='text-gray-400 leading-relaxed lg:leading-perfect md:text-start mt-6'>
                  A new way to make the payments easy, reliable and secure.
               </p>
            </motion.div>
            {/* Normal Footer */}
            <motion.div
               className='md:col-span-3 hidden sm:grid grid-column-auto sm:grid-cols-3 gap-8 mt-10 md:mt-0'
               variants={parent}
               initial='hidden'
               whileInView='visible'
               viewport={{ once: true }}
            >
               {footerLinks.map((item, index) => (
                  <motion.div
                     key={index}
                     className='md:justify-self-center'
                     variants={children}
                     viewport={{ once: true }}
                  >
                     <p className='text-lg'>{item.title}</p>
                     <ul className='flex flex-col gap-4 mt-10 items-start'>
                        {item.links.map((link, index) => (
                           <li key={index} className='text-base ease-linear duration-200 text-gray-400 cursor-pointer hover:text-secondary'>
                              {link}
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </motion.div>
            {/* Accordion */}
            <motion.div
               className='grid sm:hidden gap-6 mt-10'
               variants={parent}
               initial='hidden'
               whileInView='visible'
               viewport={{ once: true }}
            >
               {footerLinks.map((item, index) => (
                  <motion.div
                     key={index}
                     className='border-solid border-2 border-gray-800 px-4 py-4 rounded-xl'
                     variants={children}
                     viewport={{ once: true }}
                  >
                     <div>
                        <div
                           onClick={() => accordionHandler(index)}
                           className='flex items-center justify-between cursor-pointer'
                        >
                           <p className='sm:text-lg'>{item.title}</p>
                           <RiArrowDownSLine
                              style={{
                                 transform: toggle.value && toggle.index === index ? 'rotate(180deg)' : 'rotate(0)',
                                 transition: '500ms ease'
                              }}
                           />
                        </div>
                        <ul className={`flex flex-col gap-4 items-start ease-in-out duration-500  overflow-hidden
                        ${toggle.value && toggle.index === index ? 'h-auto max-h-96 mt-10' : 'max-h-0'}`}
                        >
                           {item.links.map((link, index) => (
                              <li
                                 key={index}
                                 className='text-sm ease-linear duration-200 text-gray-400 cursor-pointer hover:text-secondary'
                              >
                                 {link}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
         <div className='w-full bg-gray-800 mt-6 mb-5' style={{ height: '1px' }} />
         <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0'>
            <p className='text-gray-400 text-center'>
               Copyright &copy; Hoobank, 2022. All Rights Reserved.
            </p>
            <div className='flex items-center gap-6'>
               <RiFacebookCircleFill style={{ fontSize: '1.75rem', color: '#6b7280' }} />
               <AiFillTwitterCircle style={{ fontSize: '1.75rem', color: '#6b7280' }} />
               <RiInstagramFill style={{ fontSize: '1.75rem', color: '#6b7280' }} />
               <RiLinkedinBoxFill style={{ fontSize: '1.75rem', color: '#6b7280' }} />
            </div>
         </div>
      </>
   );
};

export default Footer;