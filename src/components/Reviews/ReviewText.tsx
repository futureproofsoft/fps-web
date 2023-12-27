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
    <>
      <motion.div
        variants={textVariants}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{ opacity: { duration: 1.0 } }}
        className='review-text mb:p-2 md:pr-16'
      >
        <div className='flex flex-col'>
          <p className='mb:text-xl pb-1 font-bold  md:text-2xl xl:text-2xl 2xl:text-3xl'>
            {name}
          </p>
          <p className='mb:text-lg pb-5 font-bold  md:text-xl xl:text-2xl 2xl:text-2xl'>
            {title}
          </p>
          <div className='mb:-ml-6 mb:-mb-6 md:-ml-12'>
            <Quote className='3xl:w-16 mb:w-10  rotate-180 xl:w-12' />
          </div>
          <p className='mb:text-sm mb:pb-10  md:text-base lg:text-base xl:text-lg 2xl:text-xl'>
            {message}
          </p>
          <div className='mb:-mr-2 -m-10 flex items-end justify-end'>
            <Quote className='3xl:w-16 mb:w-10 flex items-end justify-end sm:mr-36 md:mr-20  xl:w-12' />
          </div>
        </div>
      </motion.div>
      <div className='relative'></div>
    </>
  );
};
