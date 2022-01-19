import { Typography } from "@mui/material";
import { ComponentProps, forwardRef } from "react";

export const Text = forwardRef<
  HTMLSpanElement | null,
  ComponentProps<typeof Typography>
>((props, ref) => {
  return <Typography ref={ref} {...props} />;
});
