import React, { useEffect, useRef, useState } from 'react';

import { FPSLogo } from '@/components/HowItWorks/FPSLogo';
import { WorksItem } from '@/components/HowItWorks/WorksItem';

const works = [
  {
    itemName: 'Discovery call',
    itemDescription: `At the beginning of each project, we kick off with a Discovery Call. Establishing a mutual understanding allows us to delve into the intricacies of our client's needs. Through this interaction, we gather invaluable insights that will lay the foundation for subsequent project phases.`,
  },
  {
    itemName: 'Collaborative Strategy Sessions',
    itemDescription: `Following the project overview, we transition into intensive collaboration with the client. In these sessions, our goal is to precisely define the objectives that the final product must achieve.`,
  },
  {
    itemName: 'Unified Planning and Development Approach:',
    itemDescription: `With well-defined goals in place, we advance into the Planning and Design phase. Our UX/UI designers, developers, and project managers collaborate closely to plan each stage of the work. This ensures a seamless transition from strategy to development.`,
  },
];

export const HowItWorks = () => {
  const [activeElement, setActiveElement] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementHeight = sectionRect.height / (works.length - 2);
        const newActiveElement = Math.floor(
          (scrollPosition - sectionRect.top) / elementHeight
        );

        setActiveElement(
          newActiveElement >= works.length ? works.length - 1 : newActiveElement
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeElement]);

  return (
    <section className='flex justify-between align-middle sm:flex-col lg:flex-row lg:py-6 2xl:py-8'>
      <div className='grid-row-2 grid sm:w-full lg:w-[50%]'>
        <h2 className='3xl:text-6xl 3xl:pb-32 font-bold leading-none  sm:pb-5  sm:pt-10 sm:text-2xl lg:text-[30px] xl:pb-8  xl:text-[38px] 2xl:text-[44px]'>
          How it <span className='text-greenText'>works</span>. Step by step.
        </h2>
        <div ref={sectionRef} className='flex flex-col justify-between'>
          {works.map((worksItem, index) => {
            return (
              <WorksItem
                key={index}
                itemNumber={`0${index + 1}`}
                itemName={worksItem.itemName}
                itemDescription={worksItem.itemDescription}
                active={activeElement >= index}
              />
            );
          })}
        </div>
      </div>
      <div className='flex sm:hidden lg:flex lg:w-2/6'>
        {isClient && (
          <FPSLogo
            ballFillColor={activeElement >= 0}
            insideFillColor={activeElement > 0}
            outsideFillColor={activeElement > 1}
          />
        )}
      </div>
    </section>
  );
};
