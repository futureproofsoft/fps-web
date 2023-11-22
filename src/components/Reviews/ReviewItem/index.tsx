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
      className={`bg-custom-gradient from-lightGreen to-darkBlue z-10 -mr-20 flex transform flex-col rounded-3xl text-white transition-transform duration-700 ${
        active
          ? 'translate-x-0 opacity-100'
          : 'absolute -top-10 -translate-x-full opacity-0'
      }`}
    >
      <div className='mb-5 flex flex-row'>
        <div className='mt-5 flex flex-col px-10 pb-10 font-sans text-xl text-white '>
          <p className='opacity-1 text-[28px] font-bold'>{name}</p>
          <p className='opacity-1 text-xl '>{title}</p>
        </div>
      </div>
      <p className='px-10 pb-10 font-sans text-xl text-white '>{message}</p>
    </div>
  );
};
