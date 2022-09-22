import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navigation = () => {
   const [open, setOpen] = useState(false);

   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress , {
      stiffness: 150,
      damping: 30,
      restDelta: 0.001
   });

   return (
      <>
         <Navbar open={open} setOpen={setOpen} />
         <div
            onClick={() => setOpen(false)}
            className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-60 ${open ? 'block' : 'hidden'} z-40`}
         />
         <motion.div
            className='fixed top-18 sm:top-20 left-0 right-0 h-1 bg-blue-gradient z-30'
            style={{ scaleX, transformOrigin: '0%' }}
         />
      </>
   );
};

export default Navigation;