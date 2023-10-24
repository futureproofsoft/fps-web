import Image from 'next/image';
import * as React from 'react';

import { ItemList } from '@/components/navbar/ItemList';

import Logo from '../../../public/images/logo.png';

export const NavBar = () => {
  return (
    <header className='flex items-center justify-between'>
      <a href='#'>
        <Image width={200} height={50} alt='Logo' src={Logo} />
      </a>

      <nav>
        <ul className='flex space-x-8 text-xs font-medium'>
          <ItemList className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            About us
          </ItemList>
          <ItemList className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            Technologies
          </ItemList>
          <ItemList className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            Services
          </ItemList>
          <ItemList className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            Reviews
          </ItemList>
          <ItemList className=' px-1 py-3 transition duration-500 hover:border-b-4 hover:border-teal-500'>
            Careers
          </ItemList>
          <ItemList className='rounded-2xl border-indigo-500 bg-teal-500 px-6 py-2.5'>
            Contact us
          </ItemList>
        </ul>
      </nav>
    </header>
  );
};
