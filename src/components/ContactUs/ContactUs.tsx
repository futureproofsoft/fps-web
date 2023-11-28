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
    <section id='contact-us' className='py-60'>
      <div className='grid grid-cols-[1.6fr,1fr,1fr]  '>
        <div className='flex flex-col justify-between  pr-48'>
          <h3 className='border-greenText border-s-4 px-3 text-2xl font-bold tracking-[4.8px]'>
            CONTACT US
          </h3>
          <h2 className='text-6xl font-bold leading-[64px]'>
            Talk to <span className='text-greenText'>us</span> about your
            <span className='text-greenText'> project</span>.
          </h2>
          <p className='text-xl leading-6 text-white'>
            Do you have a vision for software that will make life easier for
            users? Then don't wait anymore!
          </p>
          <div className='flex flex-col gap-[14px]'>
            <a
              href='mailto:info@futureproofsoft.com'
              className='flex gap-3 text-xl'
            >
              <Mail width={24} />
              info@futureproofsoft.com
            </a>

            <a href='tel:+381-64-4295-881' className='flex gap-3 text-xl'>
              <Phone width={24} />
              +381-64-4295-881
            </a>
          </div>
          <div className='flex gap-[18px]'>
            <Instagram width={38} />
            <a href='https://www.linkedin.com/company/79773452'>
              <Linkedin width={38} />
            </a>
            <Facebook width={38} />
            <Twitter width={38} />
          </div>
        </div>

        <div className=' colorContact grid grid-rows-3 justify-between rounded-bl-3xl rounded-tl-3xl border-2 border-solid border-transparent p-14'>
          <div className='flex items-center justify-center'>
            <h2 className='text-6xl font-bold leading-[64px]'>
              Got a project? Let's talk!
            </h2>
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='rounded-[32px] border-[1.5px] px-12 py-4 font-bold '>
              Estimate your project
            </button>
          </div>
        </div>

        <div className='grid grid-rows-3 rounded-br-3xl rounded-tr-3xl border-y-2 border-r-2 border-solid p-14'>
          <div className='flex items-center justify-center'>
            <h2 className='text-6xl font-bold leading-[64px]'>
              Join the team!
            </h2>
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='rounded-[32px] border-[1.5px] px-12 py-4 font-bold '>
              Check out opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
