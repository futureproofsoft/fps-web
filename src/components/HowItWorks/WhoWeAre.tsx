import * as React from 'react';

export const WhoWeAre = () => {
  return (
    <section
      id='about-us'
      className='3xl:pt-36  mb:py-12 sm:pt-14 lg:pt-20 xl:pt-28'
    >
      <h5 className='border-greenText 3xl:text-2xl  border-s-4 px-3 font-bold tracking-[4.8px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg'>
        WHO WE ARE
      </h5>
      <div className='mb:flex-col flex justify-between lg:flex-row'>
        <h2 className='3xl:text-6xl lg:pb mb:pb-5 mb:pt-2 mb:text-2xl mb:leading-none font-bold  leading-none tracking-normal lg:pt-5 lg:text-[30px] xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
          Your <span className='text-greenText'>digital partner</span> to create
          <br className='sm:hidden lg:flex' /> a{' '}
          <span className='text-greenText'>recognizable</span> brand.
        </h2>
        <p className='3xl:text-xl font-normal sm:text-xs lg:w-5/12 xl:text-sm  2xl:text-base'>
          The top-notch and preeminent Web and Mobile App Development Company of
          first-rate choice of clients worldwide. With sheer customer
          satisfaction in mind, we are profoundly dedicated to developing highly
          intriguing apps that strictly meet business requirements and catering
          a wide spectrum of projects.
        </p>
      </div>
    </section>
  );
};
