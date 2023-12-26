import React, { useState, createContext, ReactNode } from "react";
import { ThemeType } from "../../components/Theme";

interface AppContextProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const defaultValue: AppContextProps = {
  value: 0,
  theme: "Light",
  setValue: () => {},
  setTheme: () => {},
};

export const AppContext = createContext<AppContextProps>(defaultValue);


export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [value, setValue] = useState(1);
  const [theme, setTheme] = useState<ThemeType>("Light");

  return (
    <AppContext.Provider value={{ value, setValue, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}
