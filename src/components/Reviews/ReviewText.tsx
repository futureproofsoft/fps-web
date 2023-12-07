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
      <div className='3xl:px-5 3xl:pb-10 3xl:text-xl sm:pb-2 xl:px-3 xl:pb-6 xl:text-lg'>
        <p className='3xl:text-[28px] pb-1 font-bold sm:pb-[2px] sm:text-xl xl:text-2xl'>
          {name}
        </p>
        <p className='3xl:text-xl sm:text-sm xl:text-base'>{title}</p>
      </div>
      <div className='relative'>
        <Quote className='3xl:w-16 3xl:-left-8 3xl:-top-8 absolute rotate-180 sm:-left-4 sm:-top-3 sm:w-10 lg:-left-6 lg:-top-4 xl:-left-4 xl:-top-6 xl:w-12' />
        <p className='3xl:text-xl sm:text-sm md:text-base lg:text-sm xl:text-base'>
          {message}
        </p>
        <Quote className='3xl:w-16 3xl:top-14 absolute right-0 sm:top-6 sm:w-10 lg:top-8 xl:top-10   xl:w-12' />
      </div>
    </motion.div>
  );
};
