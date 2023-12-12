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
  'xl:my-6 flex flex sm:items-center sm:justify-center 2xl:my-12 transition duration-300 3xl:hover:scale-125 lg:hover:scale-[1.15]';

export const TechnologiesItem = () => {
  return (
    <div className=' mb:px-6 flex h-full w-full items-center gap-10 overflow-x-auto  sm:grid sm:grid-cols-4 sm:overflow-hidden'>
      <div className={technologiesClassName}>
        <HtmlSvg className='mb:w-[100px] sm:w-1/2' />
      </div>
      <div className={technologiesClassName}>
        <CssSvg className='mb:w-[100px] sm:w-1/2' />
      </div>
      <div className={technologiesClassName}>
        <JavaSricptSvg className='mb:w-[80px] sm:w-1/3' />
      </div>
      <div className={technologiesClassName}>
        <TypeSricptSvg className='mb:w-[80px] sm:w-1/3' />
      </div>
      <div className={technologiesClassName}>
        <NodeSvg className='mb:w-[180px] sm:w-3/4' />
      </div>
      <div className={technologiesClassName}>
        <ReactSvg className='mb:w-[180px] sm:w-full' />
      </div>
      <div className={technologiesClassName}>
        <AwsSvg className='mb:w-[90px] sm:w-1/2' />
      </div>
      <div className={technologiesClassName}>
        <GoogleSvg className='mb:w-[140px] sm:w-3/4' />
      </div>
    </div>
  );
};
