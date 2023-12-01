import React from 'react';

export const Footer = () => {
  return (
    <footer className='3xl:mt-48 mx-auto mb-4 flex w-full items-center justify-center lg:mt-24 xl:mt-28'>
      <p className='3xl:text-xl  dark:text-gray-400 lg:text-sm xl:text-base'>
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
