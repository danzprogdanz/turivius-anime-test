import styled, { css, keyframes } from "styled-components";
import { Z_INDEX } from "../../../../design-system/constants/zIndex";
import { media } from "../../../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../../../design-system/constants/breakpoints";
import { LAYOUT } from "../../../../design-system/constants/layout";
import { colorsCore } from "../../../../design-system/core/colors";
import IconButton from "../../../common/iconButton.tsx";

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 100%;
  }
`;

const iconSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SideBarRootStyled = styled.div<{ $isOpen?: boolean }>`
  position: absolute;
  margin: 0;
  width: 70px;
  height: 70px;
  background-color: #00092C;;
  z-index: ${Z_INDEX.sideBar};
  transition: all 0.3s ease;

  ${(props) => props.$isOpen ? (`
    ${media.up(breakpoints.md)`
      width: ${LAYOUT.sidebarWidth};
    `}
  `) : (`
    ${media.up(breakpoints.md)`
      width: 70px;
    `}
  `)};

  ${media.up(breakpoints.lg)`
    height: 100vh;
  `}
`;

export const IconsWrapperStyled = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  height: 70px;
  width: 70px;
  border-right: 3px solid ${colorsCore.blue100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #161b2cbd;
  backdrop-filter: blur(5px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) => props.$isOpen ? (`
    ${media.up(breakpoints.lg)`
      height: 100vh;
      width: ${LAYOUT.sidebarWidth};
    `}
  `) : (`
    ${media.up(breakpoints.lg)`
      height: 100vh;
      width: 70px;
    `}
  `)};

  &:hover {
    ${(props) => !props.$isOpen ? (`
      ${media.up(breakpoints.lg)`
        width: 80px;
        box-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
      `}
    `) : ''};
  }
`;

export const LabelsContainerStyled = styled.div<{
  $isOpen?: boolean;
  $isAnimating?: boolean;
}>`
  position: absolute;
  height: calc(100vh - ${LAYOUT.navBar});
  margin-top: ${LAYOUT.navBar};
  display: none;
  flex-direction: column;
  background-color:  #00092C;
  overflow: hidden;
  animation: ${(props) =>
    props.$isAnimating
      ? props.$isOpen
        ? css`${slideIn} 0.3s forwards`
        : css`${slideOut} 0.3s forwards`
      : "none"};

  ${media.up(breakpoints.lg)`
    width: fit-content;
    display: flex;
  `}

  ${media.up(breakpoints.xxl)`
    grid-template-columns: repeat(3, fit-content(100%));
  `}

  ${(props) => props.$isOpen ? (`
    ${media.up(breakpoints.lg)`
      width: calc(${LAYOUT.sidebarWidth} - 70px) !important;
    `}
  `) : ''};
`;

export const LabelStyled = styled.div<{
  $isActive: boolean;
  $isOpen: boolean;
}>`
  color: white;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  display: none;
  padding: 0 15px;
  white-space: nowrap;
  transition: all 0.2s ease;
  animation: ${(props) => (props.$isOpen ? fadeIn : "none")} 0.3s forwards;
  

  &:hover {
    background-color: ${colorsCore.gray900};
    color: ${colorsCore.gray200};
  }

  ${(props) =>
    props.$isActive &&
    css`
      color: ${colorsCore.teal300};
      font-size: 1.2rem;
      font-weight: 700;
      text-decoration: underline;
    `}

  ${(props) =>
    props.$isOpen &&
    css`
      display: flex;
    `}
`;

export const ItemRootStyled = styled.div<{
  $isActive: boolean;
  $isOpen: boolean;
}>`
  height: fit-content;
  width: 70px;
  display: flex;
  border-right: 3px solid ${colorsCore.blue100};
  transition: all 0.3s ease;
  overflow: hidden;

  ${(props) => props.$isOpen ? (`
    width: 30vw;
    ${media.up(breakpoints.lg)`
      width: calc(${LAYOUT.sidebarWidth} - 70px);
    `}
  `) : ''};

  &:hover {
    background-color: #ffffff24;
    cursor: pointer;

    ${(props) =>
    props.$isOpen &&
    css`
        box-shadow: 0 0 10px rgba(0, 150, 255, 0.2);
      `}
  }

  ${(props) =>
    props.$isActive &&
    css`
      background-color: #ffffff24;
      cursor: pointer;

      &:hover {
        background-color: #ffffff24;
        cursor: pointer;
      }
    `}
`;

export const HamburgerButton = styled(IconButton) <{ $isOpen: boolean }>`
  transition: all 0.3s ease;
  &:hover {
    animation: ${iconSpin} 0.5s ease;
  }

  ${(props) =>
    props.$isOpen &&
    css`
      transform: rotate(90deg);
    `}
`;