import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: React.ReactNode;
};

export const ServiceItem = ({ image, description }: ServiceItemProps) => {
  return (
    <div className='border-greenText rounded-3xl border-[3px]'>
      <div className='flex justify-center align-middle lg:my-10 2xl:my-20'>
        {image}
      </div>
      <div className='border-greenText 3xl:text-5xl border-s-4 font-bold lg:mx-8 lg:my-[26px] lg:px-[20px] lg:text-2xl  xl:text-3xl 2xl:mx-14  2xl:my-[52px] 2xl:px-[26px] 2xl:text-4xl 2xl:leading-[52px]'>
        {description}
      </div>
    </div>
  );
};
