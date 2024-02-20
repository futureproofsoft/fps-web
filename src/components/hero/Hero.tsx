import Laptop from 'public/svg/ElementSvg/Laptop.svg';
import * as React from 'react';

export const Hero = () => {
  return (
    <section className='3xl:py-36 mb:py-16 items-center justify-between sm:flex sm:py-12 lg:py-20'>
      <div className=' mb:pb-16  sm:w-1/2 sm:pb-0'>
        <h2 className='3xl:text-[68px] mb:text-[30px] mb:pb-8 pb-6 font-bold leading-none sm:text-[25px] lg:text-[40px] xl:text-[50px]  2xl:text-[55px]'>
          Innovate <br />
          <span className='text-greenText'>Execute</span> <br />
          Elevate
        </h2>
        <p className='border-greenText  3xl:text-2xl border-s-4 px-3 sm:pb-0 sm:text-[10px] sm:leading-3 md:pr-24 md:text-xs lg:text-sm  lg:leading-[16px]  xl:text-base xl:leading-[20px] 2xl:text-lg 2xl:leading-[25px]'>
          As advocates for Future-Proof Software, we dedicate ourselves to
          delivering technology that not only meets your immediate needs, but
          also stands the ultimate test—the test of time
        </p>
      </div>
      <div className='laptop-shadow  mb:p-6  sm:w-5/12 sm:pb-0'>
        <Laptop alt='Laptop' />
      </div>
    </section>
  );
};
