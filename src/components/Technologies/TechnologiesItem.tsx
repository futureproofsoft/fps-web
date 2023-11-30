import Image from 'next/image';
import cssTechnologiesIcon from 'public/images/technologies/cssTechnologiesIcon.png';
import htmlTechnologiesIcon from 'public/images/technologies/htmlTechnologiesIcon.png';
import jsTechnologiesIcon from 'public/images/technologies/jsTechnologiesIcon.png';
import nodejsTechnologiesIcon from 'public/images/technologies/nodejsTechologiesIcon.png';
import * as React from 'react';

const technologiesClassName =
  'flex justify-center 2xl:my-12 transition duration-300 3xl:hover:scale-125 2xl:hover:scale-[1.15]';

export const TechnologiesItem = () => {
  return (
    <div className='sc grid grid-cols-4 gap-[18px]'>
      <div className={technologiesClassName}>
        <Image src={cssTechnologiesIcon} alt='html logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={htmlTechnologiesIcon} alt='css logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={jsTechnologiesIcon} alt='js logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={nodejsTechnologiesIcon} alt='nodejs logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={cssTechnologiesIcon} alt='html logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={htmlTechnologiesIcon} alt='css logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={jsTechnologiesIcon} alt='js logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={nodejsTechnologiesIcon} alt='nodejs logo' />
      </div>
    </div>
  );
};
