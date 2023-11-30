import Laptop from 'public/svg/Laptop.svg';
import * as React from 'react';

export const Hero = () => {
  return (
    <section className='3xl:py-36 flex items-center justify-between 2xl:py-20'>
      <div className='animation-slide-left w-1/2'>
        <h2 className='3xl:text-[68px] pb-6 font-bold leading-none 2xl:text-[55px]'>
          Let's turn your <span className='text-greenText'>idea</span> into{' '}
          <br />
          an{' '}
          <span className='text-greenText'>
            extraordinary digital <br />
            product
          </span>
          .
        </h2>
        <p className='border-greenText 3xl:text-2xl border-s-4 px-3 leading-[30px] 2xl:text-lg '>
          We have the experience, knowledge, and technical know-how to
          <br /> deliver an innovative digital product that will exceed your
          expectations.
        </p>
      </div>
      <div className='laptop-shadow animation-slide-right w-5/12 '>
        <Laptop alt='Laptop' />
      </div>
    </section>
  );
};
