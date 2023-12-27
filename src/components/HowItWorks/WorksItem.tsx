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
          ? 'transition duration-700'
          : 'opacity-20 transition duration-700'
      }`}
    >
      {itemNumber && (
        <h4 className='3xl:text-[32px] border-r-2 border-white pr-2 font-bold leading-none lg:text-[20px] xl:text-[26px] '>
          {itemNumber}
        </h4>
      )}
      {itemName && (
        <div className='flex flex-col gap-4 pl-6'>
          <h4 className='text-greenText 3xl:text-[32px] font-bold leading-none lg:text-[20px] xl:text-[26px]'>
            {itemName}
          </h4>
          {itemDescription && (
            <p className='3xl:text-xl font-normal sm:text-sm lg:text-xs xl:text-base'>
              {itemDescription}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
