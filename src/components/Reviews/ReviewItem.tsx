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
    <div className='flex flex-col '>
      <AnimatePresence>
        {active && (
          <ReviewText
            key={name}
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
