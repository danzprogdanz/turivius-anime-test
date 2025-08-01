import { css } from "styled-components";
import { breakpoints } from "../constants/breakpoints";

export const media = {
  up: (breakpoint: typeof breakpoints[keyof typeof breakpoints]) => 
    (...args: Parameters<typeof css>) => css`
      @media (min-width: ${breakpoint.min}px) {
        ${css(...args)}
      }
    `,
  down: (breakpoint: typeof breakpoints[keyof typeof breakpoints]) => 
    (...args: Parameters<typeof css>) => css`
      @media (max-width: ${breakpoint.max}px) {
        ${css(...args)}
      }
    `,
  between: (lower: typeof breakpoints[keyof typeof breakpoints], 
            upper: typeof breakpoints[keyof typeof breakpoints]) => 
    (...args: Parameters<typeof css>) => css`
      @media (min-width: ${lower.min}px) and (max-width: ${upper.max}px) {
        ${css(...args)}
      }
    `,
};

/* usage example */

/* const Card = styled.div`
  padding: 1rem;
  background: white;
  margin: 0 auto;

  ${media.up(breakpoints.sm)`
    padding: 2rem;
    max-width: 80%;
  `}

  ${media.between(breakpoints.md, breakpoints.lg)`
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 8px;
  `}

  ${media.down(breakpoints.xs)`
    font-size: 14px;
  `}
`; */
