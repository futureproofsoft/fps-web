import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: string;
};

export const ServiceItem = ({ image, description }: ServiceItemProps) => {
  return (
    <div className='grid grid-cols-1'>
      <div className='px-35 border-greenText flex  flex-col items-center rounded-3xl border-2 border-solid pt-24 text-white'>
        {image}
        <div className='border-greenText mb-12 ml-12 mr-60 mt-24 border-s-8 pl-6 text-5xl font-bold'>
          {description}
        </div>
      </div>
    </div>
  );
};
