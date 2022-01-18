import { Box } from "@mui/material";
import { FC } from "react";
import { useCurrentTheme } from "../utils/hooks/ThemeProvider";

export const Page: FC = ({ children }) => {
  const theme = useCurrentTheme();
  return (
    <Box
      display={"flex"}
      flex={1}
      p={2}
      justifyContent={"flex-start"}
      height={"100vh"}
      bgcolor={theme === "dark" ? "#282c34" : "#ffffff"}
    >
      {children}
    </Box>
  );
};
