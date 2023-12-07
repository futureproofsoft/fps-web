import Image from 'next/image';
import cssTechnologiesIcon from 'public/images/technologies/cssTechnologiesIcon.png';
import htmlTechnologiesIcon from 'public/images/technologies/htmlTechnologiesIcon.png';
import jsTechnologiesIcon from 'public/images/technologies/jsTechnologiesIcon.png';
import nodejsTechnologiesIcon from 'public/images/technologies/nodejsTechologiesIcon.png';
import * as React from 'react';

const technologiesClassName =
  'xl:my-6 h-full object-cover flex items-center justify-center 2xl:my-12 transition duration-300 3xl:hover:scale-125 2xl:hover:scale-[1.15]';

export const TechnologiesItem = () => {
  return (
    <div className='grid grid-cols-4 items-center justify-center gap-[18px]'>
      <div className={technologiesClassName}>
        <Image
          src={cssTechnologiesIcon}
          alt='html logo'
          className='w-1/2 md:py-3 xl:py-2 2xl:py-1 '
        />
      </div>
      <div className={technologiesClassName}>
        <Image
          src={htmlTechnologiesIcon}
          alt='css logo'
          className='w-1/2 md:py-3 xl:py-2 2xl:py-1'
        />
      </div>
      <div className={technologiesClassName}>
        <Image
          src={jsTechnologiesIcon}
          alt='js logo'
          className='w-1/4 md:py-3 xl:py-2 2xl:py-1'
        />
      </div>
      <div className={technologiesClassName}>
        <Image
          src={nodejsTechnologiesIcon}
          alt='nodejs logo'
          className='w-1/2 md:py-3 xl:py-2 2xl:py-1'
        />
      </div>
      <div className={technologiesClassName}>
        <Image
          src={cssTechnologiesIcon}
          alt='html logo'
          className='w-1/2 md:py-3 xl:py-2 2xl:py-1'
        />
      </div>
      <div className={technologiesClassName}>
        <Image
          src={htmlTechnologiesIcon}
          alt='css logo'
          className='w-1/2 md:py-3 xl:py-2 2xl:py-1'
        />
      </div>
      <div className={technologiesClassName}>
        <Image
          src={jsTechnologiesIcon}
          alt='js logo'
          className='w-1/4 md:py-3 xl:py-2 2xl:py-1'
        />
      </div>
      <div className={technologiesClassName}>
        <Image
          src={nodejsTechnologiesIcon}
          alt='nodejs logo'
          className='w-1/2 md:py-3 xl:py-2 2xl:py-1'
        />
      </div>
    </div>
  );
};
