import Image from 'next/image';
import * as React from 'react';

import { Item } from '@/components/navbar/Item';

import Logo from '../../../public/images/logo.png';

export const NavBar = () => {
  return (
    <header className='flex items-center justify-between'>
      <a href='#'>
        <Image width={200} height={50} alt='Logo' src={Logo} />
      </a>

      <nav>
        <ul className='flex space-x-8 text-xs font-medium'>
          <Item className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            About us
          </Item>
          <Item className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            Technologies
          </Item>
          <Item className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            Services
          </Item>
          <Item className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            Reviews
          </Item>
          <Item className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
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
