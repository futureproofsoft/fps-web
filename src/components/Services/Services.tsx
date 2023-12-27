'use client';
// import CustomDevelopmentIcon from 'public/svg/custom-development-illustration.svg';
// import MobileApplicationsIcon from 'public/svg/mobile-app-illustration.svg';
// import UIUXIcon from 'public/svg/uxui-design-illustration.svg';

import CustomDevelopmentIcon from 'public/svg/servicesSVG/CustomDevelopmentIcon.svg';
import MobileApplicationsIcon from 'public/svg/servicesSVG/MobileApplicationsIcon.svg';
import UIUXIcon from 'public/svg/servicesSVG/UIUXIcon.svg';
import * as React from 'react';

import { ServiceItem } from '@/components/Services/ServiceItem';

const data = [
  {
    image: (
      <MobileApplicationsIcon className='mb:w-8/12 sm:w-8/12 md:w-3/4 lg:w-3/5 ' />
    ),
    description: (
      <>
        Mobile
        <br />
        Applications
      </>
    ),
  },
  {
    image: (
      <CustomDevelopmentIcon className='mb:w-8/12  sm:w-8/12 md:w-3/4 lg:w-3/5' />
    ),
    description: (
      <>
        Custom
        <br />
        Development
      </>
    ),
  },
  {
    image: <UIUXIcon className='mb:w-8/12 sm:w-8/12 md:w-3/4 lg:w-3/5' />,
    description: (
      <>
        UI/UX
        <br />
        Design
      </>
    ),
  },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleServiceItemClick = (index: number) => {
    setActiveIndex(index);
    scrollToService(index);
  };

  const scrollToService = (index: number) => {
    const element = document.getElementById(`service-item-${index}`);
    if (element) {
      const offset = window.innerWidth / 2 - element.offsetWidth / 2;
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });

      element.parentElement?.scrollTo({
        left: element.offsetLeft - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='services' className='3xl:py-36 mb:pt-20  lg:py-20 xl:py-28 '>
      <h5 className='border-greenText 3xl:text-2xl mb:text-sm  border-s-4 px-3 font-bold tracking-[4.8px] md:text-sm lg:text-base xl:text-lg'>
        SERVICES
      </h5>
      <h2 className='3xl:text-6xl  mb:pb-12  mb:pt-6  mb:text-2xl mb:leading-none font-bold leading-none tracking-normal lg:pb-14 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
        Areas we cover to <span className='text-greenText'>provide</span> our
        clients with a{' '}
        <span className='text-greenText'>complete experience</span>.
      </h2>

      {isLargeScreen && (
        <div className='mb:flex  mb:flex-row mb:-mx-6 mb:px-6 overflow-x-auto '>
          {data.map((item, index) => (
            <div
              key={index}
              id={`service-item-${index}`}
              className={`relative ${
                activeIndex !== index
                  ? 'scale-90 opacity-50 blur-sm  transition-all duration-300'
                  : 'transition-all duration-300'
              }`}
            >
              <div
                className='cursor-pointer'
                onClick={() => handleServiceItemClick(index)}
              >
                <ServiceItem
                  key={index}
                  image={item.image}
                  description={item.description}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {!isLargeScreen && (
        <div className='md:grid md:grid-cols-3 md:gap-6 '>
          {data.map((item, index) => (
            <ServiceItem
              key={index}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      )}
    </section>
  );
};
