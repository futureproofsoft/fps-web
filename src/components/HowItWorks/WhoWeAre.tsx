import * as React from 'react';

export const WhoWeAre = () => {
  return (
    <section
      id='about-us'
      className='3xl:pt-36  mb:py-20 sm:pt-14 lg:pt-20 xl:pt-28'
    >
      <h5 className='border-greenText 3xl:text-2xl  border-s-4 px-3 font-bold tracking-[4.8px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg'>
        WHO WE ARE
      </h5>
      <div className='mb:flex-col flex justify-between lg:flex-row'>
        <h2 className='3xl:text-6xl lg:pb mb:pb-14 mb:pt-6 mb:text-2xl mb:leading-none font-bold  leading-none tracking-normal lg:pt-5 lg:text-[30px] xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
          The <span className='text-greenText'>digital partner you need</span>
          <span className='sm:hidden lg:flex' /> to create{' '}
          <span className='text-greenText'>
            user-friendly and <br className='mb:hidden lg:flex' /> sustainable
          </span>{' '}
          solutions.
        </h2>
        <p className='3xl:text-xl font-normal sm:text-xs lg:w-5/12 xl:text-sm  2xl:text-base'>
          A team of seasoned professionals that understands the challenges posed
          by the fast-paced world of technology and overcomes them with ease.
          From web development to mobile development and cloud solutions, we
          deliver tailored solutions that evolve with your business. A proactive
          approach is what we are proud of the most - that is what makes us
          stand out from others and gives us a competitive edge in the
          ever-evolving digital arena.
        </p>
      </div>
    </section>
  );
};
