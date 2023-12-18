interface ItemProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export const Item: React.FC<ItemProps> = ({ children, className, href }) => {
  return (
    <li className='mb:flex mb:flex-col mb:items-center mb:py-2 lg:block'>
      <a href={href} className={className}>
        {children}
      </a>
    </li>
  );
};
