import * as React from 'react';

import { TechnologiesItem } from '@/components/Technologies/TechnologiesItem';

export const Technologies = () => {
  return (
    <div className='py-28'>
      <div>
        <h3 className='border-greenText border-s-4 px-3 text-2xl font-bold tracking-[4.8px]'>
          TEHNOLOGIES
        </h3>
        <h2 className='pb-20 pt-7 text-6xl font-bold leading-none tracking-normal'>
          The <span className='text-greenText'>technologies</span> we apply to
          bring <span className='text-greenText'>your idea</span> to perfection.
        </h2>
      </div>
      <TechnologiesItem />
    </div>
  );
};
