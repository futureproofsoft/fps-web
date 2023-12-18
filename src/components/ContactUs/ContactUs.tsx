'use client';
import * as React from 'react';

const submitStyle =
  'color-1  btn-hover cursor-pointer mb:text-xl lg:text-xl rounded-3xl 2xl:px-16 2xl:py-3 font-bold lg:py-2 lg:px-12 mb:py-2 mb:px-12';

export const ContactUs = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Message:', message);
  };

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
          <form className='grid justify-normal' onSubmit={handleSubmit}>
            <div>
              <input
                placeholder='NAME'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border-greenText border-b-1 focus:border-b-1  focus:border-greenText w-full appearance-none
                border-x-0 border-t-0 bg-transparent py-2 focus:ring-0'
                required
                autoComplete='off'
              />
            </div>
            <div>
              <input
                placeholder='EMAIL'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className='flex justify-center pt-4'>
              <button type='submit' className={submitStyle}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
