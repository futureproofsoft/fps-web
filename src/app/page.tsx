'use client';

import Head from 'next/head';
import * as React from 'react';

import { BackgroundWeb } from '@/components/backgroundWeb/BackgroundWeb';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { Hero } from '@/components/hero/Hero';
import { HowItWorks } from '@/components/HowItWorks/HowItWorks';
import { WhoWeAre } from '@/components/HowItWorks/WhoWeAre';
import { ReviewsNew } from '@/components/Reviews/ReviewsNew';
import { Services } from '@/components/Services/Services';
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
      {/* <Reviews /> */}
      <ReviewsNew />
      <ContactUs />
    </main>
  );
}
