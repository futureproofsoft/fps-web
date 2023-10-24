interface ItemProps {
  className?: string;
  children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({ children, className }) => {
  return (
    <li>
      <a className={className}>{children}</a>
    </li>
  );
};
