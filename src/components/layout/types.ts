import type { spacing } from "../../design-system/core/spacing";

export type SpacingKey = Exclude<keyof typeof spacing, 'base'>;
export type ResponsiveProp<T> = T | T[];
