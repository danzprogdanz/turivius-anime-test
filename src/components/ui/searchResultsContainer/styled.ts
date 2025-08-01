import styled from "styled-components";
import { colorsCore } from "../../../design-system/core/colors";
import { media } from "../../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../../design-system/constants/breakpoints";

export const SearchResultsContainer = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: calc(90%);
  width: 40vw;
  max-height: 500px;
  overflow-y: auto;
  background: ${colorsCore.darkBlue800};
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid ${colorsCore.blue300};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.3s ease;
  z-index: 1000;
  overflow-x: hidden;
  margin-left: auto;
  margin-right: auto;
  left: translateX(-50%);
  
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

  /* Firefox Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: ${colorsCore.blue500} ${colorsCore.darkBlue700};


  ${media.up(breakpoints.xs)`
      width: 70vw;
       left: (90px);
      `}
  
     ${media.up(breakpoints.sm)`
       width: 60vw;
      `}
  
  
     ${media.up(breakpoints.md)`
        width: 40vw;
        
     `}
  
     ${media.up(breakpoints.lg)`
  
      `}
`;

export const ResultItem = styled.button`
  all: unset;
padding: 1.2rem 1.5rem;
border-bottom: 1px solid #212A42;
cursor: pointer;
transition: all 0.2s ease;
display: flex;
align-items: center;
width: 100%; /* Changed from 'auto' to '100%' */
box-sizing: border-box;
  
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: ${colorsCore.darkBlue600};
  }
`;

export const AnimeCover = styled.div`
  width: 50px;
  height: 70px;
  background: ${colorsCore.darkBlue500};
  margin-right: 1rem;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AnimeInfo = styled.div`
  flex: 1;
`;

export const AnimeTitle = styled.h4`
  color: ${colorsCore.white};
  margin: 0 0 0.3rem 0;
  font-weight: 500;
  font-size: 1rem;
`;

export const AnimeDetails = styled.p`
  color: ${colorsCore.gray500};
  margin: 0;
  font-size: 0.85rem;
`;

export const LoadingMessage = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: ${colorsCore.gray400};
  font-style: italic;
`;

export const ErrorMessage = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: ${colorsCore.red300};
`;

export const NoResultsMessage = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: ${colorsCore.gray500};
`;



