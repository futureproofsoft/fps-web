'use client';

import Head from 'next/head';
import * as React from 'react';

import ContactUs from '@/components/ContactUs';
import { Hero } from '@/components/hero/Hero';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <Hero />
      <ContactUs />
    </main>
  );
}
