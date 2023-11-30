import * as React from 'react';

import { TechnologiesItem } from '@/components/Technologies/TechnologiesItem';

export const Technologies = () => {
  return (
    <section id='technologies' className='3xl:py-36 2xl:py-28'>
      <div>
        <h3 className='border-greenText border-s-4 px-3 text-2xl font-bold tracking-[4.8px] 2xl:text-xl'>
          TECHNOLOGIES
        </h3>
        <h2 className='3xl:text-6xl pb-20 pt-7 font-bold leading-none tracking-normal 2xl:text-[44px]'>
          The <span className='text-greenText'>technologies</span> we apply to
          bring <span className='text-greenText'>your idea</span> to perfection.
        </h2>
      </div>
      <TechnologiesItem />
    </section>
  );
};
