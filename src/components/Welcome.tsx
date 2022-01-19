import { Typography } from "@mui/material";
import { VFC } from "react";

export const Welcome: VFC<{ name: string }> = ({ name }) => {
  return (
    <Typography variant="h3" color={"skyblue"}>
      Hello, {name}
    </Typography>
  );
};
