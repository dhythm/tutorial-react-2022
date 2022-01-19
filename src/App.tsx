import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { MemoPage } from "./pages/MemoPage";
import { RefPage } from "./pages/RefPage";
import { WelcomePage } from "./pages/WelcomePage";
import { I18nProvider } from "./utils/providers/I18nProvider";
import { ThemeProvider } from "./utils/providers/ThemeProvider";

function App() {
  const [value, setValue] = useState("main");
  return (
    <ThemeProvider>
      <I18nProvider>
        <Box mx={2}>
          <FormControl>
            <RadioGroup
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              row
            >
              <FormControlLabel value="main" control={<Radio />} label="Main" />
              <FormControlLabel value="memo" control={<Radio />} label="Memo" />
              <FormControlLabel value="ref" control={<Radio />} label="Ref" />
            </RadioGroup>
          </FormControl>
        </Box>
        {value === "main" ? (
          <WelcomePage />
        ) : value === "memo" ? (
          <MemoPage />
        ) : (
          <RefPage />
        )}
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
