import {
  Button,
  Grid,
  TextField,
  Typography as MuiTypography,
} from "@mui/material";
import { ComponentProps, FC, useRef, useState } from "react";
import { Page } from "../components/Page";
import { useCurrentTheme } from "../utils/providers/ThemeProvider";

export const RefPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [ref, setRef] = useState<HTMLInputElement | null>(null);
  const [, setKey] = useState(0);

  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            inputRef={inputRef}
            sx={{ input: { color: "red" } }}
            label="useRef"
            variant="outlined"
            color="warning"
            focused
          />
        </Grid>
        <Grid item xs={6} container alignItems={"center"}>
          <Typography>{inputRef?.current?.value}</Typography>
        </Grid>

        <Grid item xs={6}>
          <TextField
            inputRef={setRef}
            sx={{ input: { color: "red" } }}
            label="useState"
            variant="outlined"
            color="success"
            focused
          />
        </Grid>
        <Grid item xs={6} container alignItems={"center"}>
          <Typography>{ref?.value}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => setKey(Math.random() * 1000)}
          >
            Reflect
          </Button>
        </Grid>
      </Grid>
    </Page>
  );
};

const Typography: FC<ComponentProps<typeof MuiTypography>> = ({ ...props }) => {
  const currentTheme = useCurrentTheme();
  return (
    <MuiTypography
      color={currentTheme === "dark" ? "whitesmoke" : "black"}
      {...props}
    />
  );
};
