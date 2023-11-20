'use client';
import Facebook from 'public/svg/facebook.svg';
import Instagram from 'public/svg/instagram.svg';
import Linkedin from 'public/svg/linkedin.svg';
import Mail from 'public/svg/mail.svg';
import Phone from 'public/svg/phone.svg';
import Twitter from 'public/svg/twitter.svg';
import * as React from 'react';

export const ContactUs = () => {
  return (
    <section id='contact-us'>
      <div className='my-40 grid grid-cols-2 space-x-10'>
        <div className='grid grid-cols-1'>
          <div className='prose lg:prose-xl flex flex-col justify-between'>
            <h2 className='border-greenText border-s-4 px-3 text-2xl uppercase tracking-wider text-white'>
              Contact us
            </h2>
            <p className='font-sans text-6xl font-bold text-white'>
              Talk to <span className='text-greenText'>us</span> about your
              <span className='text-greenText'> project</span>.
            </p>
            <p className='text-xl text-white '>
              Do you have a vision for software that will make life easier for
              users? Then don't wait anymore!
            </p>

            <p className='flex flex-col font-sans text-xl text-white'>
              <a
                href='mailto:info@futureproofsoft.com'
                className='mb-4 flex flex-row items-center gap-3 text-xl'
              >
                <Mail className='inline' width={38} height={38} />
                info@futureproofsoft.com
              </a>

              <a
                href='tel:+381-64-4295-881'
                className='mb-12 flex flex-row items-center gap-3 text-xl'
              >
                <Phone className='inline' width={38} height={38} />
                +381-64-4295-881
              </a>
              <span className='flex flex-row gap-4'>
                <a href='https://www.linkedin.com/company/79773452'>
                  <Linkedin width={38} height={38} />
                </a>
                <Facebook width={38} height={38} />
                <Instagram width={38} height={38} />
                <Twitter width={38} height={38} />
              </span>
            </p>
          </div>
        </div>
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
};
