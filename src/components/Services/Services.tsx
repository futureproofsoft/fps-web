'use client';
import CustomDevelopmentIcon from 'public/svg/custom-development-illustration.svg';
import MobileApplicationsIcon from 'public/svg/mobile-app-illustration.svg';
import UIUXIcon from 'public/svg/uxui-design-illustration.svg';
import * as React from 'react';

import { ServiceItem } from '@/components/Services/ServiceItem';

const data = [
  {
    image: <MobileApplicationsIcon className='w-1/2' />,
    description: (
      <>
        Mobile
        <br />
        Applications
      </>
    ),
  },
  {
    image: <CustomDevelopmentIcon className='w-1/2' />,
    description: (
      <>
        Custom
        <br />
        Development
      </>
    ),
  },
  {
    image: <UIUXIcon className='w-1/2' />,
    description: (
      <>
        UI/UX
        <br />
        Design
      </>
    ),
  },
];

export const Services = () => {
  return (
    <section id='services' className='py-60'>
      <h3 className='border-greenText border-s-4 px-3 text-2xl font-bold tracking-[4.8px]'>
        SERVICES
      </h3>
      <h2 className='pb-[100px] pt-7 text-6xl font-bold leading-none tracking-normal'>
        Areas we cover to <span className='text-greenText'>provide</span> our
        clients with a{' '}
        <span className='text-greenText'>complete experience</span>.
      </h2>

      <div className='grid grid-cols-3 gap-6 '>
        {data.map((item, index) => (
          <ServiceItem
            key={index}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
