'use client';
import Image from 'next/image';
import PhonePicture from 'public/images/reviewsImage.png';
import Arrow from 'public/svg/Arrow.svg';
import * as React from 'react';

import { ReviewItem } from '@/components/Reviews/ReviewItem';

export const ReviewsNew = () => {
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
    <section id='reviews' className='3xl:py-36  mb:pt-20 sm:py-24 lg:py-28'>
      <>
        <div className='flex flex-col '>
          <h5 className='border-greenText 3xl:text-2xl mb:text-sm  border-s-4 px-3 font-bold tracking-[4.8px] md:text-sm lg:text-base xl:text-lg'>
            REVIEWS
          </h5>

          <h2 className='3xl:text-6xl  mb:text-2xl mb:leading-none  pb-12  pt-6 font-bold leading-none tracking-normal md:pb-12  lg:pb-14 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
            We want to <span className='text-greenText'>share</span> with you
            the experiences of our{' '}
            <span className='text-greenText'>valued clients</span>.
          </h2>
        </div>

        <div className='border-reviews -m-2 rounded-2xl'>
          <div className='bg-custom-gradient  from-lightGreen to-darkBlue mb:flex-col flex rounded-2xl  md:flex-row'>
            <div className='mb:hidden md:flex'>
              <Image
                src={PhonePicture}
                priority
                alt='Phone Picture'
                className='rounded-bl-2xl rounded-tl-2xl object-cover object-center py-[2px]   brightness-[0.3] md:[clip-path:polygon(0%_0%,90%_0%,75%_100%,0%_100%)] '
              />
            </div>
            <div className='flex w-full flex-col justify-between p-5'>
              <ReviewItem
                key={page}
                name={data[imageIndex].name}
                title={data[imageIndex].title}
                message={data[imageIndex].message}
                active={true}
                paginate={paginate}
                direction={direction}
              />
              <div className='flex items-end justify-end gap-[18px] '>
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
          </div>
        </div>
      </>
    </section>
  );
};
