// MenuMobile.styles.ts
import styled, { css } from "styled-components";
import { media } from "../../../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../../../design-system/constants/breakpoints";
import { colorsCore } from "../../../../design-system/core/colors";
import { Z_INDEX } from "../../../../design-system/constants/zIndex";

export const ItemRootStyled = styled.div<{
  $isActive: boolean;
}>`
  height: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 15px;
  background-color: ${props => props.$isActive ? "#ffffff24" : "transparent"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffffff24;
    cursor: pointer;
  }

  ${media.up(breakpoints.lg)`
    width: 300px;
  `}
`;

export const LabelStyled = styled.div<{
  $isActive: boolean;
}>`
  color: white;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  display: flex;
  font-size: 1rem;
  flex-grow: 1;

  &:hover {
    color: ${colorsCore.gray200};
  }

  ${(props) =>
    props.$isActive &&
    css`
      color: ${colorsCore.teal300};
      font-weight: 700;
    `}

  ${media.up(breakpoints.lg)`
    background-color: ${colorsCore.blue1000};
  `}
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(24 23 53 / 92%);
  z-index: ${Z_INDEX.sideBar - 1};
  display: none;

  ${(props) =>
    props.$isOpen &&
    css`
      display: block;
    `}
`;

export const SideBarRootStyled = styled.div<{
  $isOpen?: boolean;
  $isDesktopOpen?: boolean;
}>`
  position: absolute;
  margin: 0;
  width: 70px;
  height: 70px;
  background-color: transparent;
  z-index: ${Z_INDEX.sideBar};
`;

export const IconsWrapperStyled = styled.div`
  position: fixed;
  height: 70px;
  width: 70px;
  border-right: 3px solid ${colorsCore.blue100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #161b2cbd;
`;

export const LabelsMobileContainerStyled = styled.div``;

export const LabelsContainerStyled = styled.div<{
  $isOpen?: boolean;
}>`
  position: fixed;
  top: 70px; 
  left: 0;
  width: 100vw;
  height: 100%; 
  overflow-y: auto; 
  overflow-x: hidden; 
  background-color: #161b2cbd;
  border-top: 3px solid ${colorsCore.blue100};
  display: none;
  flex-direction: column;
  z-index: ${Z_INDEX.sideBar};

  ${(props) =>
    props.$isOpen &&
    css`
      display: flex;
    `}

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${colorsCore.darkBlue700};
    border-radius: 10px;
    margin: 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${colorsCore.blue400}, ${colorsCore.blue600});
    border-radius: 10px;
    border: 2px solid ${colorsCore.darkBlue700};
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(${colorsCore.blue300}, ${colorsCore.blue500});
    }
  }

  scrollbar-width: thin;
  scrollbar-color: ${colorsCore.blue500} ${colorsCore.darkBlue700};
`;