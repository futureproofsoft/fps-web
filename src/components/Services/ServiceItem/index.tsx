import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: string;
};

export const ServiceItem = ({ image, description }: ServiceItemProps) => {
  return (
    <div className='grid grid-cols-1'>
      <div className='px-35 border-greenText flex flex-col items-center rounded-3xl border-2 border-solid pt-24 text-white'>
        {image}
        <div className='border-greenText ml-13 mb-12 mt-24 w-3/4 border-s-8 pl-6 font-bold md:text-3xl lg:text-5xl'>
          {description}
        </div>
      </div>
    </div>
  );
};
