import * as React from 'react';

export const WhoWeAre = () => {
  return (
    <div className='py-28'>
      <h3 className='border-greenText mt-4 border-s-4 px-3 text-xl font-bold'>
        WHO WE ARE
      </h3>
      <div className='flex justify-between py-8'>
        <h2 className='w-1/2 pb-8 text-6xl font-bold leading-none'>
          Your <span className='text-greenText'>digital partner</span> to create
          a <span className='text-greenText'>recognizable</span> brand.
        </h2>
        <p className='w-5/12 text-xl font-normal'>
          The top-notch and preeminent Web and Mobile App Development Company of
          first-rate choice of clients worldwide. With sheer customer
          satisfaction in mind, we are profoundly dedicated to developing highly
          intriguing apps that strictly meet business requirements and catering
          a wide spectrum of projects.
        </p>
      </div>
    </div>
  );
};