import React from 'react';

export const Footer = () => {
  return (
    <footer className='mx-auto mb-6 mt-60 flex w-full max-w-screen-xl items-center justify-center'>
      <span className='text-xl text-white dark:text-gray-400 sm:text-center'>
        © Future Proof Soft. All Rights Reserved.
        <a href='#' className='text-greenText font-bold hover:underline'>
          {' '}
          Privacy policy
        </a>{' '}
        -{' '}
        <a href='#' className='text-greenText font-bold hover:underline'>
          Terms of service
        </a>
      </span>
    </footer>
  );
};
