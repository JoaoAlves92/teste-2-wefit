const breakpoints = ["576px", "768px", "1024px", "1170px", "1366px"];

const theme = {
  breakpoints: {
    mobile: breakpoints[0],
    tablet: breakpoints[1],
    laptop: breakpoints[2],
    desktop: breakpoints[3],
    desktopLarge: breakpoints[4],
  },
  colors: {
    primary: "#009EDD",
    secondary: "#039B00",
    background: "#2F2E41",
    text: "#FFF",
    black: '#2F2E41',
    white: '#FFF',
    grey: '#999999'
  },
  fonts: {
    main: "Arial, sans-serif",
  },
};

export default theme;
