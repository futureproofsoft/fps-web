'use client';

import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

import { ReviewItem } from '@/components/ReviewItem';

import PhonePicture from '../../public/images/freestocks-L5DxWLmywmM-unsplash.png';
import ProfilePicture from '../../public/images/pexels-linkedin-sales-navigator-2182970.png';
import LeftArrow from '../../public/svg/left-arrow.svg';

export default function Reviews() {
  const data = [
    {
      image: ProfilePicture,
      name: 'Dominic Johnson',
      title: 'CEO/MobileLabs',
      message:
        'MindInventory developed and launched an Android and iOS app from scratch. Additionaly, they provided free support for two months after the launch to ensure bugs and updates were handled smoothly.',
    },
    {
      image: ProfilePicture,
      name: 'Dominic Johnson',
      title: 'CEO/MobileLabs',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eros eu ligula hendrerit ullamcorper. Aliquam id urna ut elit condimentum efficitur. Cras eget efficitur enim. Integer non massa ligula.',
    },
  ];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const prevItem = () => {
    0;
    const isFirstItem = currentItemIndex === 0;
    const newIndex = isFirstItem ? data.length - 1 : currentItemIndex - 1;
    setCurrentItemIndex(newIndex);
  };
  const nextItem = () => {
    const isLastItem = currentItemIndex === data.length - 1;
    const newIndex = isLastItem ? 0 : currentItemIndex + 1;
    setCurrentItemIndex(newIndex);
  };

  return (
    <section>
      <div className='my-12 grid grid-cols-3'>
        <div className='prose lg:prose-xl z-10 flex flex-col justify-between'>
          <h3 className='border-s-4 border-green-300 px-3 uppercase tracking-wider text-white'>
            Reviews
          </h3>
          <p className='mb-16 mt-8 font-sans text-6xl font-bold text-white'>
            How <span className='text-greenText'>our clients</span> see us
          </p>
          {data.map((item, index) => (
            <ReviewItem
              active={index === currentItemIndex}
              key={item.name}
              image={item.image}
              name={item.name}
              title={item.title}
              message={item.message}
            />
          ))}

          <div className='mt-6'>
            <button
              type='button'
              onClick={prevItem}
              className='mr-2 inline-flex rotate-1 items-center  rounded-full border-2  border-green-300 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <LeftArrow width='16px' height='16px' />
            </button>
            <button
              type='button'
              onClick={nextItem}
              className='mr-2 inline-flex items-center rounded-full border-2 border-green-300 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <LeftArrow className='rotate-1' width='16px' height='16px' />
            </button>
          </div>
        </div>
        <div className='z-0 col-span-2 grid'>
          <Image
            src={PhonePicture}
            className='mx-1 h-full w-full'
            alt='Phone Picture'
          />
        </div>
      </div>
    </section>
  );
}
