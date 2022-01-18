import React from "react";
import { WelcomePage } from "./pages/WelcomePage";
import { ThemeProvider } from "./utils/hooks/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <WelcomePage />
    </ThemeProvider>
  );
}

export default App;
