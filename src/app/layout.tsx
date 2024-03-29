import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { Footer } from '@/components/Footer/Footer';
import { NavBar } from '@/components/navbar/NavBar';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: 'Future-Proof Soft',
    template: `%s | Future-Proof Soft`,
  },
  description: 'Future-Proof Soft web presentation',
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   // creator: '@th_clarence',
  // },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id='style-3' className='overflow-x-hidden !scroll-smooth'>
      <body className='bg-blackBg 3xl:mx-36 mb:mx-6 hide-scrollbar	 select-none text-white  sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
