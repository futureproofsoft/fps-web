import AwsSvg from 'public/svg/LogoSVG/aws.svg';
import CssSvg from 'public/svg/LogoSVG/css2.svg';
import GoogleSvg from 'public/svg/LogoSVG/google.svg';
import HtmlSvg from 'public/svg/LogoSVG/html2.svg';
import JavaSricptSvg from 'public/svg/LogoSVG/JavaScript.svg';
import NodeSvg from 'public/svg/LogoSVG/nodejs.svg';
import ReactSvg from 'public/svg/LogoSVG/react.svg';
import TypeSricptSvg from 'public/svg/LogoSVG/typescript.svg';
import * as React from 'react';

const technologiesClassName =
  'sm:my-3 mb:my-1 flex sm:items-center sm:justify-center  2xl:my-12 transition duration-300 3xl:hover:scale-125 lg:hover:scale-[1.15]';

export const TechnologiesItem = () => {
  return (
    <>
      <div className='mb:hidden md:block'>
        <div className=' mb:px-6  inline-flex h-full  w-full flex-nowrap items-center gap-10 overflow-x-auto  sm:grid sm:grid-cols-4 sm:overflow-hidden'>
          <div className={technologiesClassName}>
            <HtmlSvg className='mb:w-[80px] sm:w-1/2' />
          </div>
          <div className={technologiesClassName}>
            <CssSvg className='mb:w-[80px] sm:w-1/2' />
          </div>
          <div className={technologiesClassName}>
            <JavaSricptSvg className='mb:w-[60px] sm:w-1/3' />
          </div>
          <div className={technologiesClassName}>
            <TypeSricptSvg className='mb:w-[60px] sm:w-1/3' />
          </div>
          <div className={technologiesClassName}>
            <NodeSvg className='mb:w-[160px] sm:w-3/4' />
          </div>
          <div className={technologiesClassName}>
            <ReactSvg className='mb:w-[160px] sm:w-full' />
          </div>
          <div className={technologiesClassName}>
            <AwsSvg className='mb:w-[80px] sm:w-1/2' />
          </div>
          <div className={technologiesClassName}>
            <GoogleSvg className='mb:w-[130px] sm:w-3/4' />
          </div>
        </div>
      </div>
      <div className='mb:block md:hidden'>
        <div className='inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <ul className='animate-infinite-scroll mb:justify-start  flex items-center justify-center [&_img]:max-w-none [&_li]:mx-8'>
            <HtmlSvg className='mb:w-[80px] mb:mx-4 sm:mx-8 sm:w-[100px]' />
            <CssSvg className='mb:w-[80px] mb:mx-4 sm:mx-8 sm:w-[100px]' />
            <JavaSricptSvg className='mb:w-[60px] mx-10 sm:w-[80px]' />
            <TypeSricptSvg className='mb:w-[60px] mx-10 sm:w-[80px]' />
            <NodeSvg className='mb:w-[160px] mb:mx-4 sm:mx-8 sm:w-[220px]' />
            <ReactSvg className='mb:w-[160px] mb:mx-4 sm:mx-8 sm:w-[220px]' />
            <AwsSvg className='mb:w-[80px] mb:mx-4 sm:mx-8 sm:w-[130px]' />
            <GoogleSvg className='mb:w-[130px] mb:mx-4 sm:mx-8 sm:w-[200px]' />
          </ul>
          <ul
            className='animate-infinite-scroll mb:justify-start flex items-center justify-center [&_img]:max-w-none [&_li]:mx-8'
            aria-hidden='true'
          >
            <HtmlSvg className='mb:w-[80px] mb:mx-4 sm:mx-8 sm:w-[100px]' />
            <CssSvg className='mb:w-[80px] mb:mx-4 sm:mx-8 sm:w-[100px]' />
            <JavaSricptSvg className='mb:w-[60px] mx-10 sm:w-[80px]' />
            <TypeSricptSvg className='mb:w-[60px] mx-10 sm:w-[80px]' />
            <NodeSvg className='mb:w-[160px] mb:mx-4 sm:mx-8 sm:w-[220px]' />
            <ReactSvg className='mb:w-[160px] mb:mx-4 sm:mx-8 sm:w-[220px]' />
            <AwsSvg className='mb:w-[80px] mb:mx-4 sm:mx-8 sm:w-[130px]' />
            <GoogleSvg className='mb:w-[130px] mb:mx-4 sm:mx-8 sm:w-[200px]' />
          </ul>
        </div>
      </div>
    </>
  );
};
