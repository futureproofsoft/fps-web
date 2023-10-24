export const ItemList = ({ children, className }: any) => {
  return (
    <li>
      <a className={className}>{children}</a>
    </li>
  );
};
