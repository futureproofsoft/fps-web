'use client';
import * as React from 'react';

import MailSVG from '../../public/svg/mail-alt.svg';
import PhoneSVG from '../../public/svg/phone-call-svgrepo-com.svg';
export default function ContactUs() {
  return (
    <section>
      <div className='my-40 grid grid-cols-2 space-x-10'>
        <div className='grid grid-cols-1'>
          <div className='prose lg:prose-xl'>
            <h2 className='border-s-4 border-green-300 p-3 text-2xl uppercase tracking-wider text-white'>
              Contact us
            </h2>
            <p className='my-10 font-sans text-6xl font-bold text-white'>
              Talk to <span className='text-greenText'>us</span> about your
              <span className='text-greenText'> project</span>.
            </p>
            <p className='my-5 text-xl text-white '>
              Do you have a vision for software that will make life easier for
              users? Then don't wait anymore!
            </p>

            <p className='flex flex-col font-sans text-xl text-white'>
              <span className='flex-row'>
                <MailSVG
                  className='inline'
                  width={40}
                  height={40}
                  fill='lightgreen'
                />
                futureproofsoft@gmail.com
              </span>

              <span className='flex-row'>
                <PhoneSVG
                  className='inline'
                  width={40}
                  height={40}
                  fill='lightgreen'
                />
                +381 64 31 67 261
              </span>
            </p>
          </div>
        </div>{' '}
        <div className='grid grid-cols-2'>
          <div className='from-lightGreen to-darkBlue bg-custom-gradient flex flex-col justify-around rounded-bl-3xl rounded-tl-3xl px-16 py-16 text-white'>
            <h1 className='text-6xl font-bold '>Got a project? Let's talk!</h1>
            <p className='flex self-center py-5 font-sans text-xl font-bold text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className='flex w-full justify-center rounded-full border-2 border-solid px-4 py-4  text-base font-bold text-white'>
              Estimate your project
            </button>
          </div>
          <div className='flex flex-col items-center justify-around rounded-br-3xl rounded-tr-3xl border-y-2 border-r-2 border-solid px-16  py-16  text-white'>
            <h1 className='text-6xl font-bold'>Want a job? Join the team!</h1>
            <p className='flex justify-center justify-items-center self-center py-5  font-sans text-xl font-bold text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className='flex w-full justify-center rounded-full border-2 border-solid px-4  py-4 text-base font-bold text-white'>
              Check out opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
