'use client';
import Image from 'next/image';
import * as React from 'react';

import PhonePicture from '../../public/images/freestocks-L5DxWLmywmM-unsplash.png';
import ProfilePicture from '../../public/images/pexels-linkedin-sales-navigator-2182970.png';
import LeftArrow from '../../public/svg/left-arrow.svg';

export default function Reviews() {
  return (
    <section>
      <div className='my-12 grid grid-cols-3'>
        <div className='prose lg:prose-xl z-10 flex flex-col justify-between'>
          <h2 className=' border-s-4 border-green-300 px-3 uppercase tracking-wider text-white'>
            Reviews
          </h2>
          <p className='font-sans text-4xl font-bold text-white'>
            How <span className='text-greenText'>our clients</span> see us
          </p>
          <div>
            <div className='from-lightGreen to-darkBlue bg-custom-gradient width-200 z-10 -mr-20 flex flex-col rounded-3xl text-white'>
              <div className='mb-5 flex flex-row'>
                <div className='mx-10 flex flex-row rounded-bl-full rounded-br-full bg-white text-black'>
                  <Image
                    src={ProfilePicture}
                    width={100}
                    height={100}
                    className='mx-1 mb-1 mt-8'
                    alt='Profile Picture'
                  />
                </div>
                <div className='mt-16 flex flex-col'>
                  <p className='opacity-1 font-bold'>Dominic Johnson</p>
                  <p className='opacity-1 '>CEO/MobileLabs</p>
                </div>
              </div>
              <p className='px-10 pb-10 font-sans text-sm text-xl text-white'>
                "MindInventory developed and launched an Android and iOS app
                from scratch. Additionaly, they provided free support for two
                months after the launch to ensure bugs and updates were handled
                smoothly."
              </p>
            </div>
          </div>
          <div className='mt-5'>
            <button
              type='button'
              className='mr-2 inline-flex rotate-1 items-center  rounded-full border-2  border-green-300 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <LeftArrow width='16px' height='16px' />
            </button>
            <button
              type='button'
              className='mr-2 inline-flex items-center rounded-full border-2 border-green-300 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
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
