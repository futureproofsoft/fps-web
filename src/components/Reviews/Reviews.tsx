'use client';

import Image from 'next/image';
import PhonePicture from 'public/images/freestocks-L5DxWLmywmM-unsplash.png';
import Arrow from 'public/svg/Arrow.svg';
import * as React from 'react';
import { useState } from 'react';

import { ReviewItem } from '@/components/Reviews/ReviewItem';

export const Reviews = () => {
  const data = [
    {
      name: 'Dominic ',
      title: 'CEO/MobileLabs',
      message:
        'MindInventory developed and launched an Android and iOS app from scratch. Additionaly, they provided free support for two months after the launch to ensure bugs and updates were handled smoothly.',
    },
    {
      name: 'Sava',
      title: 'CEO/MobileLabs',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eros eu ligula hendrerit ullamcorper. Aliquam id urna ut elit condimentum efficitur. Cras eget efficitur enim. Integer non massa ligula.',
    },
    // {
    //   name: 'Tamara',
    //   title: 'CEO/MobileLabs',
    //   message:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eros eu ligula hendrerit ullamcorper. Aliquam id urna ut elit condimentum efficitur. Cras eget efficitur enim. Integer non massa ligula.',
    // },
    // {
    //   name: 'Voja',
    //   title: 'CEO/MobileLabs',
    //   message:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eros eu ligula hendrerit ullamcorper. Aliquam id urna ut elit condimentum efficitur. Cras eget efficitur enim. Integer non massa ligula.',
    // },
  ];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const nextItem = () => {
    const isLastItem = currentItemIndex === data.length - 1;
    const newIndex = isLastItem ? 0 : currentItemIndex + 1;
    setCurrentItemIndex(newIndex);
  };

  const prevItem = () => {
    const isFirstItem = currentItemIndex === 0;
    const newIndex = isFirstItem ? data.length - 1 : currentItemIndex - 1;
    setCurrentItemIndex(newIndex);
  };

  return (
    <section id='reviews' className='py-60'>
      <div className='flex'>
        <div className='z-10 flex w-[42%] flex-col justify-between'>
          <h3 className='border-greenText border-s-4 px-3 text-2xl font-bold tracking-[4.8px]'>
            REVIEWS
          </h3>
          <h2 className='text-6xl font-bold leading-[64px]'>
            How <span className='text-greenText'>our clients</span> see us.
          </h2>
          {/* <div className='flex'> */}
          {data.map((item, index) => (
            <ReviewItem
              active={index === currentItemIndex}
              key={index}
              name={item.name}
              title={item.title}
              message={item.message}
            />
          ))}
          {/* </div> */}
          <div className='flex gap-[18px]'>
            <Arrow
              onClick={prevItem}
              width='50px'
              className='border-greenText rotate-180 rounded-full border-[1.5px] hover:cursor-pointer'
            />
            <Arrow
              onClick={nextItem}
              width='50px'
              className='border-greenText rounded-full border-[1.5px] hover:cursor-pointer'
            />
          </div>
        </div>
        <div className='z-0 w-[58%]'>
          <Image
            src={PhonePicture}
            className='h-full w-full'
            alt='Phone Picture'
          />
        </div>
      </div>
    </section>
  );
};
