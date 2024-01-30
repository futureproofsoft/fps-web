'use client';

import CustomDevelopmentIcon from 'public/svg/servicesSVG/CustomDevelopmentIcon.svg';
import MobileApplicationsIcon from 'public/svg/servicesSVG/MobileApplicationsIcon.svg';
import * as React from 'react';

import { ServiceItem } from '@/components/Services/ServiceItem';

import UIUXIcon from '../SVG/UXUI-development';

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
  const touchStartX = React.useRef<number>(0);

  React.useEffect(() => {
    scrollToService(activeIndex);
  }, [activeIndex]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    setActiveIndex(1);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchEndX - touchStartX.current;

    if (touchDiff > 20) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else if (touchDiff < -20) {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (activeIndex === 0 && touchDiff > -20) {
      setActiveIndex(0);
    } else if (activeIndex === 2 && touchDiff < 20) {
      setActiveIndex(2);
    }
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
      <h2 className='3xl:text-6xl  mb:pb-12   mb:pt-6  mb:text-2xl mb:leading-none font-bold leading-none tracking-normal lg:pb-14 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
        Areas we cover to <span className='text-greenText'>provide</span> our
        clients with a{' '}
        <span className='text-greenText'>complete experience</span>.
      </h2>

      {isLargeScreen && (
        <div className='mb:flex  mb:flex-row mb:-mx-6 mb:px-6  overflow-x-auto '>
          {data.map((item, index) => (
            <div
              key={index}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              id={`service-item-${index}`}
              className={`relative ${
                activeIndex !== index
                  ? 'scale-90 opacity-50 blur-sm  transition-all duration-300'
                  : 'transition-all duration-300'
              }`}
            >
              <div
                className='cursor-pointer'
                onClick={() => setActiveIndex(index)}
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
