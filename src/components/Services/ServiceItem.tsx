import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: React.ReactNode;
};

export const ServiceItem = ({ image, description }: ServiceItemProps) => {
  return (
    <div className='mb:w-full h-full'>
      <div className='border-greenText mb:w-[220px] flex flex-col rounded-3xl border-[3px] sm:w-full'>
        <div className='3xl:my-20 mb:my-6 flex  w-full justify-center align-middle lg:my-10 2xl:my-14'>
          {image}
        </div>
        <div className='border-greenText 3xl:text-5xl 3xl:my-[52px] 3xl:px-[26px] mb:mx-6 mb:my-[24px] mb:px-[14px] mb:text-base  border-s-4 font-bold md:text-xl lg:mx-8 lg:my-[26px]  lg:px-[20px] lg:text-2xl  xl:text-3xl 2xl:mx-14   2xl:my-[46px] 2xl:px-[22px] 2xl:text-4xl 2xl:leading-[42px]'>
          {description}
        </div>
      </div>
    </div>
  );
};
