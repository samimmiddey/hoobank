import React from 'react';
import Button from '../UI/Button';

const ServiceCard = () => {
   return (
      <div className='section-padding'>
         <div className='grid grid-cols-auto md:grid-cols-3 items-center px-8 py-8 sm:px-10 sm:py-8 md:px-20 md:py-16 rounded-2xl bg-black-gradient'>
            <div className='md:col-span-2'>
               <h1 className='heading-h1'>Let's try our service now!</h1>
               <p className='text-gray-400 leading-relaxed lg:leading-perfect md:text-start mt-4'>
                  Everything you need to accept card payments and grow your business anywhere on the planet. Our services will cover all your needs.
               </p>
            </div>
            <div className='flex items-center mt-8 md:mt-0 justify-start md:justify-center'>
               <Button text='Get Started' />
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;