export interface GlobalTheme {
  body: string;
  sub: string;
  text: {
    main: string;
    contrast: string;
  };
  main: string;
  typography: Typography;
  breakpoints: Breakpoints;
}

export interface Typography {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const breakpoints: Breakpoints = {
  xs: "(min-width: 320px)",
  sm: "(min-width: 480px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)"
}

const typography: Typography = {
  xs: "0.75rem",
  sm: "0.875",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem"
}

export const lightTheme: GlobalTheme = {
  body: "#fafafa",
  sub: "#fff",
  text: {
    main: "#555",
    contrast: "#fff"
  },
  main: "#ff3352",
  typography,
  breakpoints
}

export const darkTheme: GlobalTheme = {
  body: "#222",
  sub: "#303030",
  text: {
    main: "#fff",
    contrast: "#fff"
  },
  main: "#ff3352",
  typography,
  breakpoints
}