import Linkedin from 'public/svg/linkedin.svg';
import Mail from 'public/svg/mail.svg';
import React from 'react';

export const Footer = () => {
  return (
    <footer className=' mb:pt-10 mx-auto mb-4 flex w-full flex-col items-center justify-center  md:pt-24 '>
      <div className='mb:hidden flex-col justify-end md:flex'>
        <a
          href='mailto:info@futureproofsoft.com'
          className='3xl:text-xl flex items-center gap-3 xl:text-base 2xl:text-lg'
        >
          <Mail className='mb:w-[26px] m-1 flex 2xl:w-[32px] ' />
          info@futureproofsoft.com
        </a>

        <a
          href='https://rs.linkedin.com/company/future-proof-soft'
          className='3xl:text-xl flex items-center gap-3 xl:text-base 2xl:text-lg'
        >
          <Linkedin className='mb:w-[26px] m-1 2xl:w-[32px]' />
          Future-Proof Soft
        </a>
      </div>
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
