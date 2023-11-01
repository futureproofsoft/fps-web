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
      className={`from-lightGreen to-darkBlue bg-custom-gradient z-10 -mr-20 flex flex-col rounded-3xl text-white  ${
        active ? 'flex focus:transition focus:duration-500' : 'hidden'
      }`}
    >
      <div className='mb-5 flex flex-row'>
        <div className='mx-10 flex flex-row rounded-bl-full rounded-br-full bg-white text-black'>
          <Image
            src={image}
            width={100}
            height={100}
            className='duration:400 mx-1 mb-1 mt-8 transition'
            alt='Profile Picture'
          />
        </div>
        <div className='mt-16 flex flex-col'>
          <p className='opacity-1 font-bold'>{name}</p>
          <p className='opacity-1 '>{title}</p>
        </div>
      </div>
      <p className='duration:500 px-10 pb-10 font-sans text-sm text-xl text-white transition'>
        {message}
      </p>
    </div>
  );
};
