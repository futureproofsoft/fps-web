import Laptop from 'public/svg/Laptop.svg';
import * as React from 'react';

export const Hero = () => {
  return (
    <section className='flex items-center justify-between py-28'>
      <div className='animation-slide-left w-1/2'>
        <h2 className='pb-6 text-[68px] font-bold leading-none '>
          Let's turn your <span className='text-greenText'>idea</span> into{' '}
          <br />
          an{' '}
          <span className='text-greenText'>extraordinary digital product</span>.
        </h2>
        <p className='border-greenText border-s-4 px-3 text-2xl font-medium '>
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
