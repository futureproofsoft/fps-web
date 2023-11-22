import CustomDevelopmentIcon from 'public/svg/custom-development-illustration.svg';
import MobileApplicationsIcon from 'public/svg/mobile-app-illustration.svg';
import UIUXIcon from 'public/svg/uxui-design-illustration.svg';
import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: React.ReactNode;
};

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
        UX/UI
        <br />
        Design
      </>
    ),
  },
];

export const ServiceItem = () => {
  return (
    <div className='grid grid-cols-3 gap-6 '>
      {data.map((item, index) => (
        <div key={index} className='border-greenText rounded-3xl border-[3px]'>
          <div className=' my-20 flex justify-center align-middle'>
            {item.image}
          </div>
          <div className='border-greenText mx-14 my-[52px] border-s-4 px-[26px]  text-5xl  font-bold leading-[52px]'>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};
