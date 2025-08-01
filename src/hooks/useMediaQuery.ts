import { useState, useEffect } from 'react';
import { breakpoints } from '../design-system/constants/breakpoints';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

// Hook to check if screen is mobile (less than lg breakpoint)
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${breakpoints.lg.min - 1}px)`);
}