import * as React from 'react';

import { TechnologiesItem } from '@/components/Technologies/TechnologiesItem';

export const Technologies = () => {
  return (
    <section id='technologies' className='3xl:py-36 xl:py-28'>
      <div>
        <h3 className='border-greenText 3xl:text-2xl border-s-4 px-3 font-bold tracking-[4.8px] xl:text-lg'>
          TECHNOLOGIES
        </h3>
        <h2 className='3xl:text-6xl pb-20 pt-7 font-bold leading-none tracking-normal xl:text-[40px] 2xl:text-[44px]'>
          The <span className='text-greenText'>technologies</span> we apply to
          bring <span className='text-greenText'>your idea</span> to perfection.
        </h2>
      </div>
      <TechnologiesItem />
    </section>
  );
};
