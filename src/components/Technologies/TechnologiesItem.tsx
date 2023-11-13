import Image from 'next/image';
import * as React from 'react';

import css from '../../../public/images/technologies/css.png';
import html from '../../../public/images/technologies/html.png';
import js from '../../../public/images/technologies/js.png';
import nodejs from '../../../public/images/technologies/nodejs.png';

const technologiesClassName =
  'flex justify-center p-20 transition duration-300 hover:scale-125';

export const TechnologiesItem = () => {
  return (
    <div className='grid grid-cols-4 gap-[18px] overflow-hidden'>
      <div className={technologiesClassName}>
        <Image src={html} alt='html logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={css} alt='css logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={js} alt='js logo' />
      </div>
      <div className={technologiesClassName}>
        <Image src={nodejs} alt='nodejs logo' />
      </div>
    </div>
  );
};
