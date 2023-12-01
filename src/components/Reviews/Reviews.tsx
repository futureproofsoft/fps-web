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
    <section id='reviews' className='3xl:py-36  lg:py-28'>
      <div className='flex'>
        <div className='z-10 flex w-[42%] flex-col justify-between'>
          <div className='flex flex-col gap-5'>
            <h5 className='border-greenText 3xl:text-2xl border-s-4 px-3 font-bold tracking-[4.8px] xl:text-lg'>
              REVIEWS
            </h5>

            <h2 className='3xl:text-6xl 3xl:leading-[64px] font-bold  xl:text-[38px]  xl:leading-[46px] 2xl:text-[44px]'>
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

          <div className='flex gap-[18px]'>
            <Arrow
              onClick={() => paginate(1)}
              className='border-greenText 3xl:w-[50px] rotate-180 rounded-full border-[1.5px] hover:cursor-pointer lg:w-[35px] xl:w-[40px]'
            />
            <Arrow
              onClick={() => paginate(-1)}
              className='border-greenText 3xl:w-[50px] rounded-full border-[1.5px] hover:cursor-pointer lg:w-[35px] xl:w-[40px]'
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
