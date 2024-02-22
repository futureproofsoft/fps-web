import Close from 'public/svg/ElementSvg/close.svg';
import { useEffect, useState } from 'react';

interface AlertProps {
  labelUp: string;
  labelDown: string;
}

export const Alert: React.FC<AlertProps> = ({ labelUp, labelDown }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-10 flex min-h-full w-screen flex-col items-center justify-center overflow-y-auto bg-black bg-opacity-70'>
          <div className='mb:w-4/5 mb:h-1/5 bg-custom-gradient from-lightGreen border-blackBg to-darkBlue flex flex-col gap-4 rounded-lg px-4 pb-4 pt-5 sm:p-6 sm:pb-4 lg:h-1/4 lg:w-1/3'>
            <div className='flex justify-end'>
              <button
                onClick={handleClose}
                className='mb:w-[30px] p-1 focus:outline-none md:w-[40px]'
              >
                <Close alt='Close bar' />
              </button>
            </div>
            <div className='mb:text-lg flex flex-col items-center justify-center text-white lg:text-2xl'>
              <p>{labelUp}</p>
              <p>{labelDown}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
//   <p>Thanks for reaching out.</p>
//   <p>We’ll get back to you soon!</p>
