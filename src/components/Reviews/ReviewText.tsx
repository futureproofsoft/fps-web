import { motion } from 'framer-motion';
import Quote from 'public/svg/quotation.svg';
import React from 'react';

interface Props {
  name: string;
  title: string;
  message: string;
  direction: number;
}

export const ReviewText: React.FC<Props> = ({ name, title, message }) => {
  const textVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={textVariants}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{ opacity: { duration: 1.0 } }}
      className='review-text'
    >
      <div className='px-5 pb-10 text-xl text-white'>
        <p className='pb-2 text-[28px] font-bold'>{name}</p>
        <p className='text-xl'>{title}</p>
      </div>
      <div className='relative'>
        <Quote className='absolute -left-8 -top-8 w-16 rotate-180' />
        <p className='font-sans text-xl text-white'>{message}</p>
        <Quote className='absolute right-1 top-14 w-16' />
      </div>
    </motion.div>
  );
};
