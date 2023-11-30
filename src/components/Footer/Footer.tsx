import React from 'react';

export const Footer = () => {
  return (
    <footer className='mx-auto mb-4 mt-48 flex w-full items-center justify-center 2xl:mt-28'>
      <p className='3xl:text-xl  dark:text-gray-400 2xl:text-base'>
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
