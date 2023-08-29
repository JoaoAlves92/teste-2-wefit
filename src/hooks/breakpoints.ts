import { useState, useLayoutEffect } from "react";
import theme from "styles/theme";

interface Breakpoints {
  mobile: boolean;
  tablet: boolean;
  laptop: boolean;
  desktop: boolean;
  desktopLarge: boolean;
}

const getBreakpoints = (): Breakpoints => {
  const breakpoints: Breakpoints = {
    mobile: false,
    tablet: false,
    laptop: false,
    desktop: false,
    desktopLarge: false,
  };

  for (const key of Object.keys(theme.breakpoints)) {
    const breakpointKey = key as keyof typeof theme.breakpoints;
    const breakpoint = theme.breakpoints[breakpointKey];
    breakpoints[breakpointKey] = window.innerWidth > parseInt(breakpoint);
  }

  return breakpoints;
};

export const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>(getBreakpoints());

  useLayoutEffect(() => {
    function updateBreakpoints() {
      setBreakpoints(getBreakpoints());
    }

    window.addEventListener("resize", updateBreakpoints);

    return () => window.removeEventListener("resize", updateBreakpoints);
  }, []);

  return breakpoints;
};
