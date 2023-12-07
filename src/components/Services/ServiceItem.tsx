import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: React.ReactNode;
};

export const ServiceItem = ({ image, description }: ServiceItemProps) => {
  return (
    <div className='border-greenText rounded-3xl border-[3px]'>
      <div className='3xl:my-20 flex justify-center align-middle sm:my-6 lg:my-10 2xl:my-14'>
        {image}
      </div>
      <div className='border-greenText 3xl:text-5xl 3xl:my-[52px] 3xl:px-[26px] border-s-4 font-bold sm:mx-6 sm:my-[24px]  sm:px-[14px] sm:text-base md:text-xl lg:mx-8 lg:my-[26px]  lg:px-[20px] lg:text-2xl  xl:text-3xl 2xl:mx-14   2xl:my-[46px] 2xl:px-[22px] 2xl:text-4xl 2xl:leading-[42px]'>
        {description}
      </div>
    </div>
  );
};
