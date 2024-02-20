import Linkedin from 'public/svg/ElementSvg/linkedin.svg';
import Mail from 'public/svg/ElementSvg/mail.svg';
import React from 'react';

export const Footer = () => {
  return (
    <footer className=' mb:pt-10 mx-auto mb-4 flex w-full flex-col items-center justify-center  md:pt-24 '>
      <div className=' mb:flex flex flex-col justify-end gap-1'>
        <a
          href='https://rs.linkedin.com/company/future-proof-soft'
          className='3xl:text-xl flex items-center gap-3 md:hidden xl:text-base 2xl:text-lg'
        >
          <Linkedin className='mb:w-[26px] m-1 2xl:w-[32px]' />
          Future-Proof Soft
        </a>
        <a
          href='mailto:info@futureproofsoft.com'
          className='3xl:text-xl flex items-center gap-3 md:hidden xl:text-base 2xl:text-lg'
        >
          <Mail className='mb:w-[26px] m-1 flex 2xl:w-[32px] ' />
          info@futureproofsoft.com
        </a>
        <p className='3xl:text-xl  mb:text-xs dark:text-gray-400 sm:text-xs md:text-sm xl:text-base'>
          © Future Proof Soft. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
