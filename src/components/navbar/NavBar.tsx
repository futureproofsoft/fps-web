'use client';
import Image from 'next/image';
import * as React from 'react';

import { Item } from '@/components/navbar/Item';

import Logo from '../../../public/images/logo.png';

export const NavBar = () => {
  const [scrollUp, setScrollUp] = React.useState(false);
  const [prevScrollY, setPrevScrollY] = React.useState(0);

  React.useEffect(() => {
    const scrollableElement = document.body;

    scrollableElement.addEventListener('wheel', checkScrollDirection);

    function checkScrollDirection(event: WheelEvent) {
      if (checkScrollDirectionIsUp(event)) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    }

    function checkScrollDirectionIsUp(event: WheelEvent) {
      if (event.deltaY < 0) {
        return true;
      }
      return false;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        if (scrollUp) {
          setScrollUp(false);
        }
      } else {
        if (!scrollUp) {
          setScrollUp(true);
        }
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      scrollableElement.removeEventListener('wheel', checkScrollDirection);
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  });

  let yscale = 1;
  if (typeof window !== 'undefined') {
    yscale = window.scrollY / window.innerHeight;
  }

  return (
    <header
      className={`transparent  relative flex items-center justify-between
      ${
        scrollUp && yscale
          ? 'sticky top-0 bg-black/90 transition duration-1000'
          : 'transition duration-300'
      } `}
    >
      <a href='#'>
        <Image width={200} height={50} alt='Logo' src={Logo} className='z-20' />
      </a>

      <nav>
        <ul className='flex cursor-pointer space-x-6 text-xs font-medium'>
          <Item className=' px-1 py-3 transition duration-300 hover:border-b-4 hover:border-teal-500'>
            About us
          </Item>
          <Item className=' px-1 py-3 transition duration-300 hover:border-b-4 hover:border-teal-500'>
            Technologies
          </Item>
          <Item className=' px-1 py-3 transition duration-300 hover:border-b-4 hover:border-teal-500'>
            Services
          </Item>
          <Item className=' px-1 py-3 transition duration-300 hover:border-b-4 hover:border-teal-500'>
            Reviews
          </Item>
          <Item className=' px-1 py-3 transition duration-300 hover:border-b-4 hover:border-teal-500'>
            Careers
          </Item>
          <Item className='rounded-2xl border-indigo-500 bg-teal-500 px-6 py-2.5'>
            Contact us
          </Item>
        </ul>
      </nav>
    </header>
  );
};
