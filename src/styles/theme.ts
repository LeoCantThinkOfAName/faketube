export interface GlobalTheme {
  body: string;
  sub: string;
  text: {
    main: string;
    contrast: string;
  };
  main: string;
  typography: Typography;
}

export interface Typography {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export const lightTheme: GlobalTheme = {
  body: "#fafafa",
  sub: "#fff",
  text: {
    main: "#555",
    contrast: "#fff"
  },
  main: "#ff3352",
  typography: {
    xs: "0.75rem",
    sm: "0.875",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem"
  }
}

export const darkTheme: GlobalTheme = {
  body: "#555",
  sub: "#777",
  text: {
    main: "#fff",
    contrast: "#fff"
  },
  main: "#ff3352",
  typography: {
    xs: "0.75rem",
    sm: "0.875",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem"
  }
}