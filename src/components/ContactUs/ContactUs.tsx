'use client';
import Linkedin from 'public/svg/ElementSvg/linkedin.svg';
import Mail from 'public/svg/ElementSvg/mail.svg';
import { useRef, useState } from 'react';
import Captcha from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { Alert } from '@/components/ContactUs/Alert';
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
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const captchaRef = useRef<Captcha>(null);

  async function onSubmit(data: FormData) {
    try {
      setIsSending(true);
      const captcha = await captchaRef.current?.executeAsync();
      const result = await validateCaptcha(captcha as string);
      if (result.success) {
        await sendEmail(data);
        setMessageSent(true);
      }
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(true);
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
        <div className='flex flex-col md:gap-12'>
          <h5 className='border-greenText 3xl:text-2xl  border-s-4 px-3 font-bold tracking-[4.8px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg'>
            CONTACT US
          </h5>
          <h2 className='3xl:text-6xl  mb:pt-6 mb:text-2xl font-bold tracking-normal sm:leading-none md:pr-4 xl:text-[38px] 2xl:text-[44px] 2xl:leading-none'>
            Make the first step.
            <br /> Get in touch with us.
          </h2>
          <div className=' mb:hidden flex flex-col justify-end gap-2 md:flex'>
            <a
              href='mailto:info@futureproofsoft.com'
              className='3xl:text-xl flex items-center gap-3 xl:text-base 2xl:text-lg'
            >
              <Mail className='mb:w-[26px] m-1 flex 2xl:w-[32px] ' />
              info@futureproofsoft.com
            </a>

            <a
              href='https://rs.linkedin.com/company/future-proof-soft'
              className='3xl:text-xl flex items-center gap-3 xl:text-base 2xl:text-lg'
            >
              <Linkedin className='mb:w-[26px] m-1 2xl:w-[32px]' />
              Future-Proof Soft
            </a>
          </div>
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
                maxLength={40}
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
                {...register('message', { required: true })}
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
              <button
                onClick={() => messageSent && reset()}
                type='submit'
                className={submitStyle}
              >
                <div
                  className={`flex items-center justify-between ${
                    isSending ? 'gap-4' : ''
                  }`}
                >
                  <p>{isSending ? 'Sending...' : 'Send'}</p>
                  {isSending && <Circuit />}
                </div>
              </button>
            </div>
          </form>
          {messageSent && (
            <Alert
              labelUp='Thanks for reaching out.'
              labelDown='We’ll get back to you soon!'
            />
          )}
          {errorMessage && (
            <Alert
              labelUp='Something went wrong.'
              labelDown='Please, try again.'
            />
          )}
        </div>
      </div>
    </section>
  );
};
