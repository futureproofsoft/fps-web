import React from 'react';

export const Footer = () => {
  return (
    <footer className=' mb:pt-10 mx-auto mb-4 flex w-full items-center justify-center  md:pt-24 '>
      <p className='3xl:text-xl  mb:text-[8px] dark:text-gray-400 sm:text-xs md:text-sm xl:text-base'>
        © Future Proof Soft. All Rights Reserved.
        <a href='#' className='text-greenText font-bold '>
          {' '}
          Privacy policy
        </a>{' '}
        -{' '}
        <a href='#' className='text-greenText font-bold'>
          Terms of service
        </a>
      </p>
    </footer>
  );
};
