import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: React.ReactNode;
};

export const ServiceItem = ({ image, description }: ServiceItemProps) => {
  return (
    <div className='w-full'>
      <div className='border-greenText mb:w-[220px] flex flex-col rounded-3xl border-[3px] sm:w-[320px] md:w-full'>
        <div className='3xl:my-8 mb:my-6 flex w-full justify-center align-middle sm:my-6 sm:px-6 lg:my-10 2xl:my-6'>
          {image}
        </div>
        <div className='border-greenText 3xl:text-5xl 3xl:my-6 3xl:px-[26px] mb:mx-6 mb:mb-4 mb:px-[14px]  mb:text-base  border-s-4 font-bold sm:text-xl md:text-xl lg:mx-8 lg:mb-8  lg:px-[20px] lg:text-2xl  xl:text-3xl 2xl:mx-10   2xl:mb-10 2xl:px-[22px] 2xl:text-4xl 2xl:leading-[42px]'>
          {description}
        </div>
      </div>
    </div>
  );
};
