import Quote from 'public/svg/quotation.svg';
import React from 'react';

export type ReviewItemProps = {
  name: string;
  title: string;
  message: string;
  active: boolean;
};
export const ReviewItem = ({
  name,
  title,
  active,
  message,
}: ReviewItemProps) => {
  return (
    <div
      className={`bg-custom-gradient from-lightGreen to-darkBlue z-10 -mr-28 flex flex-col  rounded-3xl p-14 text-white ${
        active ? '' : 'hidden'
      }`}
    >
      <div className='px-5 pb-10 text-xl text-white '>
        <p className='pb-2 text-[28px] font-bold'>{name}</p>
        <p className='text-xl '>{title}</p>
      </div>
      <div className='relative'>
        <Quote className='absolute -left-8 -top-8 w-16 rotate-180' />
        <p className='font-sans text-xl text-white '>{message}</p>
        <Quote className='absolute right-1 top-14 w-16' />
      </div>
    </div>
  );
};
