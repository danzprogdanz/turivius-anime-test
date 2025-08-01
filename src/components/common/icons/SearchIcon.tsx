import React from 'react';

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  color = 'black',
  size = 24,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path d="M11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C15.0041 18.25 18.25 15.0041 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75ZM2.25 11C2.25 6.16751 6.16751 2.25 11 2.25C15.8325 2.25 19.75 6.16751 19.75 11C19.75 13.1462 18.9773 15.112 17.6949 16.6343L20.48 19.4194C20.7729 19.7123 20.7729 20.1872 20.48 20.4801C20.1871 20.773 19.7123 20.773 19.4194 20.4801L16.6342 17.6949C15.1119 18.9773 13.1462 19.75 11 19.75C6.16751 19.75 2.25 15.8325 2.25 11Z" fill={color} />

    </svg>
  );
};

export default SearchIcon;