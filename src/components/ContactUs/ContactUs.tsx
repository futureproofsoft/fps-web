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
    <section id='contact-us' className='3xl:py-36 lg:py-20 xl:py-28'>
      <div className='grid grid-cols-[1.6fr,1fr,1fr]  '>
        <div className='3xl:pr-48 flex flex-col justify-between gap-4  lg:pr-24 xl:pr-36 2xl:pr-44'>
          <h5 className='border-greenText 3xl:text-2xl border-s-4 px-3 font-bold tracking-[4.8px] xl:text-lg'>
            CONTACT US
          </h5>
          <h2 className='3xl:text-6xl 3xl:leading-[64px] font-bold  lg:text-[30px]  xl:text-[38px] xl:leading-[40px] 2xl:text-[44px]'>
            Talk to <span className='text-greenText'>us</span> about your
            <span className='text-greenText'> project</span>.
          </h2>
          <p className='3xl:text-xl 3xl:leading-6 lg:text-sm xl:text-base xl:leading-6 2xl:text-lg'>
            Do you have a vision for software that will make life easier for
            users? Then don't wait anymore!
          </p>
          <div className='flex flex-col xl:gap-[4px] 2xl:gap-[14px]'>
            <a
              href='mailto:info@futureproofsoft.com'
              className='3xl:text-xl flex gap-3 xl:text-base 2xl:text-lg'
            >
              <Mail className='m-1 lg:w-[26px] 2xl:w-[32px]' />
              info@futureproofsoft.com
            </a>

            <a
              href='tel:+381-64-4295-881'
              className='3xl:text-xl flex gap-3 xl:text-base 2xl:text-lg'
            >
              <Phone className='m-1 lg:w-[26px] 2xl:w-[32px]' />
              +381-64-4295-881
            </a>
          </div>
          <div className='flex xl:gap-[12px] 2xl:gap-[14px]'>
            <Instagram className='m-1 lg:w-[28px] 2xl:w-[32px]' />
            <a href='https://www.linkedin.com/company/79773452'>
              <Linkedin className='m-1 lg:w-[28px] 2xl:w-[32px]' />
            </a>
            <Facebook className='m-1 lg:w-[28px] 2xl:w-[32px]' />
            <Twitter className='m-1 lg:w-[28px] 2xl:w-[32px]' />
          </div>
        </div>

        <div className=' colorContact grid grid-rows-3 justify-between rounded-bl-3xl rounded-tl-3xl border-2 border-solid border-transparent lg:px-8  lg:py-4 xl:px-12 xl:py-8 2xl:p-12'>
          <div className='flex items-start justify-center'>
            <h2 className='3xl:text-5xl 3xl:leading-[64px] font-bold lg:text-2xl xl:leading-none 2xl:text-4xl '>
              Got a project?
              <br />
              Let's talk!
            </h2>
          </div>
          <div className='flex items-center '>
            <p className='3xl:text-xl lg:text-xs  2xl:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className='flex items-end justify-center'>
            <button className='3xl:text-base rounded-[32px] border-[1.5px] font-bold lg:px-6 lg:py-2 lg:text-xs xl:px-8 2xl:px-12 2xl:py-4'>
              Estimate your project
            </button>
          </div>
        </div>

        <div className='grid grid-rows-3 rounded-br-3xl rounded-tr-3xl  border-y-2 border-r-2 border-solid lg:px-8 lg:py-4 xl:px-12 xl:py-8 2xl:p-12'>
          <div className='flex items-start justify-center'>
            <h2 className='3xl:text-5xl 3xl:leading-[64px] font-bold lg:text-2xl xl:leading-none 2xl:text-4xl '>
              Join the team!
            </h2>
          </div>
          <div className='flex items-center'>
            <p className='3xl:text-xl lg:text-xs  2xl:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className='flex items-end justify-center'>
            <button className='3xl:text-base rounded-[32px] border-[1.5px] font-bold lg:px-6 lg:py-2 lg:text-xs xl:px-8 2xl:px-12 2xl:py-4'>
              Check out opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
