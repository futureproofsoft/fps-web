import React from 'react';

interface WorksProps {
  className?: string;
  itemNumber?: string;
  itemName?: string;
  itemDescription?: string;
  active?: boolean;
}

export const WorksItem: React.FC<WorksProps> = ({
  itemNumber,
  itemName,
  itemDescription,
  active = false,
}) => {
  return (
    <div
      className={`flex py-6 ${
        active
          ? 'transition duration-300'
          : 'opacity-20 transition duration-300'
      }`}
    >
      {itemNumber && (
        <h4 className='border-r-2 border-white pr-2 text-[32px] font-bold leading-none '>
          {itemNumber}
        </h4>
      )}
      {itemName && (
        <div className='flex flex-col gap-4 pl-6'>
          <h4 className='text-greenText text-[32px] font-bold leading-none'>
            {itemName}
          </h4>
          {itemDescription && (
            <p className='text-xl font-normal'>{itemDescription}</p>
          )}
        </div>
      )}
    </div>
  );
};
