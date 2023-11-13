'use client';

import LogoHeader from 'public/svg/LogoHeader.svg';
import * as React from 'react';

import { Item } from '@/components/navbar/Item';

export const NavBar = () => {
  const [showNav, setShowNav] = React.useState(true);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollPosition) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  React.useEffect(() => {
    const scrollableElement = document.body;
    scrollableElement.addEventListener('wheel', checkScrollDirection);

    function checkScrollDirection(event: WheelEvent) {
      if (checkScrollDirectionIsUp(event)) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    }

    function checkScrollDirectionIsUp(event: WheelEvent) {
      if (event.deltaY < 0) {
        return true;
      }
      return false;
    }
  });

  let yscale = 0;
  if (typeof window !== 'undefined') {
    yscale = window.scrollY / window.innerHeight;
  }

  const navStyle = {
    opacity: showNav ? 1 : 0,
    top: showNav ? 0 : '-100px',
    transition: 'opacity 0.5s, top 0.5s',
    transitionTimingFunction: 'ease-in-out',
  };

  return (
    <header
      style={navStyle}
      className={` sticky z-30 -mx-20 flex items-center justify-between px-20
      ${yscale > 0 ? `sticky top-0 transition duration-500` : ''} ${
        showNav && yscale > 0 ? `bg-black/90` : `flash-color `
      } `}
    >
      <a href='#'>
        <LogoHeader width={270} alt='Logo' className='z-20 py-4' />
      </a>

      <nav>
        <ul className='flex space-x-10 text-base font-medium'>
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
