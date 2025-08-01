import styled from "styled-components";
import { media } from "../../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../../design-system/constants/breakpoints";
import { colorsCore } from "../../../design-system/core/colors";
import { LAYOUT } from "../../../design-system/constants/layout";

export const PageRootLayoutStyled = styled.div`
  top: 0;
  left: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

export const PageLayoutStyled = styled.div`
  
  height: calc(100vh - ${LAYOUT.navBar});
  margin-top: ${LAYOUT.navBar};
  
  position: relative;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  width: 100vw;

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

  ${media.up(breakpoints.xs)`
   `}

   ${media.up(breakpoints.sm)`
   `}


   ${media.up(breakpoints.md)`
       
   `}

   ${media.up(breakpoints.lg)`

    `}

`;

export const ImageLayoutStyled = styled.div`
  position: fixed;
  top: 10%;
  left: 90%;
  transform: translate(-50%, -50%) rotate(-15deg);

  height: 80vh;
  width: 80vh;
  opacity: 0.15;
  filter: blur(4px);
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg/450px-Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg.png?20190823020245');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;


`;