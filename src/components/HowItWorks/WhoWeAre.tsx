import * as React from 'react';

export const WhoWeAre = () => {
  return (
    <section id='about-us' className='3xl:py-36 2xl:pb-16 2xl:pt-28'>
      <h3 className='border-greenText 3xl:text-xl border-s-4 px-3  font-bold tracking-[4.8px] 2xl:text-lg'>
        WHO WE ARE
      </h3>
      <div className='flex justify-between py-7'>
        <h2 className='3xl:text-6xl w-1/2 pb-8 font-bold leading-none 2xl:text-[44px]'>
          Your <span className='text-greenText'>digital partner</span> to create
          <br /> a <span className='text-greenText'>recognizable</span> brand.
        </h2>
        <p className='3xl:text-xl w-5/12 font-normal  2xl:text-base'>
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
