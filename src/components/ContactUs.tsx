'use client';
import * as React from 'react';

import MailSVG from '../../public/svg/mail-alt.svg';
import PhoneSVG from '../../public/svg/phone-call-svgrepo-com.svg';
export default function ContactUs() {
  return (
    <section>
      <div className='mx-5 grid min-h-screen grid-cols-2 space-x-10 py-12'>
        <div className='grid grid-cols-1'>
          <div className='prose lg:prose-xl'>
            <h2 className='border-s-4 border-green-300 p-3 uppercase tracking-wider text-white'>
              Contact us
            </h2>
            <p className='my-10 font-sans text-4xl font-bold text-white'>
              Talk to <span className='text-green-200'>us</span> about your
              <span className='text-green-200'> project</span>.
            </p>
            <p className='my-5 text-base text-white '>
              Do you have a vision for software that will make life easier for
              users? Then don't wait anymore!
            </p>

            <p className='font-sans text-base text-white'>
              <div className='flex-row'>
                <MailSVG
                  className='inline'
                  width={40}
                  height={40}
                  fill='lightgreen'
                />
                futureproofsoft@gmail.com
              </div>

              <div className='flex-row'>
                <PhoneSVG
                  className='inline'
                  width={40}
                  height={40}
                  fill='lightgreen'
                />
                +381 64 31 67 261
              </div>
            </p>
          </div>
        </div>{' '}
        <div className='grid grid-cols-2'>
          <div className='from-lightGreen to-darkBlue bg-custom-gradient flex h-80 flex-col rounded-3xl text-white'>
            <h1 className='px-10 pt-10 font-bold'>
              Got a project? Let's talk!
            </h1>
            <p className='text-m flex self-center px-10 py-5 font-sans font-bold text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className='from-lightGreen to-darkBlue bg-custom-gradient flex self-center rounded-full border-2 border-solid px-4  py-2 font-bold text-white'>
              Estimate your project
            </button>
          </div>
          <div className='flex h-80 flex-col rounded-2xl border-y-2 border-r-2  border-solid  bg-gray-900 text-white'>
            <h1 className='px-10 pt-10 font-bold'>
              Want a job? Join the team!
            </h1>
            <p className='text-m flex justify-center justify-items-center self-center px-10 py-5 font-sans font-bold text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className='flex self-center rounded-full border-2 border-solid px-4  py-2 font-bold text-white'>
              Check out opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
