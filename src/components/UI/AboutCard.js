import React from 'react';

const AboutCard = ({ data, index }) => {
   return (
      <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 px-6 py-4 rounded-xl ${index === 1 && 'bg-black-gradient'} about-card w-full xl:w-3/4`}>
         <div className='p-3 rounded-full bg-gray-900 flex items-center justify-center'>
            <data.icon className='text-3xl text-secondary' />
         </div>
         <div>
            <h4 className='text-lg'>
               {data.title}
            </h4>
            <p className='text-gray-400 text-md leading-relaxed mt-2'>
               {data.desc}
            </p>
         </div>
      </div>
   );
};

export default AboutCard;