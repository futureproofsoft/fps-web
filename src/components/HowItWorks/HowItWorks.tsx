import LogoFps from 'public/svg/LogoFps.svg';
import React, { useEffect, useRef, useState } from 'react';

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
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementHeight = sectionRect.height / (works.length - 1.5);
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
  }, []);

  return (
    <section
      className='flex justify-between py-28 align-middle'
      ref={sectionRef}
    >
      <div className='flex w-[50%] flex-col justify-between'>
        <h2 className='pb-8 text-6xl font-bold leading-none'>
          How it <span className='text-greenText'>works</span>. Step by step.
        </h2>

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
      <div className='flex w-2/6'>
        <LogoFps alt='Logo Future Proof Soft' />
      </div>
    </section>
  );
};
