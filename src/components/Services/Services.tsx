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
    <section id='services' className='3xl:py-36 xl:py-28'>
      <h3 className='border-greenText 3xl:text-2xl border-s-4 px-3 font-bold tracking-[4.8px] xl:text-lg'>
        SERVICES
      </h3>
      <h2 className='3xl:pb-[100px] 3xl:text-6xl pt-7 font-bold leading-none tracking-normal xl:pb-[70px] xl:text-[40px] 2xl:text-[44px]'>
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
