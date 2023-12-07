import Image from 'next/image';
import backgroundWeb from 'public/images/backgroundWeb.png';
import * as React from 'react';

export const BackgroundWeb = () => {
  return (
    <div className='flash absolute  left-0 top-0 w-full'>
      <Image
        src={backgroundWeb}
        alt='Background Web image'
        priority
        className='sm:w-3/4 lg:w-1/2'
      />
    </div>
  );
};
