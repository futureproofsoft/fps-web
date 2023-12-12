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
    <section
      id='contact-us'
      className='3xl:py-36 mb:py-12 sm:pb-24 lg:py-20 xl:py-28'
    >
      <div className='mb:grid-rows-1 grid sm:grid-cols-2 md:grid-rows-1 lg:grid-cols-[1.6fr,1fr,1fr]  '>
        <div className='3xl:pr-48 mb:col-span-2 mb:pb-8 mb:pr-12 justify-between gap-1 md:flex md:flex-col lg:col-span-1  lg:pr-24 xl:pr-36 2xl:pr-44'>
          <h5 className='border-greenText 3xl:text-2xl  border-s-4 px-3 font-bold tracking-[4.8px] sm:text-[12px] md:text-sm  xl:text-lg'>
            CONTACT US
          </h5>
          <h2 className='3xl:text-6xl  mb:pb-5 mb:pt-2 mb:text-2xl font-bold tracking-normal sm:leading-none xl:text-[38px] 2xl:text-[44px] 2xl:leading-none'>
            Talk to <span className='text-greenText'>us</span> about your
            <span className='text-greenText'> project</span>.
          </h2>
          <p className='3xl:text-xl 3xl:leading-6 mb:pb-5 mb:text-sm xl:text-base xl:leading-6 2xl:text-lg '>
            Do you have a vision for software that will make life easier for
            users? Then don't wait anymore!
          </p>
          <div className='flex flex-col xl:gap-[4px] 2xl:gap-[14px] '>
            <a
              href='mailto:info@futureproofsoft.com'
              className='3xl:text-xl flex items-center gap-3 xl:text-base 2xl:text-lg'
            >
              <Mail className='mb:w-[26px] m-1 flex 2xl:w-[32px]' />
              info@futureproofsoft.com
            </a>

            <a
              href='tel:+381-64-4295-881'
              className='3xl:text-xl flex items-center gap-3 xl:text-base 2xl:text-lg'
            >
              <Phone className='mb:w-[26px] m-1 2xl:w-[32px]' />
              +381-64-4295-881
            </a>
          </div>
          <div className='flex xl:gap-[12px] 2xl:gap-[14px]'>
            <Instagram className='mb:w-[24px] m-1 lg:w-[28px] 2xl:w-[32px]' />
            <a href='https://www.linkedin.com/company/79773452'>
              <Linkedin className='mb:w-[24px] m-1 lg:w-[28px] 2xl:w-[32px]' />
            </a>
            <Facebook className='mb:w-[24px] m-1 lg:w-[28px] 2xl:w-[32px]' />
            <Twitter className='mb:w-[24px] m-1 lg:w-[28px] 2xl:w-[32px]' />
          </div>
        </div>

        <div className='mb:hidden colorContact justify-between rounded-bl-3xl rounded-tl-3xl border-2 border-solid  border-transparent sm:grid sm:grid-rows-[2fr,2fr,1fr] sm:px-8 sm:py-4 md:px-14 md:py-4 lg:grid-rows-3 lg:px-8  xl:px-12 xl:py-8 2xl:p-12'>
          <div className='flex items-start justify-center'>
            <h2 className='3xl:text-5xl 3xl:leading-[64px] font-bold lg:text-2xl xl:text-3xl xl:leading-none 2xl:text-4xl '>
              Got a project?
              <br />
              Let's talk!
            </h2>
          </div>
          <div className='flex items-center '>
            <p className='3xl:text-xl sm:text-xs  xl:text-base 2xl:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className='flex items-end justify-center'>
            <button className='3xl:text-base rounded-[32px] border-[1.5px] font-bold sm:px-4 sm:py-1  sm:text-[10px]  lg:px-6 lg:py-2 lg:text-xs xl:px-8 xl:text-sm 2xl:px-12 2xl:py-4'>
              Estimate your project
            </button>
          </div>
        </div>

        <div
          className='mb:hidden rounded-br-3xl rounded-tr-3xl border-y-2 border-r-2 border-solid  sm:grid sm:grid-rows-[2fr,2fr,1fr]  sm:px-8 sm:py-4
md:px-14 md:py-4 lg:grid-rows-3 lg:px-8 lg:py-4 xl:px-12 xl:py-8 2xl:p-12'
        >
          <div className='flex items-start justify-center'>
            <h2 className='3xl:text-5xl 3xl:leading-[64px] font-bold lg:text-2xl xl:text-3xl xl:leading-none 2xl:text-4xl '>
              Join the team!
            </h2>
          </div>
          <div className='flex items-center'>
            <p className='3xl:text-xl sm:text-xs xl:text-base 2xl:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className='flex items-end justify-center'>
            <button className='3xl:text-base rounded-[32px] border-[1.5px] font-bold sm:px-4 sm:py-1  sm:text-[10px]  lg:px-6 lg:py-2 lg:text-xs xl:px-8 xl:text-sm 2xl:px-12 2xl:py-4'>
              Check out opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
