'use client';
import Image from 'next/image';
import PhonePicture from 'public/images/reviewsImage2.png';
import Arrow from 'public/svg/ElementSvg/Arrow.svg';
import Quote from 'public/svg/ElementSvg/quotation.svg';
import * as React from 'react';

export const ReviewsNew = () => {
  const data = [
    {
      name: 'Miloš Rakić',
      title: 'CEO at Fidija',
      message:
        'We have been working with Future Proof Soft Co on our TogetherAll project for over a 2 years now, and we have been consistently impressed with their expertise, professionalism, and dedication. The Future Proof Soft team has a deep understanding of our needs, and they have consistently delivered high-quality work on time. We are highly satisfied with their services, and we would highly recommend them to any company looking for a reliable and skilled software development partner.',
    },
    {
      name: 'Sava Tasić',
      title: 'CEO at Future Proof Soft',
      message:
        'Prepare yourself for a rollercoaster of mediocrity and despair! I recently had the misfortune of subjecting myself to what can only be described as the Picasso of terrible experiences. If disappointment were an Olympic sport, this place would take home the gold, silver, and bronze.',
    },
  ];
  const [[page], setPage] = React.useState([0]);
  const imageIndex = ((page % data.length) + data.length) % data.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection]);
  };
  const activeItem = data[imageIndex];

  return (
    <section id='reviews' className='3xl:py-36 mb:pt-20 sm:py-24 lg:py-28'>
      <div className='flex flex-col '>
        <h5 className='border-greenText 3xl:text-2xl mb:text-sm border-s-4 px-3 font-bold tracking-[4.8px] md:text-sm lg:text-base xl:text-lg'>
          REVIEWS
        </h5>

        <h2 className='3xl:text-6xl mb:text-2xl mb:leading-none pb-12 pt-6 font-bold leading-none tracking-normal md:pb-12 lg:pb-14 lg:pt-5 xl:text-[38px] 2xl:pb-20 2xl:pt-7 2xl:text-[44px]'>
          We want to <span className='text-greenText'>share</span> with you the
          experiences of our{' '}
          <span className='text-greenText'>valued clients</span>.
        </h2>
      </div>
      <div className='rounded-2xl'>
        <div className='mb:block md:grid md:grid-cols-[1fr,1.4fr]'>
          <div className='border-blackBg border-2'>
            <Image
              src={PhonePicture}
              priority
              alt='Phone Picture'
              className='mb:hidden h-full w-full rounded-bl-2xl rounded-tl-2xl object-cover object-center brightness-[0.3] md:grid md:[clip-path:polygon(0%_0%,90%_0%,75%_100%,0%_100%)] '
            />
          </div>

          <div className='bg-custom-gradient from-lightGreen border-blackBg to-darkBlue mb:p-4 flex flex-col justify-between rounded-2xl border-2 md:-ml-64 md:pl-60'>
            <div className='md:pr-16'>
              <div className='flex flex-col'>
                <p className='mb:text-xl font-bold md:pt-5 md:text-2xl xl:text-2xl 2xl:pt-7 2xl:text-3xl'>
                  {activeItem.name}
                </p>
                <p className='mb:text-lg font-bold md:text-xl xl:text-2xl 2xl:text-2xl'>
                  {activeItem.title}
                </p>
              </div>
            </div>
            <div className='flex flex-col '>
              <div className='flex'>
                <Quote className='3xl:w-16 mb:w-10 mb:-ml-3 mb:-mb-7 absolute rotate-180 md:-mb-5 md:-ml-10 xl:w-12' />
              </div>

              <p className='mb:text-sm mb:h-[220px] 3xl:text-2xl z-10 my-10 flex h-[200px] items-center justify-center sm:h-[200px] sm:text-base md:text-base lg:h-[180px] lg:text-base xl:text-lg 2xl:text-xl'>
                {activeItem.message}
              </p>

              <div className='-mt-8 flex items-end justify-end'>
                <Quote className='3xl:w-16 mb:w-10 flex items-end justify-end xl:w-12' />
              </div>
            </div>
            <div className='mb:gap-4 flex items-end justify-end md:gap-8'>
              <Arrow
                onClick={() => paginate(1)}
                className='border-greenText 3xl:w-[50px] mb:w-[35px] relative rotate-180 rounded-full border-2 hover:cursor-pointer xl:w-[40px]'
              />
              <Arrow
                onClick={() => paginate(-1)}
                className='border-greenText 3xl:w-[50px] mb:w-[35px] relative rounded-full border-2 hover:cursor-pointer xl:w-[40px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
