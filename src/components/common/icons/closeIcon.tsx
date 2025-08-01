import React from 'react';

interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  color = 'black',
  size = 24,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.9498 8.46443C17.3403 8.07391 17.3403 7.44074 16.9498 7.05022C16.5592 6.65969 15.9261 6.65969 15.5355 7.05022L12 10.5858L8.46443 7.05025C8.07391 6.65972 7.44074 6.65972 7.05022 7.05025C6.65969 7.44077 6.65969 8.07394 7.05022 8.46446L10.5858 12L7.05026 15.5355C6.65973 15.926 6.65973 16.5592 7.05026 16.9497C7.44078 17.3402 8.07395 17.3402 8.46447 16.9497L12 13.4142L15.5355 16.9497C15.926 17.3403 16.5592 17.3403 16.9497 16.9497C17.3402 16.5592 17.3402 15.9261 16.9497 15.5355L13.4142 12L16.9498 8.46443Z" />
    </svg>
  );
};

export default CloseIcon;