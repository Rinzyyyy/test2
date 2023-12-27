import { ReactNode, useContext } from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { AppContext } from "../../context/context";

export type ThemeType = "Light" | "Dark";

export const customTheme: { [Key in ThemeType]: Object } = {
  Light: {
    backgroundColor: "#938e6c",
    textColor: "#60c2cd",
  },
  Dark: {
    backgroundColor: "#333",
    textColor: "#fff",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(AppContext);

  return (
    <StyledThemeProvider theme={customTheme[theme]}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
  button{
      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.textColor};
    }
`;
