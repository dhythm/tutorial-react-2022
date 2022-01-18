import constate from "constate";
import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return { theme, changeTheme };
};

export const [ThemeProvider, useCurrentTheme, useChangeTheme] = constate(
  useTheme,
  (v) => v.theme,
  (v) => v.changeTheme
);
