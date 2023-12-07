import * as React from 'react';

import { TechnologiesItem } from '@/components/Technologies/TechnologiesItem';

export const Technologies = () => {
  return (
    <section id='technologies' className='3xl:py-36 sm:py-14 lg:py-20 xl:py-28'>
      <div>
        <h5 className='border-greenText 3xl:text-2xl  border-s-4 px-3 font-bold tracking-[4.8px] sm:text-[12px]  md:text-sm xl:text-lg'>
          TECHNOLOGIES
        </h5>
        <h2 className='3xl:text-6xl  font-bold  leading-none tracking-normal sm:pb-5 sm:pt-2 sm:text-2xl lg:pb-14 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
          The <span className='text-greenText'>technologies</span> we apply to
          bring <span className='text-greenText'>your idea</span> to perfection.
        </h2>
      </div>
      <TechnologiesItem />
    </section>
  );
};
