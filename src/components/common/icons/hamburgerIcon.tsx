import React from 'react';

interface HamburgerIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4.00001 12C4.00001 11.4477 4.44772 11 5.00001 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5.00001C4.44772 13 4.00001 12.5523 4.00001 12ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
        fill={color}
      />
    </svg>
  );
};

export default HamburgerIcon;