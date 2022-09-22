import React from 'react';

const Button = ({ text }) => {
   return (
      <button className='px-6 py-3 sm:px-7 lg:px-8 lg:py-4 bg-secondary rounded-md text-black font-semibold text-sm sm:text-md'>
         {text}
      </button>
   );
};

export default Button;