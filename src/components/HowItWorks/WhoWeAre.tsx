import * as React from 'react';

export const WhoWeAre = () => {
  return (
    <section id='about-us' className='3xl:py-36  lg:py-20 xl:py-28 '>
      <h5 className='border-greenText 3xl:text-2xl border-s-4 px-3 font-bold tracking-[4.8px] lg:text-base xl:text-lg'>
        WHO WE ARE
      </h5>
      <div className='flex justify-between'>
        <h2 className='3xl:text-6xl font-bold leading-none tracking-normal lg:pb-14 lg:pt-5 lg:text-[30px] xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
          Your <span className='text-greenText'>digital partner</span> to create
          <br /> a <span className='text-greenText'>recognizable</span> brand.
        </h2>
        <p className='3xl:text-xl w-5/12 font-normal lg:text-xs xl:text-sm  2xl:text-base'>
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
