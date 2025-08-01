import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{
  $size?: 'sm' | 'md' | 'lg';
  $variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  $isActive?: boolean
  $disabled?: boolean
}>`
  height: 70px;
  width: 70px;
  background-color: transparent; // Semi-transparent red for visibility: ;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  
  &:hover {
    cursor: pointer;
    background-color: #5e769d16 ;
  }

  &:active {
    cursor: pointer;
    background-color: #5e769d4c ;
  }

  ${(props) => props.$disabled && css`
    &:hover {
      cursor: default;
      background-color: transparent;
    }
  `}
`;