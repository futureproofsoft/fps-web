'use client';
import Image from 'next/image';
import * as React from 'react';

import { Item } from '@/components/navbar/Item';

import Logo from '../../../public/images/logo2.png';

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
      className={`transparent relative z-30 -mx-20 flex items-center justify-between px-20
      ${
        scrollUp && yscale
          ? 'sticky top-0  bg-black/90 transition duration-700'
          : 'transition duration-300'
      } `}
    >
      <a href='#'>
        <Image width={260} alt='Logo' src={Logo} className='z-20 py-4' />
      </a>

      <nav>
        <ul className='flex space-x-6 text-base font-medium'>
          <Item className='hover:border-greenText  cursor-pointer px-1 py-3 font-normal transition duration-300 hover:border-b-4'>
            About us
          </Item>
          <Item className='hover:border-greenText  cursor-pointer px-1 py-3 font-normal transition duration-300 hover:border-b-4'>
            Technologies
          </Item>
          <Item className='hover:border-greenText  cursor-pointer px-1 py-3 font-normal transition duration-300 hover:border-b-4'>
            Services
          </Item>
          <Item className='hover:border-greenText  cursor-pointer px-1 py-3 font-normal transition duration-300 hover:border-b-4'>
            Reviews
          </Item>
          <Item className='hover:border-greenText  cursor-pointer px-1 py-3 font-normal transition duration-300 hover:border-b-4'>
            Careers
          </Item>
          <Item className='color-1  btn-hover cursor-pointer rounded-3xl px-8 py-3 font-bold'>
            Contact us
          </Item>
        </ul>
      </nav>
    </header>
  );
};
