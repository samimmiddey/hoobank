import React, { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const BackToTop = () => {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.pageYOffset > 100) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      });
   }, []);

   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   return (
      <div
         onClick={handleClick}
         className={`fixed h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center bg-gray-800 cursor-pointer ease-out duration-300 right-6 sm:right-12 ${visible ? 'bottom-6 sm:bottom-10' : '-bottom-16'}`}
      >
         <RiArrowUpSLine style={{ fontSize: '2rem' }} />
      </div>
   );
};

export default BackToTop;