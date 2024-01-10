'use client';
import * as React from 'react';
import { useRef, useState } from 'react';
import Captcha from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

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
    setIsSending(true);
    const captcha = await captchaRef.current?.executeAsync();
    const result = await validateCaptcha(captcha as string);
    console.log(result);
    if (result.success) {
      sendEmail(data, () => setIsSending(false));
    } else {
      setIsSending(false);
      alert('error');
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
            Do you need someone to{' '}
            <span className='text-greenText'>
              transform your vision into reality
            </span>
            ? Then get in touch with us.
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
            <div className='my-4 flex hidden justify-center'>
              <Captcha
                size='invisible'
                ref={captchaRef}
                sitekey='6LcgG0spAAAAAGaWFnP3UFyvmsGwjHyj5Q7t_EnG'
              />
            </div>
            <div className='flex flex-col items-center justify-center pt-4'>
              <button type='submit' className={submitStyle}>
                {isSending ? 'Sending...' : 'Send'}
                {isSending && (
                  <div role='status'>
                    <svg
                      aria-hidden='true'
                      className='h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                      />
                    </svg>
                    <span className='sr-only'>Loading...</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
