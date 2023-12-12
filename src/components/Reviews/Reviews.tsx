'use client';

import Image from 'next/image';
import PhonePicture from 'public/images/freestocks-L5DxWLmywmM-unsplash.png';
import Arrow from 'public/svg/Arrow.svg';
import * as React from 'react';

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
    {
      name: 'Tamara',
      title: 'CEO/MobileLabs',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eros eu ligula hendrerit ullamcorper. Aliquam id urna ut elit condimentum efficitur. Cras eget efficitur enim. Integer non massa ligula.',
    },
    {
      name: 'Voja',
      title: 'CEO/MobileLabs',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eros eu ligula hendrerit ullamcorper. Aliquam id urna ut elit condimentum efficitur. Cras eget efficitur enim. Integer non massa ligula.',
    },
  ];
  const [[page, direction], setPage] = React.useState([0, 0]);
  const imageIndex = ((page % data.length) + data.length) % data.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section id='reviews' className='3xl:py-36  mb:pt-20 sm:py-20 lg:py-28'>
      <div className='flex'>
        <div className='z-10 flex flex-col justify-between sm:w-full lg:w-[42%]'>
          <div className='flex flex-col  2xl:gap-10'>
            <h5 className='border-greenText 3xl:text-2xl mb:text-sm mb:text-[12px] border-s-4 px-3 font-bold tracking-[4.8px] md:text-sm lg:text-base xl:text-lg'>
              REVIEWS
            </h5>

            <h2 className='3xl:text-6xl mb:pt-6  mb:pb-5   mb:text-2xl mb:leading-none font-bold leading-none tracking-normal lg:pb-4 lg:pt-5 xl:text-[38px]  2xl:pt-7 2xl:text-[44px]'>
              How <span className='text-greenText'>our clients</span> see us.
            </h2>
          </div>

          <div className='relative'>
            <ReviewItem
              key={page}
              name={data[imageIndex].name}
              title={data[imageIndex].title}
              message={data[imageIndex].message}
              active={true}
              paginate={paginate}
              direction={direction}
            />
          </div>

          <div className='mb:pt-4 flex gap-[18px] lg:pt-0'>
            <Arrow
              onClick={() => paginate(1)}
              className='border-greenText 3xl:w-[50px] mb:w-[35px] rotate-180 rounded-full border-[1.5px] hover:cursor-pointer xl:w-[40px]'
            />
            <Arrow
              onClick={() => paginate(-1)}
              className='border-greenText 3xl:w-[50px] mb:w-[35px] rounded-full border-[1.5px] hover:cursor-pointer xl:w-[40px]'
            />
          </div>
        </div>
        <div className='mb:hidden z-0 lg:flex lg:w-[58%]'>
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
