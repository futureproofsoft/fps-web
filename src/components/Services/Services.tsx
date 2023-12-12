'use client';
import CustomDevelopmentIcon from 'public/svg/custom-development-illustration.svg';
import MobileApplicationsIcon from 'public/svg/mobile-app-illustration.svg';
import UIUXIcon from 'public/svg/uxui-design-illustration.svg';
import * as React from 'react';

import { ServiceItem } from '@/components/Services/ServiceItem';

const data = [
  {
    image: <MobileApplicationsIcon className='mb:w-2/3 sm:w-1/2' />,
    description: (
      <>
        Mobile
        <br />
        Applications
      </>
    ),
  },
  {
    image: <CustomDevelopmentIcon className='mb:w-2/3 sm:w-1/2' />,
    description: (
      <>
        Custom
        <br />
        Development
      </>
    ),
  },
  {
    image: <UIUXIcon className='mb:w-2/3 sm:w-1/2' />,
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
    <section id='services' className='3xl:py-36 mb:pt-20  lg:py-20 xl:py-28 '>
      <h5 className='border-greenText 3xl:text-2xl mb:text-sm  border-s-4 px-3 font-bold tracking-[4.8px] md:text-sm lg:text-base xl:text-lg'>
        SERVICES
      </h5>
      <h2 className='3xl:text-6xl  mb:pb-12  mb:pt-6  mb:text-2xl mb:leading-none font-bold leading-none tracking-normal lg:pb-14 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
        Areas we cover to <span className='text-greenText'>provide</span> our
        clients with a{' '}
        <span className='text-greenText'>complete experience</span>.
      </h2>

      <div className='mb:flex  mb:flex-row mb:-mx-6 mb:px-6 gap-6 overflow-x-auto sm:grid sm:grid-cols-3 '>
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
