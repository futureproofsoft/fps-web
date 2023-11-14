import Image, { StaticImageData } from 'next/image';
import React from 'react';

export type ReviewItemProps = {
  image: StaticImageData;
  name: string;
  title: string;
  message: string;
  active: boolean;
};
export const ReviewItem = ({
  image,
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
        <div className='mx-10 flex flex-row rounded-bl-full rounded-br-full bg-white text-black'>
          <Image
            src={image}
            width={100}
            height={100}
            className='mx-1 mb-1 mt-8 '
            alt='Profile Picture'
          />
        </div>
        <div className='mt-16 flex flex-col'>
          <p className='opacity-1 text-[28px] font-bold'>{name}</p>
          <p className='opacity-1 text-xl '>{title}</p>
        </div>
      </div>
      <p className='px-10 pb-10 font-sans text-xl text-white '>{message}</p>
    </div>
  );
};
