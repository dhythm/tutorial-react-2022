import React from "react";
import { WelcomePage } from "./pages/WelcomePage";
import { I18nProvider } from "./utils/providers/I18nProvider";
import { ThemeProvider } from "./utils/providers/ThemeProvider";

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
