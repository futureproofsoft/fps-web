import Image from 'next/image';
import * as React from 'react';

import HeroImage from '../../../public/images/laptop.png';

export const Hero = () => {
  return (
    <div className='flex items-center justify-between py-28'>
      <div className='w-1/2'>
        <h2 className='pb-6 text-[68px] font-bold leading-none '>
          Let's turn your <span className='text-greenText'>idea</span> into an{' '}
          <span className='text-greenText'>extraordinary digital product</span>.
        </h2>
        <p className='border-greenText mt-4 border-s-4 px-3 text-2xl font-medium '>
          We have the experience, knowledge, and technical know-how to deliver
          an innovative digital product that will exceed your expectations.
        </p>
      </div>
      <div className='laptop-shadow w-5/12'>
        <Image src={HeroImage} alt='Hero image' />
      </div>
    </div>
  );
};
