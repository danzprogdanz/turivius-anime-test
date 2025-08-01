import React from "react";
import type { IProps } from "./types";
import { ButtonStyled } from "./styled";

const IconButton: React.FC<IProps> = ({
  icon,
  size = 'md',
  variant = 'primary',
  isActive,
  isDisabled = false,
  onClick,
  ...props
}) => {

  const handleOnClick = () => {
    if (isDisabled) { return }
    onClick()
  }

  return (<ButtonStyled $disabled={isDisabled} onClick={handleOnClick} {...props}>{icon}</ButtonStyled>)
}

export default IconButton;