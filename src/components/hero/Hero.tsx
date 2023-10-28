import Image from 'next/image';
import * as React from 'react';

import HeroImage from '../../../public/images/laptop.png';

export const Hero = () => {
  return (
    <div className='flex items-center justify-between pt-14'>
      <div className='w-5/12'>
        <h2 className='font-large text-4xl'>
          Let's turn your <strong className='text-teal-400'>idea</strong> into
          <br />
          an{' '}
          <strong className='text-teal-400'>
            extraordinary digital product
          </strong>
          .
        </h2>
        <p className='mt-4 border-s-4 border-teal-500 px-3 text-xs'>
          We have the experience, knowledge, and technical know-how <br /> to
          deliver an innovative digital product that will exceed your
          expectations.
        </p>
      </div>
      <div>
        <Image src={HeroImage} alt='Hero image' width={450} />
      </div>
    </div>
  );
};
