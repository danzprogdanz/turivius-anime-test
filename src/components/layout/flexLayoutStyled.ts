import styled from "styled-components";
import { spacing } from "../../design-system/core/spacing";

type SpacingKey = keyof typeof spacing;

interface FlexLayoutProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: SpacingKey;
  fullWidth?: boolean;
  fullHeight?: boolean;
  padding?: SpacingKey;
  margin?: SpacingKey;
}

export const FlexLayout = styled.div<FlexLayoutProps>`
  display: flex;
  min-width: 0;
  
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  
  gap: ${({ gap = 0 }) => spacing[gap]};
  padding: ${({ padding }) => padding ? spacing[padding] : '0'};
  margin: ${({ margin }) => margin ? spacing[margin] : '0'};
  
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  height: ${({ fullHeight }) => fullHeight ? '100%' : 'auto'};
`;