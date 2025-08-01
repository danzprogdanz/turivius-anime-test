import styled from "styled-components";
import { LAYOUT } from "../../../design-system/constants/layout";
import { Z_INDEX } from "../../../design-system/constants/zIndex";
import { colorsCore } from "../../../design-system/core/colors";
import { media } from "../../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../../design-system/constants/breakpoints";

export const NavbarRootStyled = styled.div`
    height: ${LAYOUT.navBar};
    position: absolute;
    width: 100vw;
    z-index: ${Z_INDEX.navBar};
    background-color: transparent ;
    border-bottom: 3px solid ${colorsCore.blue100};
    display: flex;
    align-items: center;
`

export const InputField = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: ${colorsCore.white};
  font-size: 0.95rem;
  transition: all 0.3s ease;
  width: 100%;

  ${media.up(breakpoints.lg)`
       justify-content: center;
    `}
  
  &::placeholder {
    color: ${colorsCore.gray600};
  }
  
  &:focus {
    outline: none;
    border-color: ${colorsCore.blue300};
    box-shadow: 0 0 0 2px rgba(90, 186, 238, 0.2);
  }
`;

export const InputWrapperStyled = styled.div`
    display: flex;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

     ${media.up(breakpoints.xs)`
        width: 70vw;
        margin-left: 90px;
     `}

    ${media.up(breakpoints.sm)`
            width: 60vw;
            margin-left: auto;
            margin-right: auto;
        `}
    
    
       ${media.up(breakpoints.md)`
            width: 40vw;
       `}
    
       ${media.up(breakpoints.lg)`
            
        `}

        ${media.up(breakpoints.xl)`
        `}

        ${media.up(breakpoints.xxl)`
        `}
`

export const SearchIconWrapperStyled = styled.div`
    margin-left: -30px;
    transform: translateX(-10px);
    display: flex;
    align-items: center;
    justify-content: center;
`