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
        <div>
          <div className='fixed inset-0 z-10 flex min-h-full w-screen flex-col items-center justify-center bg-black bg-opacity-70'>
            <div className='mb:w-4/5 mb:h-1/5 bg-custom-gradient from-lightGreen to-darkBlue rounded-lg p-2 lg:h-1/4 lg:w-1/3'>
              <div className='relative'>
                <button
                  onClick={handleClose}
                  className='mb:w-[30px] absolute right-0  top-0 p-1 focus:outline-none md:w-[40px]'
                >
                  <Close alt='Close bar' />
                </button>
              </div>

              <div className='mb:text-lg flex h-full flex-col items-center justify-center text-white lg:text-2xl'>
                <p>{labelUp}</p>
                <p>{labelDown}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
