import React from 'react'

interface IProps {}

const LoadingSpinner: React.FC<IProps> = () => {

    return (<svg width="80" height="80" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
      <stop stopColor="#57052F" stopOpacity="0" offset="0%"/>
      <stop stopColor="#57052F" stopOpacity=".631" offset="63.146%"/>
      <stop stopColor="#57052F" offset="100%"/>
    </linearGradient>
  </defs>
  <g fill="none">
    <g transform="translate(1 1)">
      <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" strokeWidth="3">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"/>
      </path>
      <path d="M0 18c0 9.94 8.06 18 18 18" stroke="#48032D" strokeWidth="3" opacity="0.5">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1.2s"
          repeatCount="indefinite"/>
      </path>
      <circle fill="#040404" cx="36" cy="18" r="1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"/>
      </circle>
      <circle fill="#000000" cx="18" cy="36" r="1" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1.2s"
          repeatCount="indefinite"/>
      </circle>
    </g>
  </g>
</svg>)
}

export default LoadingSpinner; 