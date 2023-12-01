import React, { useEffect, useRef, useState } from 'react';

import { FPSLogo } from '@/components/HowItWorks/FPSLogo';
import { WorksItem } from '@/components/HowItWorks/WorksItem';

const works = [
  {
    itemName: 'Discovery call',
    itemDescription:
      'We start each project with preliminary discussions. This approach allows us to get to know our clients needs. We also gather any useful information that will be valuable for further project phases.',
  },
  {
    itemName: 'Workshops',
    itemDescription:
      'After getting an overview of the project, we then move on to extensive research with the client. Here, we pinpoint the specific objectives that the final product needs to meet.',
  },
  {
    itemName: 'Planning and design',
    itemDescription:
      'Clearly defining intentions enables us to take a step forward and start the development. Our UX/UI designers, developers, and PMs plan each stage of the work in close collaboration with the client.',
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
    <section className='flex justify-between align-middle xl:py-12 2xl:py-16'>
      <div className='grid-row-2 grid w-[50%]'>
        <h2 className='3xl:text-6xl 3xl:pb-32 font-bold leading-none lg:text-[30px] xl:pb-8  xl:text-[38px] 2xl:text-[44px]'>
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
                active={activeElement === index}
              />
            );
          })}
        </div>
      </div>
      <div className='flex w-2/6'>
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
