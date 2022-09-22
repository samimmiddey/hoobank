import React, { useCallback, useEffect, useState } from 'react';
import { logo } from '../../assets';
import Sidebar from './Sidebar';
import { HiMenuAlt4 } from 'react-icons/hi';

const navlinks = ['Home', 'About', 'Features', 'Products', 'Clients'];

const Navbar = ({ open, setOpen }) => {
   const [activeNav, setActiveNav] = useState(false);

   const handleScroll = useCallback(() => {
      const sections = document.querySelectorAll('.section-scroll');
      const navLinks = document.querySelectorAll(".main-nav ul li");
      const drawerLinks = document.querySelectorAll(".drawer-nav .nav-links a");

      if (window.scrollY > 50) {
         setActiveNav(true);
      } else {
         setActiveNav(false);
      }

      let current = '';
      sections.forEach((section) => {
         const sectionTop = section.offsetTop;
         if (window.pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
         }
      });

      navLinks.forEach((link, index) => {
         link.classList.remove('active');
         if (sections[index].id === current) {
            link.classList.add('active');
         }
      });

      drawerLinks.forEach((link, index) => {
         link.classList.remove('drawer-active');
         if (sections[index].id === current) {
            link.classList.add('drawer-active');
         }
      });
   }, []);

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [handleScroll]);

   return (
      <>
         <div className={`main-nav fixed top-0 left-0 right-0 z-30 ${activeNav ? 'nav-glass' : ''}`}>
            <div className='container flex items-center justify-between h-18 sm:h-20 w-full'>
               <a href='#home' className='flex items-center md:gap-3 gap-2'>
                  <img src={logo} alt="" className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ' />
                  <h1 className='text-xl lg:text-2xl font-semibold'>hoo<span className='text-secondary'>bank</span></h1>
               </a>
               {/* Nav Links */}
               <div className='hidden sm:block'>
                  <ul className='flex lg:gap-20 md:gap-16 gap-10'>
                     {navlinks.map((link, index) => (
                        <li
                           key={index}
                           className={`hover:text-secondary ease-linear duration-200 ${index === 0 && 'active'}`}
                        >
                           <a href={`#${link.toLowerCase()}`} className='text-sm lg:text-base'>{link}</a>
                        </li>
                     ))}
                  </ul>
               </div>
               {/* Sidebar */}
               <div className='block sm:hidden'>
                  <div
                     onClick={() => setOpen(true)}
                     className='h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center'
                  >
                     <HiMenuAlt4 className='text-2xl cursor-pointer' />
                  </div>
               </div>
            </div>
         </div>
         <Sidebar open={open} setOpen={setOpen} />
      </>
   );
};

export default Navbar;