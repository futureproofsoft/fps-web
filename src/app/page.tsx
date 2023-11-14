'use client';

import Head from 'next/head';
import * as React from 'react';

import { BackgroundWeb } from '@/components/backgroundWeb/BackgroundWeb';
import ContactUs from '@/components/ContactUs';
import { Hero } from '@/components/hero/Hero';
import { HowItWorks } from '@/components/HowItWorks/HowItWorks';
import { WhoWeAre } from '@/components/HowItWorks/WhoWeAre';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import { Technologies } from '@/components/Technologies/Technologies';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <BackgroundWeb />
      <Hero />
      <WhoWeAre />
      <HowItWorks />
      <Technologies />
      <Services />
      <Reviews />
      <ContactUs />
    </main>
  );
}
