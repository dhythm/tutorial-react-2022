import { createContext, FC, useContext, useMemo, useState } from "react";
import { assert } from "../assert";

type Props = {
  currentLanguage: string;
  changeLanguage: () => void;
};

const Context = createContext<Props | undefined>(undefined);

export const useI18n = (): [string, () => void] => {
  const context = useContext(Context);
  assert(context, "useI18n must be used within I18nProvider");
  return [context.currentLanguage, context.changeLanguage];
};

export const I18nProvider: FC = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const changeLanguage = () => {
    setCurrentLanguage((prev) => (prev === "en" ? "ja" : "en"));
  };
  return useMemo(
    () => (
      <Context.Provider value={{ currentLanguage, changeLanguage }}>
        {children}
      </Context.Provider>
    ),
    [children, currentLanguage]
  );
};
