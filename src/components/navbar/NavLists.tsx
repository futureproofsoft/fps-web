import { Item } from '@/components/navbar/Item';

interface ItemProps {
  className?: string;
}

const ulItemStyle =
  'hover:border-greenText cursor-pointer mb:text-xl lg:text-base  mb:py-1 lg:py-3 2xl:py-2 transition duration-300  lg:hover:border-b-4 ';

const contactUsStyle =
  'color-1  btn-hover cursor-pointer mb:text-xl lg:text-base rounded-3xl 2xl:px-8 2xl:py-3 font-bold lg:py-2 lg:px-6 mb:py-2 mb:px-6';

export const NavLists: React.FC<ItemProps> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className='3xl:text-base mb:gap-6 font-medium lg:flex xl:text-sm '>
        <Item href='#about-us' className={ulItemStyle}>
          About us
        </Item>
        <Item href='#technologies' className={ulItemStyle}>
          Technologies
        </Item>
        <Item href='#services' className={ulItemStyle}>
          Services
        </Item>
        <Item href='#reviews' className={ulItemStyle}>
          Reviews
        </Item>
        <Item href='#contact-us' className={contactUsStyle}>
          Contact us
        </Item>
      </ul>
    </nav>
  );
};
