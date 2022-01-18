import React from "react";
import { WelcomePage } from "./pages/WelcomePage";
import { I18nProvider } from "./utils/hooks/I18nProvider";
import { ThemeProvider } from "./utils/hooks/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <WelcomePage />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
