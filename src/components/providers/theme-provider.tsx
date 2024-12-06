import {
  createTheme,
  ThemeProvider as ThemeProviderMain,
} from "@mui/material/styles";

export function ThemeProvider({ children }: { children?: React.ReactNode }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return <ThemeProviderMain theme={darkTheme}>{children}</ThemeProviderMain>;
}
