import React from 'react';
import { quotes } from '../../assets';

const TestimonialCard = ({ data, index }) => {
   const bgColor = index === 0 ? 'bg-black-gradient' : '';

   return (
      <div
         className={`py-10 px-6 sm:py-12 sm:px-8 rounded-2xl flex flex-col justify-between ${bgColor} testimonial-card`}
         style={{
            minHeight: '340px'
         }}
      >
         <img src={quotes} alt="" style={{ height: '50px', width: '50px' }} />
         <p className='mt-6 lg:mt-0'>{data.text}</p>
         <div className='flex gap-6 items-center md:items-start md:flex-col lg:flex-row lg:items-center mt-8 lg:mt-0'>
            <img src={data.img} alt="" style={{ height: '75px', width: '75px' }} />
            <div>
               <h1 className='text-lg font-semibold'>{data.name}</h1>
               <p className='text-gray-400 mt-1 text-sm'>{data.position}</p>
            </div>
         </div>
      </div>
   );
};

export default TestimonialCard;