'use client';
import * as React from 'react';

import { ServiceItem } from '@/components/Services/ServiceItem';

export const Services = () => {
  return (
    <section id='services' className='py-28'>
      <div>
        <h2 className='border-greenText border-s-4 px-3 text-2xl font-bold tracking-[4.8px]'>
          SERVICES
        </h2>
        <h3 className='pb-[100px] pt-7 text-6xl font-bold leading-none tracking-normal'>
          Areas we cover to <span className='text-greenText'>provide</span> our
          clients with a{' '}
          <span className='text-greenText'>complete experience</span>.
        </h3>
      </div>

      <ServiceItem />
    </section>
  );
};
