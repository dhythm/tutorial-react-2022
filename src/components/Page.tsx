import { Box } from "@mui/material";
import { FC } from "react";

export const Page: FC = ({ children }) => {
  return (
    <Box
      display={"flex"}
      flex={1}
      p={2}
      justifyContent={"flex-start"}
      height={"100vh"}
      bgcolor={"#282c34"}
    >
      {children}
    </Box>
  );
};
