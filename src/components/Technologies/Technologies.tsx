import * as React from 'react';

import { TechnologiesItem } from '@/components/Technologies/TechnologiesItem';

export const Technologies = () => {
  return (
    <section
      id='technologies'
      className='3xl:py-36  mb:pt-20 sm:py-14 lg:py-20 xl:py-28'
    >
      <div>
        <h5 className='border-greenText 3xl:text-2xl mb:text-sm  border-s-4 px-3 font-bold tracking-[4.8px] md:text-sm lg:text-base xl:text-lg'>
          TECHNOLOGIES
        </h5>
        <h2 className='3xl:text-6xl  mb:pt-6   mb:pb-20 mb:text-2xl  mb:leading-none font-bold leading-none tracking-normal md:pb-24  lg:pb-24 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
          The <span className='text-greenText'>technologies</span> we apply to
          bring <span className='text-greenText'>your idea</span> to perfection.
        </h2>
      </div>
      <div className='mb:-mx-6'>
        <TechnologiesItem />
      </div>
    </section>
  );
};
