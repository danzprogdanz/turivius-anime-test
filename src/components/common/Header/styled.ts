import styled from "styled-components";
import { colorsCore } from "../../../design-system/core/colors";
import { media } from "../../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../../design-system/constants/breakpoints";

export const HeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, ${colorsCore.blue1000} 0%, ${colorsCore.darkBlue900} 100%);
  color: ${colorsCore.white};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(219, 230, 243, 0.05) 1px,
      transparent 1px
    );
    background-size: 20px 100%;
    pointer-events: none;
  };

  ${media.up(breakpoints.sm)`
     padding: 2rem 4rem;
   `}

   ${media.up(breakpoints.md)`
      padding: 2.5rem 15vw;
   `}
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const MainTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 300;
  margin: 0;
  letter-spacing: 1px;
  color: ${colorsCore.white};
  text-transform: uppercase;

  ${media.up(breakpoints.sm)`
     font-size: 2.8rem;
   `}

   ${media.up(breakpoints.md)`
     font-size: 3.5rem;
   `}
  
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0.5rem 0 0;
  color: ${colorsCore.blue200};
  letter-spacing: 0.5px;

  ${media.up(breakpoints.sm)`
     font-size: 1.1rem;
   `}
`;

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: ${colorsCore.blue200};
  flex-wrap: wrap;
`;

export const PathSegment = styled.span<{ $isLast?: boolean }>`
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.2rem 0.5rem;
  color: ${props => props.$isLast ? colorsCore.white : 'inherit'};
  font-weight: ${props => props.$isLast ? '500' : 'normal'};
  
  &:hover {
    color: ${colorsCore.white};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0.5rem;
      right: 0.5rem;
      height: 1px;
      background: ${colorsCore.white};
      animation: underline 0.3s ease forwards;
    }
  }

  @keyframes underline {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`;

export const Separator = styled.span`
  margin: 0 0.5rem;
  color: ${colorsCore.blue400};
`;