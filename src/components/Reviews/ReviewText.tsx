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
      <div className='3xl:px-5 3xl:pb-10 3xl:text-xl 2xl:px-3 2xl:pb-8 2xl:text-lg'>
        <p className='3xl:text-[28px] pb-2 font-bold 2xl:text-2xl'>{name}</p>
        <p className='3xl:text-xl 2xl:text-base'>{title}</p>
      </div>
      <div className='relative'>
        <Quote className='3xl:w-16 3xl:-left-8 3xl:-top-8 absolute rotate-180 2xl:-left-4 2xl:-top-6 2xl:w-12' />
        <p className='3xl:text-xl 2xl:text-[16px]'>{message}</p>
        <Quote className='3xl:w-16 3xl:top-14 absolute right-1 2xl:top-10 2xl:w-12' />
      </div>
    </motion.div>
  );
};
