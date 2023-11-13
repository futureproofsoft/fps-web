'use client';
import CustomDevelopmentIcon from 'public/svg/custom-development-illustration.svg';
import MobileApplicationsIcon from 'public/svg/mobile-app-illustration.svg';
import UIUXIcon from 'public/svg/uxui-design-illustration.svg';
import * as React from 'react';

import { ServiceItem } from '@/components/ServiceItem';
const data = [
  {
    image: <MobileApplicationsIcon className='' width='252px' height='360px' />,
    description: 'Mobile Applications',
  },
  {
    image: <CustomDevelopmentIcon width='252px' height='360px' />,
    description: 'Custom Development',
  },
  {
    image: <UIUXIcon width='252px' height='360px' />,
    description: 'UI/UX Design',
  },
];
export default function ContactUs() {
  return (
    <section>
      <div className='gap-10'>
        <h2 className='border-greenText mb-7 border-s-4 px-3 text-2xl uppercase text-white'>
          Services
        </h2>
        <p className=' text-6xl font-bold tracking-normal text-white '>
          Areas we cover to <span className='text-greenText'>provide</span> our
          clients with a
          <span className='text-greenText'> complete experience</span>.
        </p>
        <div className='my-32 grid grid-cols-3 space-x-8'>
          {data.map((item) => (
            <ServiceItem
              key={item.description}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
