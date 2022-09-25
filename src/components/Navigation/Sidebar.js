import React from 'react';
import { logo } from '../../assets';
import { FaTimes } from 'react-icons/fa';

const navlinks = ['Home', 'About', 'Features', 'Products', 'Clients'];

const Sidebar = ({ open, setOpen }) => {
   const menu = open ? 'right-0' : '-right-64';

   if (open) {
      document.body.classList.add('drawer-open');
   } else {
      document.body.classList.remove('drawer-open');
   }

   return (
      <div className={`drawer-nav pt-7 pb-7 pl-6 pr-6 fixed top-0 bottom-0 w-64 drawer rounded-l-2xl ${menu} ease-in-out duration-500 z-50`}>
         <div className='flex items-center justify-between'>
            <a href='#home' className='flex items-center md:gap-3 gap-2'>
               <img src={logo} alt="" className='h-8 w-8' />
               <h1 className='text-xl font-semibold'>care<span className='text-secondary'>bank</span></h1>
            </a>
            <FaTimes onClick={() => setOpen(false)} className='text-2xl cursor-pointer' />
         </div>
         <div className='mt-8 flex flex-col gap-6 nav-links'>
            {navlinks.map((link, index) => (
               <a
                  onClick={() => setOpen(false)}
                  key={index}
                  className={`hover:text-secondary hover:ease-linear duration-200 text-sm h-10 pl-4 rounded-md flex items-center ${index === 0 && 'drawer-active'}`}
                  href={`#${link.toLowerCase()}`}
               >
                  {link}
               </a>
            ))}
         </div>
      </div >
   );
};

export default Sidebar;