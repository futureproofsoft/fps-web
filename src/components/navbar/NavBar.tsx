'use client';

import Close from 'public/svg/close.svg';
import LogoHeader from 'public/svg/LogoHeader.svg';
import MenuBar from 'public/svg/menu.svg';
import * as React from 'react';

import { NavLists } from '@/components/navbar/NavLists';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showNav, setShowNav] = React.useState(true);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);
  const [yscale, setYscale] = React.useState(0);
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setYscale(window.scrollY / window.innerHeight);
    }
    const handleScroll = () => {
      if (window.scrollY > lastScrollPosition) {
        setShowNav(false);
        closeMenu();
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

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (isMenuOpen && !target.closest('header')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navStyle = {
    opacity: showNav ? 1 : 0,
    top: showNav ? 0 : '-100px',
    transition: 'opacity 0.5s, top 0.5s',
    transitionTimingFunction: 'ease-in-out',
    ...(isLargeScreen &&
      isMenuOpen && {
        background: 'hsla(0, 0%, 0%, 0.9)',
      }),
  };

  return (
    <>
      {isLargeScreen && (
        <header
          className={`${
            isMenuOpen ? 'hidden bg-black/90' : ''
          } 3xl:px-36 sm:grid-row-2 mb:grid mb:grid-cols-1  mb:sticky mb:-mx-6 mb:px-6  3xl:-mx-36 sticky z-30 items-center justify-between sm:-mx-12 sm:px-12 lg:-mx-16 lg:flex lg:px-16  xl:-mx-20   xl:px-20  2xl:-mx-28 2xl:px-28`}
        >
          <div className='z-20 flex justify-between'>
            <a href='#' onClick={closeMenu}>
              <LogoHeader
                alt='Logo'
                className='3xl:w-[270px] mb:w-[200px] z-20 py-4 md:w-[220px]   lg:w-[200px] xl:w-[200px] 2xl:w-[220px]'
              />
            </a>

            <button className='z-50 lg:hidden' onClick={toggleMenu}>
              {isMenuOpen ? (
                <Close
                  alt='Close bar'
                  className='border-greenText mb:w-[35px] rounded-full border-[1px] p-1 md:w-[40px]'
                />
              ) : (
                <MenuBar
                  alt='Menu bar'
                  className='border-greenText mb:w-[35px] rounded-full border-[1px] p-1 md:w-[40px]'
                />
              )}
            </button>
          </div>

          <NavLists className='mb:hidden lg:flex' />
          <div className='z-10 lg:hidden ' onClick={closeMenu}>
            {isMenuOpen && (
              <NavLists className='mb:-mx-6 mb:px-6 mb:py-4  absolute top-full z-30  grid w-full justify-center bg-black/90 pb-5  sm:-mx-12 sm:px-12 lg:hidden' />
            )}
          </div>
        </header>
      )}
      {!isLargeScreen && (
        <header
          style={navStyle}
          className={`${
            isMenuOpen ? 'hidden bg-black/90' : ''
          } 3xl:px-36 sm:grid-row-2 mb:grid mb:grid-cols-1  mb:sticky mb:-mx-6 mb:px-6  3xl:-mx-36 sticky z-30 items-center justify-between sm:-mx-12 sm:px-12 lg:-mx-16 lg:flex lg:px-16  xl:-mx-20   xl:px-20  2xl:-mx-28 2xl:px-28
       ${showNav && yscale > 0 ? `bg-black/90` : `flash-color`} `}
        >
          <div className='z-20 flex justify-between'>
            <a href='#' onClick={closeMenu}>
              <LogoHeader
                alt='Logo'
                className='3xl:w-[270px] mb:w-[200px] z-20 py-4 md:w-[220px]   lg:w-[200px] xl:w-[200px] 2xl:w-[220px]'
              />
            </a>

            <button className='z-50 lg:hidden' onClick={toggleMenu}>
              {isMenuOpen ? (
                <Close
                  alt='Close bar'
                  className='border-greenText mb:w-[35px] rounded-full border-[1px] p-1 md:w-[40px]'
                />
              ) : (
                <MenuBar
                  alt='Menu bar'
                  className='border-greenText mb:w-[35px] rounded-full border-[1px] p-1 md:w-[40px]'
                />
              )}
            </button>
          </div>

          <NavLists className='mb:hidden lg:flex' />
          <div className='z-10 lg:hidden ' onClick={closeMenu}>
            {isMenuOpen && (
              <NavLists className='mb:-mx-6 mb:px-6 mb:py-4  absolute top-full z-30  grid w-full justify-center bg-black/90 pb-5  sm:-mx-12 sm:px-12 lg:hidden' />
            )}
          </div>
        </header>
      )}
    </>
  );
};
