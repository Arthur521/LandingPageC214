import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  ...chakraTheme.fonts,
  body: 'Arial, sans-serif',
  heading: 'Arial, sans-serif',
};

const breakpoints = ({
  sm: "40em",
  md: "52em",
  lg: "62em",
});

const theme = extendTheme({
  fonts,
  breakpoints,
  fontWeights: {
    'italic' : 100,
    'normal' : 600,
    'medium' : 800,
    'bold' : 1000,
  },
  fontSizes: {
    xs: "12px", 
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  styles: {
    global: {
      "html, body": {
        backgroundImage: "url('/DotGrid.png')",
        backgroundRepeat: "repeat, repeat",
        backgroundBlendMode: "",
        color: "white",
        minHeight: "10vh",
        margin: 0,
      },
    },
  },
  
});

export default theme;
