import * as React from 'react';

export type ServiceItemProps = {
  image: React.ReactNode;
  description: React.ReactNode;
};

export const ServiceItem = ({ image, description }: ServiceItemProps) => {
  return (
    <div className='border-greenText rounded-3xl border-[3px]'>
      <div className=' my-20 flex justify-center align-middle'>{image}</div>
      <div className='border-greenText mx-14 my-[52px] border-s-4 px-[26px]  text-5xl  font-bold leading-[52px]'>
        {description}
      </div>
    </div>
  );
};
