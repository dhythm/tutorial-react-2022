import { Box } from "@mui/material";
import { FC } from "react";
import { useCurrentTheme } from "../utils/providers/ThemeProvider";

export const Page: FC = ({ children }) => {
  const theme = useCurrentTheme();
  return (
    <Box height={"100vh"} bgcolor={theme === "dark" ? "#282c34" : "whitesmoke"}>
      <Box display={"flex"} flex={1} p={2}>
        {children}
      </Box>
    </Box>
  );
};
