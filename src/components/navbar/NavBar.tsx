'use client';

import LogoHeader from 'public/svg/LogoHeader.svg';
import * as React from 'react';

import { Item } from '@/components/navbar/Item';

export const NavBar = () => {
  const [showNav, setShowNav] = React.useState(true);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);
  const [yscale, setYscale] = React.useState(0);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setYscale(window.scrollY / window.innerHeight);
    }
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

  const navStyle = {
    opacity: showNav ? 1 : 0,
    top: showNav ? 0 : '-100px',
    transition: 'opacity 0.5s, top 0.5s',
    transitionTimingFunction: 'ease-in-out',
  };

  const ulItemStyle =
    'hover:border-greenText cursor-pointer  px-1 py-3 transition duration-300 hover:border-b-4';

  const contactUsStyle =
    'color-1  btn-hover cursor-pointer rounded-3xl px-8 py-3 font-bold';

  return (
    <header
      style={navStyle}
      className={`sticky z-30 -mx-36 flex items-center justify-between  px-36
      ${showNav && yscale > 0 ? `bg-black/90` : `flash-color`} `}
    >
      <a href='#'>
        <LogoHeader width={270} alt='Logo' className='z-20 py-4' />
      </a>

      <nav>
        <ul className='flex space-x-[50px] text-base font-medium'>
          <Item href='#about-us' className={ulItemStyle}>
            About us
          </Item>
          <Item href='#technologies' className={ulItemStyle}>
            Technologies
          </Item>
          <Item href='#services' className={ulItemStyle}>
            Services
          </Item>
          <Item href='#reviews' className={ulItemStyle}>
            Reviews
          </Item>
          <Item href='#contact-us' className={contactUsStyle}>
            Contact us
          </Item>
        </ul>
      </nav>
    </header>
  );
};
