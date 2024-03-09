import React from 'react';
import { motion } from 'framer-motion';

export const Triggeredscroll = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl text-black'>React Scroll triggered Animation using framer-motion</h2>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box /> 
      <Box />
    </div>
  );
};

function Box() {
  return (
    <motion.div
      className='w-32 h-32 bg-blue-800 m-32 mt-5'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
    </motion.div>
  );
}

export default Triggeredscroll;
