export type Breakpoint = keyof typeof breakpoints;
export type BreakpointValues = { min: number; max: number };

export const breakpoints = {
  xs: { min: 0,    max: 575 },    // <576px
  sm: { min: 576,  max: 767 },    // ≥576px
  md: { min: 768,  max: 991 },    // ≥768px
  lg: { min: 992,  max: 1199 },   // ≥992px
  xl: { min: 1200, max: 1399 },   // ≥1200px
  xxl: { min: 1400, max: 9999 }   // ≥1400px
} as const;
