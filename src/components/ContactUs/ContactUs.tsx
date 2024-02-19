'use client';
import * as React from 'react';
import { useRef, useState } from 'react';
import Captcha from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { Circuit } from '@/components/ContactUs/Circuit';

import { sendEmail } from '@/utils/send-email';
import { validateCaptcha } from '@/utils/validate-captcha';

const submitStyle =
  'color-1 btn-hover cursor-pointer mb:text-xl py-2 lg:text-xl rounded-3xl 2xl:px-16 2xl:py-2 font-bold lg:py-2 lg:px-12 mb:py-2 mb:px-12';
export type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactUs = () => {
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();
  const captchaRef = useRef<Captcha>(null);

  async function onSubmit(data: FormData) {
    try {
      setIsSending(true);
      const captcha = await captchaRef.current?.executeAsync();
      const result = await validateCaptcha(captcha as string);
      if (result.success) {
        await sendEmail(data);
      } else {
        console.error(result);
      }
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id='contact-us'
      className='3xl:py-36 mb:py-20 sm:pb-24 lg:py-20 xl:py-28'
    >
      <div className='mb:grid-rows-1 mb:grid-cols-1 mb:gap-10 grid pt-8 md:grid-cols-2 md:grid-rows-1 lg:gap-40  '>
        <div className='flex flex-col gap-12'>
          <h5 className='border-greenText  3xl:text-2xl  border-s-4 px-3 font-bold tracking-[4.8px] sm:text-[12px] md:text-sm  xl:text-lg'>
            CONTACT US
          </h5>
          <h2 className='3xl:text-6xl  mb:pt-2 mb:text-2xl font-bold tracking-normal sm:leading-none md:pr-4 xl:text-[38px] 2xl:text-[44px] 2xl:leading-none'>
            Make the first step.
            <br /> Get in touch with us.
          </h2>
        </div>
        <div>
          <form
            className='grid justify-normal'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                placeholder='NAME'
                id='name'
                {...register('name', { required: true })}
                className='border-greenText border-b-1 focus:border-b-1  focus:border-greenText w-full appearance-none
                border-x-0 border-t-0 bg-transparent py-2 focus:ring-0'
                required
                autoComplete='off'
              />
            </div>
            <div>
              <input
                placeholder='EMAIL'
                type='email'
                id='email'
                {...register('email', { required: true })}
                className='border-greenText border-b-1 focus:border-b-1 focus:border-greenText w-full
                border-x-0	 border-t-0 bg-transparent py-2 focus:ring-0'
                required
                autoComplete='off'
              />
            </div>
            <div>
              <textarea
                placeholder='MESSAGE'
                className='border-greenText border-b-1 focus:border-b-1 focus:border-greenText h-[200px] w-full border-x-0 border-t-0 bg-transparent py-2 focus:ring-0'
                id='message'
                {...register('message', { required: true, maxLength: 500 })}
                required
                maxLength={500}
              />
            </div>
            <div className='my-4 hidden justify-center'>
              <Captcha
                size='invisible'
                ref={captchaRef}
                sitekey='6LcgG0spAAAAAGaWFnP3UFyvmsGwjHyj5Q7t_EnG'
              />
            </div>
            <div className='flex items-center justify-center pt-4'>
              <button type='submit' className={submitStyle}>
                <div
                  className={`flex items-center justify-between ${
                    isSending ? 'gap-4' : ''
                  }`}
                >
                  <div>{isSending ? 'Sending...' : 'Send'}</div>
                  <div>{isSending && <Circuit />}</div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
