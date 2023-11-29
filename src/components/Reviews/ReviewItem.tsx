import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { ReviewText } from '@/components/Reviews/ReviewText';

export type ReviewItemProps = {
  name: string;
  title: string;
  message: string;
  active: boolean;
  paginate: (newDirection: number) => void;
  direction: number;
};

export const ReviewItem: React.FC<ReviewItemProps> = ({
  name,
  title,
  message,
  active,
  direction,
}) => {
  return (
    <div className='bg-custom-gradient from-lightGreen to-darkBlue z-10 -mr-28 flex flex-col rounded-3xl p-14 text-white'>
      <AnimatePresence>
        {active && (
          <ReviewText
            key={name} // unique key for each item
            name={name}
            title={title}
            message={message}
            direction={direction}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
