import Laptop from 'public/svg/Laptop.svg';
import * as React from 'react';

export const Hero = () => {
  return (
    <section className='3xl:py-36 flex items-center justify-between sm:py-12 lg:py-20'>
      <div className='animation-slide-left w-1/2'>
        <h2 className='3xl:text-[68px] pb-6 font-bold leading-none sm:text-[25px] lg:text-[40px] xl:text-[50px]  2xl:text-[55px]'>
          Let's turn your <span className='text-greenText'>idea</span> into{' '}
          <br />
          an{' '}
          <span className='text-greenText'>
            extraordinary digital <br />
            product
          </span>
          .
        </h2>
        <p className='border-greenText 3xl:text-2xl border-s-4 px-3 sm:text-[10px] sm:leading-3 md:text-xs lg:text-sm lg:leading-[16px]  xl:text-base  xl:leading-[20px] 2xl:text-lg 2xl:leading-[25px] '>
          We have the experience, knowledge, and technical know-how to
          <br className='sm:hidden lg:flex' /> deliver an innovative digital
          product that will exceed your expectations.
        </p>
      </div>
      <div className='laptop-shadow animation-slide-right w-5/12 '>
        <Laptop alt='Laptop' />
      </div>
    </section>
  );
};
