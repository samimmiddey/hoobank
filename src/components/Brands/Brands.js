import React from 'react';
import { airbnb, binance, coinbase, dropbox } from '../../assets';

const Brands = () => {
   return (
      <div className='section-padding flex items-center justify-around flex-wrap gap-10'>
         {[airbnb, binance, coinbase, dropbox].map((img, index) => (
            <img
               key={index}
               src={img}
               alt=''
               className='h-6 sm:h-10'
            />
         ))}
      </div>
   );
};

export default Brands;