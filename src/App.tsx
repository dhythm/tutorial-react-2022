import React from "react";
import { MemoPage } from "./pages/MemoPage";
import { I18nProvider } from "./utils/providers/I18nProvider";
import { ThemeProvider } from "./utils/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        {/* <WelcomePage /> */}
        <MemoPage />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
