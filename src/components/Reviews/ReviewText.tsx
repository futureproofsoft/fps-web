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
      <div className='3xl:px-5 3xl:pb-10 3xl:text-xl mb:pb-2 xl:px-3 xl:pb-6 xl:text-lg'>
        <p className='3xl:text-[28px] mb:pb-[2px] mb:text-xl pb-1 font-bold xl:text-2xl'>
          {name}
        </p>
        <p className='3xl:text-xl mb:text-sm xl:text-base'>{title}</p>
      </div>
      <div className='relative'>
        <Quote className='3xl:w-16 3xl:-left-8 3xl:-top-8 mb:-left-4 mb:-top-3 mb:w-10 absolute rotate-180 lg:-left-6 lg:-top-4 xl:-left-4 xl:-top-6 xl:w-12' />
        <p className='3xl:text-xl mb:text-sm md:text-base lg:text-sm xl:text-base'>
          {message}
        </p>
        <Quote className='3xl:w-16 3xl:top-14 mb:top-16 mb:w-10 absolute right-0 sm:top-6 lg:top-8 xl:top-10   xl:w-12' />
      </div>
    </motion.div>
  );
};
