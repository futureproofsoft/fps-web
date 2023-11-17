interface ItemProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export const Item: React.FC<ItemProps> = ({ children, className, href }) => {
  return (
    <li>
      <a href={href} data-te-smooth-scroll-init className={className}>
        {children}
      </a>
    </li>
  );
};
