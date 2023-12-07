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
    <section id='services' className='3xl:py-36  lg:py-20 xl:py-28 '>
      <h5 className='border-greenText 3xl:text-2xl  border-s-4 px-3 font-bold tracking-[4.8px] md:text-sm xl:text-lg'>
        SERVICES
      </h5>
      <h2 className='3xl:text-6xl  font-bold  tracking-normal md:pb-5 md:pt-2 md:text-2xl md:leading-none lg:pb-14 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
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
